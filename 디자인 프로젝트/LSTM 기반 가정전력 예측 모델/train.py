import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import datetime
import torch
from torch.autograd import Variable
import torch.nn as nn
from torch.autograd import Variable
import torch.optim as optim
from torch.utils.data import TensorDataset, DataLoader
from sklearn.preprocessing import StandardScaler, MinMaxScaler

dataPath = '/content/drive/MyDrive/dpFinal/data/'
resultPath = '/content/drive/MyDrive/dpFinal/final_result/'

# GPU setting

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")

def fill_missing(values):
	one_day = 12 * 24
	for i in range(values.shape[0]):
		row = values.shape[0] - i - 1
		for j in range(values.shape[1]):
			col = values.shape[1] - j - 1
			if values[row, col]!=values[row, col]:
				if i == 0:
					values[row, col] = 0
				elif i <= 12:
					values[row, col] = values[row + 1, col]
				elif i <= 12*24:
					values[row, col] = values[row + 12, col]
				elif i <= 12*24*7:
					values[row, col] = values[row + one_day, col]
				else:
					values[row, col] = values[row + one_day*7, col]

def mintohour(df):
    df1=df.copy()
    minnum = df1.shape[0]
    hournum = minnum//12
    for i in range(hournum):
        X=df1.iloc[12*i:12*(i+1)].copy()
        df1.iloc[12*i]=X.sum(axis=0)
    Y=df1.iloc[0::12,:].copy()
    return(Y)
files=['dp_102_1501','dp_101_402','dp_102_609']

for i in range(3):#######file
  filename = files[i]
  data = pd.read_csv(dataPath + filename +'.csv')
  data1 = data.iloc[:,1:].copy()
  fill_missing(data1.values)
  hourdata = mintohour(data1)
  
  total_data_num = hourdata.shape[0]
  input_length=30*24
  output_length=1*24
  seq_length=input_length+output_length
  batch_size=16 ## batch 16 or 32
  test_data_num=70*24
  train_data_num=total_data_num-test_data_num
  input_feature=hourdata.shape[1]
  hidden_feature=32
  num_layers=1
  num_epochs=50
  learning_rate=0.0001
  
  def build_dataset(df,seq_length,input_length,batch_size):
      data_input = []
      data_output = []
      data = np.array(df)
      for i in range(len(df)-seq_length+1):
          x=data[i:i+input_length,:]
          y=data[i+input_length:i+seq_length,:]
          data_input.append(x)
          data_output.append(y)
      x = torch.Tensor(np.array(data_input))
      y = torch.Tensor(np.array(data_output))
      print(x.shape,y.shape)
      dataset = TensorDataset(x,y)
      dataloader = DataLoader(dataset, batch_size=batch_size, shuffle=True)
  
      return dataset,dataloader
  
  mm = MinMaxScaler()
  hourdata_mm = mm.fit_transform(hourdata)
  
  
  train_hourdata=hourdata_mm[:train_data_num,:].copy()
  test_hourdata=hourdata_mm[-test_data_num:,:].copy()
  
  train_dataset, train_dataloader = build_dataset(train_hourdata,seq_length,input_length,batch_size)
  test_dataset, test_dataloader = build_dataset(test_hourdata,seq_length,input_length,batch_size)
  
  class LSTM1(nn.Module):
    def __init__(self,input_feature,hidden_feature,num_layers,input_length,output_length,batch_size):
      super(LSTM1, self).__init__()
      self.input_size=input_feature
      self.hidden_size=hidden_feature
      self.num_layers=num_layers
      self.input_length=input_length
      self.output_length=output_length
      self.batch_size = batch_size
      self.lstm=nn.LSTM(input_size=input_feature, hidden_size=hidden_feature,
                      num_layers=num_layers, batch_first=True)
      self.relu = nn.ReLU()
      self.fc1 = nn.Linear(in_features=input_length*hidden_feature, out_features=2000)
      self.fc2 = nn.Linear(in_features=2000, out_features=output_length*input_feature)
  
  
    def forward(self,x):
      h_0 = Variable(torch.zeros(self.num_layers, x.size(0), self.hidden_size)).to(device) 
      c_0 = Variable(torch.zeros(self.num_layers, x.size(0), self.hidden_size)).to(device) 
      output, (hn, cn) = self.lstm(x, (h_0, c_0))
      out = output
      out = self.relu(out)
      out = out.reshape(x.size(0),-1)
      out = self.fc1(out)
      out = self.relu(out)
      out = self.fc2(out)
      out = out.reshape(x.size(0),self.output_length,self.input_size)
      return out
  
  minloss=1
  an=0
  for k in range(3):  
    print(f"{filename},{k+1}th")
    lstm1=LSTM1(input_feature,hidden_feature,num_layers,input_length,output_length,batch_size).to(device)
  
    loss_function = torch.nn.MSELoss() 
    optimizer = torch.optim.Adam(lstm1.parameters(), lr=learning_rate)
  
    total_step = len(train_dataloader) 
    total_loss = []
    testtotal_loss = []
    stop=1
  
    for epoch in range(num_epochs):
      ########################
      testepoch_loss=[]
      for idx, (testX,testY) in enumerate(test_dataloader):
        test_predict = lstm1.forward(testX.to(device))
        loss1 = loss_function(test_predict, testY.to(device))
        testepoch_loss.append(loss1.detach().cpu().numpy())
      testtotal_loss.append(np.mean(testepoch_loss))
      if stop > np.mean(testepoch_loss):
        stop = np.mean(testepoch_loss)
        torch.save(lstm1,resultPath + "stopmodel.pth")
        an=0
      else:
        an=an+1
        print(an)
        if an == 2:
          print(f'epoch : {epoch}, stop')
          break
      #######################
      epoch_loss = []
      for batch_idx, (X,Y) in enumerate(train_dataloader):
        outputs = lstm1.forward(X.to(device)) 
        optimizer.zero_grad() 
        loss = loss_function(outputs, Y.to(device))
        loss.backward()  
        optimizer.step()
        epoch_loss.append(loss.detach().cpu().numpy()) 
      total_loss.append(np.mean(epoch_loss))
  
      if epoch == 0 or (epoch+1)%1 == 0:  
        print(f"Epoch [{epoch}/{num_epochs}], test loss : {np.mean(testepoch_loss)} ")
        print(f"Epoch [{epoch+1}/{num_epochs}], train loss : {np.mean(epoch_loss)}")
  
    plt.figure(figsize=(10,6))
    plt.plot(range(len(total_loss)),total_loss, label='train Loss') 
    plt.plot(range(len(testtotal_loss)),testtotal_loss, label='test Loss') 
    plt.title(f'{filename}Loss')
    plt.legend()
    plt.show()
  
    model=torch.load(resultPath + "stopmodel.pth")
  
    train_loss=[]
    for idx, (trainX,trainY) in enumerate(train_dataloader):
      train_predict = model.forward(trainX.to(device))
      loss = loss_function(train_predict, trainY.to(device))
      train_loss.append(loss.detach().cpu().numpy())
    trainloss=np.mean(train_loss)
    print(f"trainloss : {trainloss}")
  
    test_loss=[]
    for idx, (testX,testY) in enumerate(test_dataloader):
      test_predict = model.forward(testX.to(device))
      loss = loss_function(test_predict, testY.to(device))
      test_loss.append(loss.detach().cpu().numpy())
    testloss=np.mean(test_loss)
    print(f"testloss : {testloss}\n.")
  
    if minloss > testloss:
      minloss = testloss
      print("finalmodel update") 
      torch.save(model,resultPath +filename+ "_finalmodel1.pth")
  
  
  
      