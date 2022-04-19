import {View, Text, Dimensions} from 'react-native'
import React from 'react'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

/*
  1. 在rn中容器的默认布局方式是 flex
  2. 内部的子控件默认排列方式是纵向排列 flex-direction: column;
  3. 在rn中样式没有继承
  4. 单位 不用加px,vw,vh 百分比可以 "50%"
  5. Dimensions 获取屏幕尺寸
*/
const App = () => (
  <View
    style={{
      backgroundColor: 'aqua',
      flexDirection: 'row',
      width: '50%',
      height: '50%'
    }}>
    <Text style={{color: 'red', fontSize: 50}}>Hello, World!</Text>
    <Text>React Native</Text>
    <View
      style={{
        width: screenWidth,
        height: screenHeight / 2,
        backgroundColor: 'tan'
      }}>
      <Text>屏幕宽度和高度的一半</Text>
    </View>
  </View>
)
export default App
