import React, { useEffect, useRef, useState,} from 'react';
import {TouchableHighlight,TouchableOpacity,TextInput,onPress,Pressable,LogBox, Button, View, Text, ScrollView,Image,StyleSheet, SafeAreaView,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {PieChart,LineChart,ProgressChart,StackedBarChart,BarChart} from "react-native-chart-kit";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import day1 from './402/day1';
import day2 from './609/day2';
import day3 from './1501/day3';
import month1 from './402/month1';
import month2 from './609/month2';
import month3 from './1501/month3';
import hour1 from './402/hour1';
import hour2 from './609/hour2';
import hour3 from './1501/hour3';
import a12 from './402/a12';
import a13 from './402/a13';
import a22 from './402/a22';
import a23 from './402/a23';
import a32 from './402/a32';
import a33 from './402/a33';
import a42 from './402/a42';
import a43 from './402/a43';
import a52 from './402/a52';
import a53 from './402/a53';
import a62 from './402/a62';
import a63 from './402/a63';
import a72 from './402/a72';
import a73 from './402/a73';
import a82 from './402/a82';
import a83 from './402/a83';
import a92 from './402/a92';
import a93 from './402/a93';
import a102 from './402/a102';
import a103 from './402/a103';
import a112 from './402/a112';
import a113 from './402/a113';
import a122 from './402/a122';
import a123 from './402/a123';
import a132 from './402/a132';
import a133 from './402/a133';
import b12 from './609/b12';
import b13 from './609/b13';
import b22 from './609/b22';
import b23 from './609/b23';
import b32 from './609/b32';
import b33 from './609/b33';
import b42 from './609/b42';
import b43 from './609/b43';
import b52 from './609/b52';
import b53 from './609/b53';
import c12 from './1501/c12';
import c13 from './1501/c13';
import c22 from './1501/c22';
import c23 from './1501/c23';
import c32 from './1501/c32';
import c33 from './1501/c33';
import c42 from './1501/c42';
import c43 from './1501/c43';
import c52 from './1501/c52';
import c53 from './1501/c53';
import c62 from './1501/c62';
import c63 from './1501/c63';
import c72 from './1501/c72';
import c73 from './1501/c73';
import c82 from './1501/c82';
import c83 from './1501/c83';
import c92 from './1501/c92';
import c93 from './1501/c93';
import c102 from './1501/c102';
import c103 from './1501/c103';
import c112 from './1501/c112';
import c113 from './1501/c113';
import c122 from './1501/c122';
import c123 from './1501/c123';
import Adata1 from './402/Adata1';
import Adata2 from './402/Adata2';
import Adata3 from './402/Adata3';
import Adata4 from './402/Adata4';
import Adata5 from './402/Adata5';
import Adata6 from './402/Adata6';
import Adata7 from './402/Adata7';
import Adata8 from './402/Adata8';
import Adata9 from './402/Adata9';
import Adata10 from './402/Adata10';
import Adata11 from './402/Adata11';
import Adata12 from './402/Adata12';
import Adata13 from './402/Adata13';
import Bdata1 from './609/Bdata1';
import Bdata2 from './609/Bdata2';
import Bdata3 from './609/Bdata3';
import Bdata4 from './609/Bdata4';
import Bdata5 from './609/Bdata5';
import Cdata1 from './1501/Cdata1';
import Cdata2 from './1501/Cdata2';
import Cdata3 from './1501/Cdata3';
import Cdata4 from './1501/Cdata4';
import Cdata5 from './1501/Cdata5';
import Cdata6 from './1501/Cdata6';
import Cdata7 from './1501/Cdata7';
import Cdata8 from './1501/Cdata8';
import Cdata9 from './1501/Cdata9';
import Cdata10 from './1501/Cdata10';
import Cdata11 from './1501/Cdata11';
import Cdata12 from './1501/Cdata12';
LogBox.ignoreAllLogs(); //Ignore all log notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
     shouldShowAlert: true,
     shouldPlaySound: true,
     shouldSetBadge: true,
  }),
});

const data= require("./data5");

const screenWidth = Dimensions.get("window").width;
function HomeScreen({ navigation }) {
  const [timesPressed1, setTimesPressed1] = useState(0);
  let bardata1 = '';
  let bardata11=[[24980],[47530], [51140]];
  let bardata12=[[260],[440], [463]];
  if (timesPressed1%2 == 0) {
    bardata1 = bardata11;
  } else if (timesPressed1%2 == 1) {
    bardata1 = bardata12;
  }
  let legend1 = '';
  if (timesPressed1%2 == 0) {
    legend1 = '사용량(원)';
  } else if (timesPressed1%2 == 1) {
    legend1 = '사용량(KWh)';
  }
  let sourceLog1 = '';
  if (timesPressed1%2 == 0) {
    sourceLog1 = require('./icon/on.png');
  } else if (timesPressed1%2 == 1) {
    sourceLog1 = require('./icon/off.png');
  }
  return (
    <SafeAreaView style={{backgroundColor:'#A4A4A4'}}>
    <ScrollView>
    <View style={styles.container}>
    <Text>기기별 상태 및 제어</Text>
    <View style={styles.settingView}>
          <TouchableOpacity onPress={() => navigation.navigate('설정')}>
            <Image 
            style={{width: 30, height: 30, backgroundColor: 'skyblue',borderRadius:25,}}
            source={require('./icon/setting.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.objectView}>
          <View style={styles.objectrow}>
            <TouchableOpacity onPress={() => navigation.navigate('선풍기1(침실1)')}>
            <Text style={styles.Texticon}>선풍기1</Text>
              <View style={styles.object}>
                <Image 
                style={{width: 40, height: 40,}}
                source={require('./icon/fan.png')}/>
                <Image 
                style={{width: 40, height: 40, marginLeft: 'auto',}}
                source={require('./icon/on.png')}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('선풍기2(침실2)')}>
            <Text style={styles.Texticon}>선풍기2</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/fan.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('세탁기(발코니2).')}>
            <Text style={styles.Texticon}>세탁기</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/washer.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('에어컨(거실)')}>
          <Text style={styles.Texticon}>에어컨</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/airconditioner.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('에어컨실외기(거실)')}>
            <Text style={styles.Texticon}>에어컨실외기</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/airconout.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('에어프라이기(주방)')}>
            <Text style={styles.Texticon}>에어프라이기</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/airfryer.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('전기밥솥(주방)')}>
            <Text style={styles.Texticon}>전기밥솥</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/ricecooker.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
            </View>
            <View style={styles.objectrow}>
            <TouchableOpacity onPress={() => navigation.navigate('전자레인지(주방)')}>
            <Text style={styles.Texticon}>전자레인지</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/microwave.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('커피포트(주방)')}>
            <Text style={styles.Texticon}>커피포트</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/kettle.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('헤어드라이어(침실1)')}>
            <Text style={styles.Texticon}>헤어드라이어</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/dryer.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PC(침실2)')}>
            <Text style={styles.Texticon}>PC</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/computer.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TV(거실)')}>
            <Text style={styles.Texticon}>TV1</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/tv.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TV(침실1)')}>
            <Text style={styles.Texticon}>TV2</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/tv.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
            </View>
            </View>
            
    </View>
    <View style={styles.container}>
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
    <StackedBarChart
  data={{
    labels: ['이번달','이번달 예상', '작년 동월'],
    legend: [legend1],
    data: bardata1,
    barColors: ['#81BEF7', '#ced6e0', '#a4b0be'],
  }}
  withHorizontalLabels={false}
  width={Dimensions.get('window').width - 50}
  height={220}
  chartConfig={{
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
  
/>
<Pressable
          style={{width: 50, height: 30,marginLeft: 'auto'}}
          onPress={() => {
            setTimesPressed1((current) => current + 1);
          }}>
        <Image 
          style={{width: 50, height: 30,marginLeft: 'auto'}}
          source={sourceLog1}/>
        </Pressable>

    </View>
    <Text style={{fontSize:18,color:'#000000',width: 'auto', height: 35, textAlignVertical:'center',textAlign:'center'}}>
    이번달 예상 전기요금은 {bardata11[1]}원 입니다.
    </Text>
    </View>
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25}}>
    <Text>오늘 시간별 사용량</Text>
    <LineChart
          data={hour1}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          //yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          withVerticalLines={false}
          withOuterLines={false}
          chartConfig={{
            backgroundColor: "#D3D3D3",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "0",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
    </View>
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25}}>
    <Text>일별 사용량

    </Text>
    <LineChart
          data={day1}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          //yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          withVerticalLines={false}
          withOuterLines={false}
          chartConfig={{
            backgroundColor: "#D3D3D3",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
              
            },
            propsForDots: {
              r: "0",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
    </View>
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>월별 사용량</Text>
    <LineChart
          data={month1}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          //yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          withVerticalLines={false}
          withOuterLines={false}
          chartConfig={{
            backgroundColor: "#D3D3D3",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
              
            },
            propsForDots: {
              r: "0",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
    </ScrollView>
  </SafeAreaView>
  );
}
function HomeScreen2({ navigation }) {
  const [timesPressed1, setTimesPressed1] = useState(0);
  let bardata1 = '';
  let bardata11 = [[5050],[10170], [10950]];
  let bardata12 = [[38],[84], [92]];
  if (timesPressed1%2 == 0) {
    bardata1 = bardata11;
  } else if (timesPressed1%2 == 1) {
    bardata1 = bardata12;
  }
  let legend1 = '';
  if (timesPressed1%2 == 0) {
    legend1 = '사용량(원)';
  } else if (timesPressed1%2 == 1) {
    legend1 = '사용량(KWh)';
  }
  let sourceLog1 = '';
  if (timesPressed1%2 == 0) {
    sourceLog1 = require('./icon/on.png');
  } else if (timesPressed1%2 == 1) {
    sourceLog1 = require('./icon/off.png');
  }
  return (
    <SafeAreaView style={{backgroundColor:'#A4A4A4'}}>
    <ScrollView>
    <View style={styles.container}>
    <Text>기기별 상태 및 제어</Text>
    <View style={styles.settingView}>
          <TouchableOpacity onPress={() => navigation.navigate('설정')}>
            <Image 
            style={{width: 30, height: 30, backgroundColor: 'skyblue',borderRadius:25,}}
            source={require('./icon/setting.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.objectView}>
          <View style={styles.objectrow}>
            <TouchableOpacity onPress={() => navigation.navigate('공기청정기(거실)')}>
            <Text style={styles.Texticon}>공기청정기</Text>
              <View style={styles.object}>
                <Image 
                style={{width: 40, height: 40,}}
                source={require('./icon/airpurifier.png')}/>
                <Image 
                style={{width: 40, height: 40, marginLeft: 'auto',}}
                source={require('./icon/on.png')}/>
              </View>
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => navigation.navigate('세탁기(발코니)')}>
            <Text style={styles.Texticon}>세탁기</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/washer.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('전기밥솥(주방1)')}>
            <Text style={styles.Texticon}>전기밥솥</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/ricecooker.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.objectrow}>
          <TouchableOpacity onPress={() => navigation.navigate('PC(방1)')}>
          <Text style={styles.Texticon}>PC</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/computer.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TV(거실1)')}>
            <Text style={styles.Texticon}>TV</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/tv.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
          </View>
        </View>
    </View>
    <View style={styles.container}>
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
    <StackedBarChart
  data={{
    labels: ['이번달','이번달 예상', '작년 동월'],
    legend: [legend1],
    data: bardata1,
    barColors: ['#81BEF7', '#ced6e0', '#a4b0be'],
  }}
  withHorizontalLabels={false}
  width={Dimensions.get('window').width - 50}
  height={220}
  chartConfig={{
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
  
/>
<Pressable
          style={{width: 50, height: 30,marginLeft: 'auto'}}
          onPress={() => {
            setTimesPressed1((current) => current + 1);
          }}>
        <Image 
          style={{width: 50, height: 30,marginLeft: 'auto'}}
          source={sourceLog1}/>
        </Pressable>

    </View>
    <Text style={{fontSize:18,color:'#000000',width: 'auto', height: 35, textAlignVertical:'center',textAlign:'center'}}>
    이번달 예상 전기요금은 {bardata11[1]}원 입니다.
    </Text>
    </View>
   
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25}}>
    <Text>오늘 시간별 사용량</Text>
    <LineChart
          data={hour2}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          //yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          withVerticalLines={false}
          withOuterLines={false}
          chartConfig={{
            backgroundColor: "#D3D3D3",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "0",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
    </View>
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25}}>
    <Text>일별 사용량

    </Text>
    <LineChart
          data={day2}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          //yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          withVerticalLines={false}
          withOuterLines={false}
          chartConfig={{
            backgroundColor: "#D3D3D3",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
              
            },
            propsForDots: {
              r: "0",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
    </View>
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>월별 사용량</Text>
    <LineChart
          data={month2}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          //yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          withVerticalLines={false}
          withOuterLines={false}
          chartConfig={{
            backgroundColor: "#D3D3D3",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
              
            },
            propsForDots: {
              r: "0",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
    </ScrollView>
  </SafeAreaView>
  );
}
function HomeScreen3({ navigation }) {
  const [timesPressed1, setTimesPressed1] = useState(0);
  let bardata1 = '';
  let bardata11 = [[2380],[4380], [4820]];
  let bardata12 = [[15],[32], [36]];
  if (timesPressed1%2 == 0) {
    bardata1 = bardata11;
  } else if (timesPressed1%2 == 1) {
    bardata1 = bardata12;
  }
  let legend1 = '';
  if (timesPressed1%2 == 0) {
    legend1 = '사용량(원)';
  } else if (timesPressed1%2 == 1) {
    legend1 = '사용량(KWh)';
  }
  let sourceLog1 = '';
  if (timesPressed1%2 == 0) {
    sourceLog1 = require('./icon/on.png');
  } else if (timesPressed1%2 == 1) {
    sourceLog1 = require('./icon/off.png');
  }
  return (
    <SafeAreaView style={{backgroundColor:'#A4A4A4'}}>
    <ScrollView>
    <View style={styles.container}>
    <Text>기기별 상태 및 제어</Text>
    <View style={styles.settingView}>
          <TouchableOpacity onPress={() => navigation.navigate('설정')}>
            <Image 
            style={{width: 30, height: 30, backgroundColor: 'skyblue',borderRadius:25,}}
            source={require('./icon/setting.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.objectView}>
          <View style={styles.objectrow}>
            <TouchableOpacity onPress={() => navigation.navigate('노트북 (방3)')}>
            <Text style={styles.Texticon}>노트북</Text>
              <View style={styles.object}>
                <Image 
                style={{width: 40, height: 40,}}
                source={require('./icon/labtop.png')}/>
                <Image 
                style={{width: 40, height: 40, marginLeft: 'auto',}}
                source={require('./icon/on.png')}/>
              </View>
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => navigation.navigate('선풍기1 (방1)')}>
            <Text style={styles.Texticon}>선풍기1</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/fan.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('선풍기2 (방1)')}>
            <Text style={styles.Texticon}>선풍기2</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/fan.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('세탁기 (발코니2)')}>
          <Text style={styles.Texticon}>세탁기</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/washer.png')}/>
              <Image 
              style={{width: 40, height: 40, moffarginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('에어컨 (거실)')}>
            <Text style={styles.Texticon}>에어컨1</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/airconditioner.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('에어컨 (방1)')}>
            <Text style={styles.Texticon}>에어컨2</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/airconditioner.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
            </View>
          <View style={styles.objectrow}>
          <TouchableOpacity onPress={() => navigation.navigate('전기밥솥 (주방)')}>
          <Text style={styles.Texticon}>전기밥솥</Text>
              <View style={styles.object}>
                <Image 
                style={{width: 40, height: 40,}}
                source={require('./icon/ricecooker.png')}/>
                <Image 
                style={{width: 40, height: 40, marginLeft: 'auto',}}
                source={require('./icon/on.png')}/>
              </View>
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => navigation.navigate('전자레인지 (주방)')}>
            <Text style={styles.Texticon}>전자레인지</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/microwave.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PC (방1)')}>
            <Text style={styles.Texticon}>PC</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/computer.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TV (거실)')}>
          <Text style={styles.Texticon}>TV1</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/tv.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/off.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TV2 (방1)')}>
            <Text style={styles.Texticon}>TV2</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/tv.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TV3 (방2)')}>
            <Text style={styles.Texticon}>TV3</Text>
            <View style={styles.object}>
              <Image 
              style={{width: 40, height: 40,}}
              source={require('./icon/tv.png')}/>
              <Image 
              style={{width: 40, height: 40, marginLeft: 'auto',}}
              source={require('./icon/on.png')}/>
            </View>
            </TouchableOpacity>
          </View>
        </View>
    </View>
    <View style={styles.container}>
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
    <StackedBarChart
  data={{
    labels: ['이번달','이번달 예상', '작년 동월'],
    legend: [legend1],
    data: bardata1,
    barColors: ['#81BEF7', '#ced6e0', '#a4b0be'],
  }}
  withHorizontalLabels={false}
  width={Dimensions.get('window').width - 50}
  height={220}
  chartConfig={{
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
  
/>
<Pressable
          style={{width: 50, height: 30,marginLeft: 'auto'}}
          onPress={() => {
            setTimesPressed1((current) => current + 1);
          }}>
        <Image 
          style={{width: 50, height: 30,marginLeft: 'auto'}}
          source={sourceLog1}/>
        </Pressable>

    </View>
    <Text style={{fontSize:18,color:'#000000',width: 'auto', height: 35, textAlignVertical:'center',textAlign:'center'}}>
    이번달 예상 전기요금은 {bardata11[1]}원 입니다.
    </Text>
    </View>
   
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25}}>
    <Text>오늘 시간별 사용량</Text>
    <LineChart
          data={hour3}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          //yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          withVerticalLines={false}
          withOuterLines={false}
          chartConfig={{
            backgroundColor: "#D3D3D3",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "0",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
    </View>
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25}}>
    <Text>일별 사용량

    </Text>
    <LineChart
          data={day3}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          //yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          withVerticalLines={false}
          withOuterLines={false}
          chartConfig={{
            backgroundColor: "#D3D3D3",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
              
            },
            propsForDots: {
              r: "0",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
    </View>
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>월별 사용량</Text>
    <LineChart
          data={month3}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          //yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          withVerticalLines={false}
          withOuterLines={false}
          chartConfig={{
            backgroundColor: "#D3D3D3",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
              
            },
            propsForDots: {
              r: "0",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
    </ScrollView>
  </SafeAreaView>
  );
}


const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
function DetailScreen({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState('');
   const [notification, setNotification] = useState(false);
   const notificationListener = useRef();
   const responseListener = useRef();
   const [text, setText] = useState(0);
   const [timesPressed1, setTimesPressed1] = useState(0);
   const [timesPressed2, setTimesPressed2] = useState(0);
   const [timesPressed3, setTimesPressed3] = useState(0);
   const [timesPressed4, setTimesPressed4] = useState(0);
   const [timesPressed5, setTimesPressed5] = useState(0);
   let sourceLog1 = '';
   if (timesPressed1%2 == 0) {
     sourceLog1 = require('./icon/off.png');
   } else if (timesPressed1%2 == 1) {
     sourceLog1 = require('./icon/on.png');
   }
   let sourceLog2 = '';
   if (timesPressed2%2 == 0) {
     sourceLog2 = require('./icon/off.png');
   } else if (timesPressed2%2 == 1) {
     sourceLog2 = require('./icon/on.png');
   }
   let sourceLog3 = '';
   if (timesPressed3%2 == 0) {
     sourceLog3 = require('./icon/off.png');
   } else if (timesPressed3%2 == 1) {
     sourceLog3 = require('./icon/on.png');
   }
   let sourceLog4 = '';
   if (timesPressed4%2 == 0) {
     sourceLog4 = require('./icon/off.png');
   } else if (timesPressed4%2 == 1) {
     sourceLog4 = require('./icon/on.png');
   }
   let sourceLog5 = '';
   if (timesPressed5%2 == 0) {
     sourceLog5 = require('./icon/off.png');
   } else if (timesPressed5%2 == 1) {
     sourceLog5 = require('./icon/on.png');
   }

  useEffect(() => {
      registerForPushNotificationsAsync().then(token => {

         setExpoPushToken(token);
      });
   
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
         setNotification(notification);
      });
   
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
         console.log(response);
      });
   
      return () => {
         if(typeof notificationListener.current !== 'undefined' && typeof responseListener.current !== 'undefined'){
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
         }
      };
   }, []);
  

    return (
    <SafeAreaView style={{backgroundColor:'#D3D3D3'}}>
      <ScrollView>
      <View style={styles.container2}>
      </View>
      <View style={styles.container2}>
        <Text style={{fontSize:20,color:'#2196f3',width: 105, height: 50,textAlignVertical:'center'}}>
        목표사용량:
        </Text>
        <TextInput
          placeholder="입력"
          style={{ fontSize: 20,width: 47, height: 50 }}
          value={text}
          onChangeText = {(text) => setText(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity           
          onPress={() => {
            if(Number(text) < 18000) {
              schedulePushNotification();
              return;
            }
            }}> 
          <Image 
            style={{width: 50, height: 50,marginLeft: 'auto'}}
            source={require('./icon/check.png')}/>
        </TouchableOpacity>
        <Pressable
          style={{width: 50, height: 50,marginLeft: 'auto'}}
          onPress={() => {
            setTimesPressed1((current) => current + 1);
          }}>
        <Image 
          style={{width: 50, height: 50,marginLeft: 'auto'}}
          source={sourceLog1}/>
        </Pressable>
      </View>
      <View style={styles.container2}>
      <Text style={{fontSize:20,color:'#2196f3',width: 300, height: 50, textAlignVertical:'center'}}>
        누진 단계 알림
        </Text>
        <Pressable
          style={{width: 50, height: 50,marginLeft: 'auto'}}
          onPress={() => {
          setTimesPressed2((current) => current + 1);
          }}>
        <Image 
          style={{width: 50, height: 50,marginLeft: 'auto'}}
          source={sourceLog2}/>
        </Pressable>
      </View>
      <View style={styles.container2}>
      <Text style={{fontSize:20,color:'#2196f3',width: 300, height: 50, textAlignVertical:'center'}}>
        미사용 기기 알림
        </Text>
        <Pressable
          style={{width: 50, height: 50,marginLeft: 'auto'}}
          onPress={() => {
            setTimesPressed3((current) => current + 1);
          }}>
        <Image 
          style={{width: 50, height: 50,marginLeft: 'auto'}}
          source={sourceLog3}/>
        </Pressable>
      </View>
      <View style={styles.container2}>
      <Text style={{fontSize:20,color:'#2196f3',width: 300, height: 50, textAlignVertical:'center'}}>
        일별 사용량 정기 알림
        </Text>
        <Pressable
          style={{width: 50, height: 50,marginLeft: 'auto'}}
          onPress={() => {
            setTimesPressed4((current) => current + 1);
          }}>
        <Image 
          style={{width: 50, height: 50,marginLeft: 'auto'}}
          source={sourceLog4}/>
        </Pressable>
      </View>
      <View style={styles.container2}>
        <Text style={{fontSize:20,color:'#2196f3',width: 130, height: 50,textAlignVertical:'center'}}>
        알림받을 시간:
        </Text>
        <TextInput
          placeholder="입력"
          style={{ fontSize: 20,width: 47, height: 50 }}
          //value={text}
          //onChangeText = {(text) => setText(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity           
          onPress={() => {
            if(Number(text) < 18000) {
              //schedulePushNotification();
              return;
            }
            }}> 
          <Image 
            style={{width: 50, height: 50,marginLeft: 'auto'}}
            source={require('./icon/check.png')}/>
        </TouchableOpacity>
        <Pressable
          style={{width: 50, height: 50,marginLeft: 'auto'}}
          onPress={() => {
            setTimesPressed5((current) => current + 1);
          }}>
        <Image 
          style={{width: 50, height: 50,marginLeft: 'auto'}}
          source={sourceLog5}/>
        </Pressable>
      </View>
      <View
         style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
           }}
      >
      <View
         style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
         }}
      >         
      </View>         

      </View>
      <View style={styles.settingView}>
      <View style={styles.objectView}>
      <View style={styles.objectrow}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={{fontSize:7}}>402호</Text>
            <Image 
            style={{width: 30, height: 30, backgroundColor: 'skyblue',borderRadius:25,}}
            source={require('./icon/home.png')}/>
          </TouchableOpacity>
          </View><View style={styles.objectrow}>
          <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <Text style={{fontSize:7}}>609호</Text>
            <Image 
            style={{width: 30, height: 30, backgroundColor: 'skyblue',borderRadius:25,}}
            source={require('./icon/home.png')}/>
          </TouchableOpacity>
          </View><View style={styles.objectrow}>
            <TouchableOpacity onPress={() => navigation.navigate('Home3')}>
            <Text style={{fontSize:7}}>1501호</Text>
            <Image 
            style={{width: 30, height: 30, backgroundColor: 'skyblue',borderRadius:25,}}
            source={require('./icon/home.png')}/>
          </TouchableOpacity>
            </View>
            </View>
            </View>
    </ScrollView>
    </SafeAreaView>
  );
  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
       content: {
          sound: 'default',
          title: '목표사용량 초과',
          body: '목표사용량'+text+'을 초과했습니다.',
          data: { data: 'goes here' },
       },
       trigger: { seconds: 1 },
    });
 }
}


async function registerForPushNotificationsAsync() {
   let token;
   if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
         const { status } = await Notifications.requestPermissionsAsync();
         finalStatus = status;
      }
      if (finalStatus !== 'granted') {
         alert('Failed to get push token for push notification!');
         return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
   } else {
      alert('Must use physical device for Push Notifications');
   }

   if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
         name: 'default',
         importance: Notifications.AndroidImportance.MAX,
         vibrationPattern: [0, 250, 250, 250],
         lightColor: '#FF231F7C',
      });
   }

   return token;
} 
function AScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      선풍기1(침실1)은 전체의 0.06%, 15원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata1}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a12}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a13}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}

function BScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      선풍기2(침실2)는 전체의 2.41%, 602원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata2}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a22}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2
            , // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a23}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function CScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      세탁기(발코니2)는 전체의 0.79%, 198원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata3}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a32}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a33}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function DScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      에어컨(거실)은 전체의 2.63%, 657원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata4}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a42}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a43}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function EScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      에어컨실외기(거실)는 전체의 61.83%, 15445원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata5}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a52}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a53}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function FScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      에어프라이기(주방)는 전체의 2.36%, 589원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata6}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a62}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a63}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function GScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      전기밥솥(주방)은 전체의 5.89%, 1472원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata7}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a72}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a73}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function HScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      전자레인지(주방)는 전체의 0.17%, 41원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata8}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a82}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a83}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function IScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      커피포트(주방)는 전체의 2.63%, 655원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata9}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a92}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a93}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function JScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      헤어드라이어(침실1)는 전체의 0.71%, 176원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata10}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a102}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a103}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function KScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      PC(침실2)는 전체의 8.17%, 2040원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata11}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a112}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a113}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function LScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      TV(거실)는 전체의 9.87%, 2464원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata12}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a122}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a123}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function MScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      TV(침실1)는 전체의 2.47%, 619원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Adata13}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={a132}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={a133}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function AScreen2({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      공기청정기(거실)는 전체의 0.67%, 33원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Bdata1}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={b12}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={b13}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}

function BScreen2({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      세탁기(발코니)는 전체의 0%, 0원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Bdata2}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={b22}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={b23}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function CScreen2({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      전기밥솥(주방1)은 전체의 0%, 0원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Bdata3}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={b32}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={b33}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function DScreen2({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      PC(방1)는 전체의 2.29%, 115원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Bdata4}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={b42}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={b43}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function EScreen2({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      TV(거실1)는 전체의 97.04%, 4900원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Bdata5}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={b52}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={b53}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}

function AScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      노트북(방3)은 전체의 17.35%, 412원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata1}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c12}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c13}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}

function BScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      선풍기1(방1)은 전체의 17.54%, 417원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata2}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c22}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c23}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function CScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      선풍기2(방1)는 전체의 1.79%, 42원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata3}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c32}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c33}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function DScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      세탁기(방코니2)는 전체의 7.64%, 181원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata4}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c42}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c43}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function EScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      에어컨(거실)은 전체의 0.81%, 19원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata5}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c52}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c53}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function FScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      에어컨(방1)은 전체의 0.78%, 18원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata6}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c62}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c63}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function GScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      전기밥솥(주방)은 전체의 0.78%, 18원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata7}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c72}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c73}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function HScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      전자레인지(주방)는 전체의 13.33%, 317원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata8}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c82}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c83}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function IScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      PC(방1)는 전체의 0.75%, 17원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata9}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c92}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c93}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function JScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      TV(거실)는 전체의 0.77%, 18원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata10}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c102}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c103}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function KScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      TV2(방1)는 전체의 0.77%, 18원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata11}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c112}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c113}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
function LScreen3({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text styles={{fontsize:5}}>
      TV3(방2)은 전체의 37.72%, 897원 가량의 전력을 소비하고 있습니다
    </Text>
    
    <View>
    <PieChart
      data={Cdata12}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
    <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>하루 사용량</Text>
    <LineChart
          data={c122}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
        </View>
        <View style={{alignItems: "center",backgroundColor:"#D8D8D8",marginTop:30,borderRadius:25,marginTop:30}}>
    <Text>누적 일별 사용량

    </Text>
        <LineChart
          data={c123}
          withVerticalLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withInnerLines={false}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={220}
          //yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#D3D3D3",
            backgroundGradientTo: "#D3D3D3",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => '#FA5858',
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            marginbottom:15,
            borderRadius: 16
          }}
        />
</View>
    </View>
    </View>
    </ScrollView>
  );
  
}
const Stack = createNativeStackNavigator();

function App()  {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={HomeScreen2} />
        <Stack.Screen name="Home3" component={HomeScreen3} />
        <Stack.Screen name="설정" component={DetailScreen} />
        <Stack.Screen name="선풍기1(침실1)" component={AScreen} />
        <Stack.Screen name="선풍기2(침실2)" component={BScreen} />
        <Stack.Screen name="세탁기(발코니2)" component={CScreen} />
        <Stack.Screen name="에어컨(거실)" component={DScreen} />
        <Stack.Screen name="에어컨실외기(거실)" component={EScreen} />
        <Stack.Screen name="에어프라이기(주방)" component={FScreen} />
        <Stack.Screen name="전기밥솥(주방)" component={GScreen} />
        <Stack.Screen name="전자레인지(주방)" component={HScreen} />
        <Stack.Screen name="커피포트(주방)" component={IScreen} />
        <Stack.Screen name="헤어드라이어(침실1)" component={JScreen} />
        <Stack.Screen name="PC(침실2)" component={KScreen} />
        <Stack.Screen name="TV(거실)" component={LScreen} />
        <Stack.Screen name="TV(침실1)" component={MScreen} />
        <Stack.Screen name="공기청정기(거실)" component={AScreen2} />
        <Stack.Screen name="세탁기(발코니)" component={BScreen2} />
        <Stack.Screen name="전기밥솥(주방1)" component={CScreen2} />
        <Stack.Screen name="PC(방1)" component={DScreen2} />
        <Stack.Screen name="TV(거실1)" component={EScreen2} />
        <Stack.Screen name="노트북 (방3)" component={AScreen3} />
        <Stack.Screen name="선풍기1 (방1)" component={BScreen3} />
        <Stack.Screen name="선풍기2 (방1)" component={CScreen3} />
        <Stack.Screen name="세탁기 (발코니2)" component={DScreen3} />
        <Stack.Screen name="에어컨 (거실)" component={EScreen3} />
        <Stack.Screen name="에어컨 (방1)" component={FScreen3} />
        <Stack.Screen name="전기밥솥 (주방)" component={GScreen3} />
        <Stack.Screen name="전자레인지 (주방)" component={HScreen3} />
        <Stack.Screen name="PC (방1)" component={IScreen3} />
        <Stack.Screen name="TV (거실)" component={JScreen3} />
        <Stack.Screen name="TV2 (방1)" component={KScreen3} />
        <Stack.Screen name="TV3 (방2)" component={LScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
const styles = StyleSheet.create({
  container: {
    marginTop:10,
    marginBottom:10,
    marginRight:15,
    marginLeft:15,
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor:'#ffffff',
    borderRadius: 7,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 30,
    marginBottom: 15,
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    marginTop:10,
    marginBottom:10,
    marginRight:15,
    marginLeft:15,
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor:'#aaaaaa',
    borderRadius: 7,
  },
  container2:{
    marginTop:10,
    marginBottom:10,
    marginRight:15,
    marginLeft:15,
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor:'#ffffff',
    flexDirection:'row'
  },
  separator: {
    height: 12
  },
  gaugeText: {
      backgroundColor: 'transparent',
      color: '#000',
      fontSize: 24,
    },
  objectView: {
    backgroundColor: 'white',
    margin: '2%',
    flexDirection: 'row',
    borderRadius: 20,
  },
  objectrow: {
    flex:1,
    padding: '7%',
  },
  object: {
    backgroundColor: '#D8DAD9',
    padding:'10%',
    marginVertical: '4%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  settingView: {
    alignSelf: 'flex-end',
    margin: '2%',
  },
  Texticon:{
    fontSize: 10,
    flexDirection: 'row',
  }
});

export default App;