# -*- coding: utf-8 -*-
"""test.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1nSBLz2w4AU32kjR7aJ2hYQcOgnzsEV5G
"""

import torch
import torchvision
import torch.nn as nn
import torch.nn.functional as F
from torch.utils.data import Dataset
from torchvision import models, transforms

import matplotlib.pyplot as plt
import random
import time
import os

import numpy as np
from tqdm import tqdm
tqdm.pandas()

# Device Configuration
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

test_data = torchvision.datasets.CIFAR10(root='./datasets',
                                       train=False,
                                       transform=transforms.ToTensor(),
                                       download=True)
# FIX SEED
def fix_seed(seed):
    random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed(seed)

import glob

class MyDataset(Dataset):
    def __init__(self, npy_dir): # image file (*.npy) 들을 포함하고 있는 디렉토리 경로 npy_dir 로 받아야, 
        self.dir_path = npy_dir
        self.to_tensor = transforms.ToTensor()

        # all npy path
        self.npy_path = glob.glob(os.path.join(npy_dir, '*','*.npy')) 

    def __getitem__(self, index):
        # load data
        single_data_path = self.npy_path[index]
        data = np.load(single_data_path, allow_pickle=True)
        
        image = data[0]
        image = self.to_tensor(image)
        label = data[1]
       
        return (image, label)

    def __len__(self):
        return len(self.npy_path)
    
valid_data = MyDataset("NEw")
batch_size=50
valid_loader = torch.utils.data.DataLoader(dataset=valid_data,
                                           batch_size=batch_size,
                                           shuffle=True,
                                           )

device

in_chabnnel=1
kernel_sizes=5
paddings=2
strides=1
max_pool_kernel=2
learning_rate=0.001
num_epochs=20
num_classes=52

class CNN(nn.Module):
      def __init__(self):
        super(CNN, self).__init__()
    
        self.layer1 = nn.Sequential(
        nn.Conv2d(in_channels=in_chabnnel, out_channels=16, kernel_size=kernel_sizes, stride=1, padding=2),
        nn.BatchNorm2d(num_features=16),  
        nn.ReLU(),
        nn.MaxPool2d(kernel_size=max_pool_kernel)
    )
    
        self.layer2 = nn.Sequential(
        nn.Conv2d(in_channels=16, out_channels=32, kernel_size=kernel_sizes, stride=1, padding=2),
        nn.BatchNorm2d(num_features=32),
        nn.ReLU(),
        nn.AvgPool2d(kernel_size=max_pool_kernel)
    )
    
        self.layer3 = nn.Sequential(
        nn.Conv2d(in_channels=32, out_channels=64, kernel_size=kernel_sizes, stride=1, padding=2),
        nn.BatchNorm2d(num_features=64),
        nn.ReLU(),
        nn.MaxPool2d(kernel_size=max_pool_kernel)
    )
        self.layer4 = nn.Sequential(
        nn.Conv2d(in_channels=64, out_channels=128, kernel_size=kernel_sizes, stride=strides, padding=paddings),
        nn.BatchNorm2d(num_features=128),
        nn.ReLU(),
        nn.AvgPool2d(kernel_size=max_pool_kernel)
    )
        self.layer5 = nn.Sequential(
        nn.Conv2d(in_channels=128, out_channels=256, kernel_size=kernel_sizes, stride=strides, padding=paddings),
        nn.BatchNorm2d(num_features=256),
        nn.ReLU(),
        nn.MaxPool2d(kernel_size=max_pool_kernel)
    )
    
        self.fc1 = nn.Linear(in_features=256*3*3, out_features=416)
        self.fc2 = nn.Linear(in_features=416, out_features=52)
        self.fc3 = nn.Linear(in_features=128, out_features=52)
        self.dropout1 = nn.Dropout(0.2)
        self.dropout2 = nn.Dropout(0.45)
 
      def forward(self, x):    
        x = self.layer1(x)
        x = self.dropout1(x)    
        x = self.layer2(x)  
        x = self.dropout1(x)  
        x = self.layer3(x)
        x = self.dropout1(x)
        x = self.layer4(x)
        x = self.dropout1(x)
        x = self.layer5(x)
        x = self.dropout1(x)

        x = F.relu(x)
        x=torch.flatten(x,1)  
        x = F.relu(self.fc1(x))
        x = self.dropout2(x)     
        x=self.fc2(x)
        #x = F.relu(self.fc2(x))
        #x = self.dropout2(x)
        #x = self.fc3(x)
        return x


test_model = CNN().to(device)

test_model.load_state_dict(torch.load('my_model_ff.pth',map_location=device))
acc_list = []
test_model.eval()


test_loader = torch.utils.data.DataLoader(dataset=valid_data,
                                          batch_size=batch_size,
                                          shuffle=False) 

with torch.no_grad():
  correct = 0
  
  for img, label in test_loader:
    img = img.to(device)
    label = label.to(device)
    outputs = test_model(img).to(device)
    _, outputs = torch.max(outputs.data, 1)
    correct += (outputs==label).sum()
    

  print("Accuracy of the network on the {} test images: {}%".format(len(test_loader)*batch_size, 100 * correct / (len(test_loader) * batch_size)))
  
  print('Accuracy of the last_model network on the {} valid images: {} %'.\
       format(len(valid_data), 100 * correct / len(valid_data)))

print('batch_size=', batch_size, '\nlearning_rate=',learning_rate,'\nnum_epoch=',num_epochs, '\nkernel_size=',kernel_sizes,'\npadding=',padding,'\nstride=',stride)

print('correct=',correct)