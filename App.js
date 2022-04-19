import {View, Text} from 'react-native'
import React from 'react'

/*
  1. 在rn中容器的默认布局方式是 flex
  2. 内部的子控件默认排列方式是纵向排列 flex-direction: column;
  3. 在rn中样式没有继承
  4. 单位 不用加px,vw,vh 百分比可以 "50%"
  5. Dimensions 获取屏幕尺寸
*/
const App = () => (
  <View>
    <Text
      style={{
        backgroundColor: 'aqua',
        transform: [{translateY: 200}, {scale: 2}]
      }}>
      Hello, World!
    </Text>
  </View>
)
export default App
