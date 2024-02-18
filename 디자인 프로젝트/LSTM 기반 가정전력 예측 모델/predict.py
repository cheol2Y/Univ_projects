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

def hourtoday(df):
    df1=df.copy()
    hournum = df1.shape[0]
    daynum = hournum//24
    for i in range(daynum):
        X=df1.iloc[24*i:24*(i+1)].copy()
        df1.iloc[24*i]=X.sum(axis=0)
    Y=df1.iloc[0::24].copy()
    return(Y)

def daytomon(df):
    df1=df.copy()
    daynum = df1.shape[0]
    monnum = 13
    day=[0,31,31,30,31,30,31,31,28,31,30,31,30,31]  ########################################
    a=0
    for i in range(monnum):
        a=a+day[i]
        b=a+day[i+1]
        X=df1.iloc[a:b].copy()
        df1.iloc[i]=X.sum(axis=0)
    Y=df1.iloc[:monnum].copy()
    Y.index=pd.date_range("2021-07", "2022-07",freq='MS')  ########################################
    return(Y)

def cumul(df):
  df1=df.copy()
  Y=df1.copy()
  num=df1.shape[0]
  for i in range(num):
    X=df1.iloc[:i+1,:].copy()
    Y.iloc[i,:]=X.sum(axis=0)
  return(Y)

def machineseperate(df,num,resultPath,filename):
    Path = resultPath + filename
    machine=df.columns
    machinenum=len(machine)
    for i in range(machinenum):
        X=df.loc[:,machine[i]].copy()
        X.to_csv(Path + machine[i]+num+'.csv',index=None,header=None)

def calmoney(wh):
  kwh=wh//1000
  if kwh < 301:
    base = 730
    rate = 85.6
    mul = kwh
  elif kwh < 451:
    base = 1260+85.6*300
    rate = 154.6
    mul = kwh-300
  else: 
    base = 6060+85.6*300+150*154.6 
    rate = 222.9  
    mul = kwh-450
  Q = ((base+rate*mul)//1)+((kwh*12.3)//1)
  won = (((1.1*Q)//10)+(Q*0.037)//10)*10
  won = int(won)
  return won



files=['dp_102_1501','dp_101_402','dp_102_609']


for i in range(3):
  filename = files[i]
  data = pd.read_csv(dataPath + filename + '.csv')
  data1 = data.iloc[:,1:].copy()
  fill_missing(data1.values)
  hourdata = mintohour(data1)

  mm = MinMaxScaler()
  hourdata_mm = mm.fit_transform(hourdata)

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


  model = torch.load(resultPath + filename + "_finalmodel.pth")

  day = 15 ##########
  time = 14 ############14:30
  #from datetime import datetime

  #day = datetime.today().day
  #time = datetime.today().hour
  cnum = (day-1)*24+time+1
  testnum = 31*24-cnum

  A_input = []
  A_data = hourdata_mm[-testnum-input_length:-testnum,:].copy()
  A_input.append(A_data)
  A_Tensor = torch.Tensor(np.array(A_input)).to(device)
  B_Tensor = A_Tensor

  for i in range(testnum):
    A_predict = model.forward(A_Tensor)
    A_predict = A_predict[:,0:1,:]
    B_Tensor = torch.cat([B_Tensor,A_predict], dim = 1)
    A_Tensor = B_Tensor[:,-input_length:,:]

  predict_Tensor = B_Tensor[0,input_length-cnum:input_length-cnum+31*24,:]


  final_predict= mm.inverse_transform(predict_Tensor.cpu().detach().numpy())
  df_final_predict=pd.DataFrame(final_predict)
  df_final_predict['sum']=df_final_predict.sum(axis=1)
  df_final_predict = df_final_predict.iloc[:,-1].copy()

  df_final_real = hourdata.iloc[-31*24:,:].copy()
  df_final_real['sum']=df_final_real.sum(axis=1)
  df_final_real = df_final_real.iloc[:,-1].copy()
  ###########################################################################
  predict_plot_h=df_final_predict.reset_index(drop=True).copy()
  realdata_plot_h=df_final_real.reset_index(drop=True).copy()

  plt.figure(figsize=(10,6)) #plotting
  plt.axvline(x=(day-1)*24+time, c='r', linestyle='--') #size of the training set

  plt.plot(realdata_plot_h, label='Actuall Data') #actual plot
  plt.plot(predict_plot_h, label='Predicted Data') #predicted plot
  plt.title(f'{filename}finalmodel-Hour-Series Prediction')
  plt.legend()
  plt.show()

  predict_plot_d=hourtoday(predict_plot_h)
  predict_plot_d = predict_plot_d.reset_index(drop=True)
  realdata_plot_d=hourtoday(realdata_plot_h)
  realdata_plot_d = realdata_plot_d.reset_index(drop=True)

  plt.figure(figsize=(10,6)) #plotting
  plt.axvline(x=day-2, c='r', linestyle='--') #size of the training set

  plt.plot(realdata_plot_d, label='Actuall Data') #actual plot
  plt.plot(predict_plot_d, label='Predicted Data') #predicted plot
  plt.title(f'{filename}finalmodel-day-Series Prediction')
  plt.legend()
  plt.show()

  predictmonth = predict_plot_d.sum(axis=0)
  realmonth = realdata_plot_d.sum(axis=0)
  loss = abs((predictmonth-realmonth)/realmonth)*100
  print(f"predict : {predictmonth}, real : {realmonth}, accuracy : {100-loss}%")
  #######################################################################



  path = resultPath+'csv/'
  filename = filename +'/'
  data_h=hourdata.copy()
  data_h.iloc[-testnum:,:]=0
  data_h["sum"]=data_h.sum(axis=1)
  real_data_h=data_h.copy()
  real_data_d=hourtoday(real_data_h)
  real_data_m=daytomon(real_data_d)

  predict_data_h=data_h.copy()
  predict_data_h.iloc[-testnum:,-1]=df_final_predict.iloc[-testnum:].copy()
  predict_data_d=hourtoday(predict_data_h)
  predict_data_m=daytomon(predict_data_d)

 
  realdata=real_data_h.iloc[:-testnum,:].copy()
  recent24hour=realdata.iloc[-24:,:]
  hour_01=recent24hour.iloc[:,-1].copy()
  hour_01.to_csv(path + filename + 'hour_01.csv',index=None,header=None)
  total_05=recent24hour.iloc[:,:-1].copy()
  total_05.to_csv(path + filename + 'total_05.csv',index=None,header=None)
  machineseperate(total_05,'_05',path,filename)

  predictday_02=predict_data_d.iloc[-31:,-1].copy()
  predictday_02.to_csv(path + filename + 'predictday_02.csv',index=None,header=None)
  day_02=real_data_d.iloc[-31:,-1].copy()
  day_02.to_csv(path + filename + 'day_02.csv',index=None,header=None)


  predictmonth_03=predict_data_m.iloc[-13:,-1].copy()
  predictmonth_03.to_csv(path + filename + 'predictmonth_03.csv',index=None,header=None)
  month_03=real_data_m.iloc[-13:,-1].copy()
  month_03.to_csv(path + filename + 'month_03.csv',index=None,header=None)

  total_06=real_data_d.iloc[-31:,:-1].copy()
  total_06=cumul(total_06)
  total_06.to_csv(path + filename + 'total_06.csv',index=None,header=None)
  machineseperate(total_06,'_06',path,filename)

  percent_04=total_06.iloc[-1,:].copy()
  percent_04.to_csv(path + filename + 'percent_04.csv',index=None,header=None)

  total_07=real_data_d.iloc[:31,:-1].copy()
  total_07=cumul(total_07)
  total_07.to_csv(path + filename + 'total_07.csv',index=None,header=None)
  machineseperate(total_07,'_07',path,filename)

  total_08=real_data_d.iloc[-61:-31,:-1].copy()
  total_08=cumul(total_08)
  total_08.to_csv(path + filename + 'total_08.csv',index=None,header=None)
  machineseperate(total_08,'_08',path,filename)

  result_00=[0,0,0]
  result_00[0]=month_03[-1]
  result_00[1]=predictmonth_03[-1]
  result_00[2]=month_03[0]
  result_00=pd.DataFrame(result_00)
  result_00.to_csv(path + filename + 'result_00.csv',index=None,header=None)

  predictcharge = calmoney(predictmonth_03.iloc[-1])
  realcharge = calmoney(month_03.iloc[-1])
  charge = total_06.iloc[-1,:].copy()
  charge = (realcharge*charge/charge.sum(axis=0))//1
  charge = charge.astype('int')
  charge["realcharge"]=realcharge
  charge["predictcharge"]=predictcharge
  charge.to_csv(path + filename + 'charge.csv',header=None)

  