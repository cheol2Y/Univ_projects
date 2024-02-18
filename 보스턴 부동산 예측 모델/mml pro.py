#!/usr/bin/env python
# coding: utf-8

# In[346]:


#필요한 라이브러리를 간소화
import numpy as np
import pandas as pd
from sklearn.model_selection import ShuffleSplit
import visuals as vs
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
warnings.filterwarnings(action='ignore')

#주택 가격은 MEDV이므로 반응변수로 설정
get_ipython().run_line_magic('matplotlib', 'inline')
data = pd.read_csv('data.csv')
prices = data['MEDV']
features = data.drop('MEDV', axis = 1)
print("부동산 데이터는 {} 개의 데이터가 있고 {} 의 변수가 존재 한다.".format(*data.shape))

# 주택 최소값과 최대값, 평균값, 중간값, 표준편차를 확인한다.
minimum_price = np.amin(prices)
maximum_price = np.amax(prices)
mean_price = np.mean(prices)
median_price = np.median(prices)
std_price = np.std(prices)

print("주택값의 데이터:\n")
print("최소값: ${}".format(minimum_price)) 
print("최댓값: ${}".format(maximum_price))
print("평균값: ${}".format(mean_price))
print("중간값 ${}".format(median_price))
print("표준편차: ${}".format(std_price))


# In[347]:


get_ipython().run_line_magic('matplotlib', 'inline')
# 산점도와 히스토그램으로 데이터를 분석한다.
sns.pairplot(data, height=2.5)
plt.tight_layout()


# In[348]:


# 상관관계를 계산한다.
cm = np.corrcoef(data.values.T)
sns.set(font_scale=1.5)
# 상관관계를 나타내는 표를 나타낸다.
cm = np.corrcoef(data.values.T)
sns.set(font_scale=1)
hm = sns.heatmap(cm,
                cbar=True,
                annot=True,
                square=True,
                fmt='.2f',
                annot_kws={'size': 8},
                yticklabels='auto',
                xticklabels='auto',cmap = "RdYlBu")
plt.tight_layout()
plt.show()


# In[350]:


# 결정계수 R 정의

from sklearn.metrics import r2_score

def performance_metric(y_true, y_predict):
    
    score = r2_score(y_true, y_predict)
    return score

# train과 test를 분리한다.
from sklearn.model_selection import train_test_split

# 데이터를 섞은 후 분할하고 learning performance 곡선과 complexity 곡선을 생성한다.
X_train, X_test, y_train, y_test = train_test_split(features, prices, test_size=0.2, random_state = 150)
vs.ModelLearning(features, prices)
vs.ModelComplexity(X_train.values, y_train.values)


# In[351]:


param_grid = [ {'C': [1, 10, 100, 1000], 'kernel': ['linear']},
              {'C': [1, 10, 100, 1000], 'gamma': [0.001, 0.0001], 'kernel': ['rbf']}, ]

# sklearn
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import make_scorer
from sklearn.model_selection import GridSearchCV

def fit_model(X, y):
    
    # 교차 검증 세트, 결정 회귀 트리를 설정하고 그것의 figure들을 설정
    cv_sets = ShuffleSplit(n_splits = 10, test_size = 0.20, random_state = 0)
    regressor = DecisionTreeRegressor()
    params = {'max_depth':[1,2,3,4,5,6,7,8,9,10]}
    scoring_fnc = make_scorer(performance_metric)
    grid = GridSearchCV(estimator=regressor, param_grid=params, scoring=scoring_fnc, cv=cv_sets)
    grid = grid.fit(X, y)
    return grid.best_estimator_


# In[352]:


#train한 것을 model화 하고 max depth의 값을 확인
reg = fit_model(X_train.values, y_train.values)
print("최적화 model의 max_depth는 {} 이다.".format(reg.get_params()['max_depth']))


# In[353]:


#figure값들을 입력하여 판매가격을 예측한다.
client_data = [[1,12.5,7.87,0,1,6.012,66.6,5,5,311,15,13]]
for i, price in enumerate(reg.predict(client_data)):
    print("Client의 주택 예상가격 :${:,.2f}\n".format(price))
    
vs.PredictTrials(features, prices, fit_model, client_data)


# In[ ]:




