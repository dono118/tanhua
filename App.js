import { Text, View } from 'react-native'
import React from 'react'
import axios from 'axios'

console.log('调试')
axios
  .get('http://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')
  .then(console.log)
const App = () => (
  <View>
    <Text>==========</Text>
    <Sub color="red">
      <View>
        <Text>++++++++++</Text>
      </View>
    </Sub>
    <Text>==========</Text>
  </View>
)

// 子组件
const Sub = props => (
  <View>
    <Text style={{ color: props.color }}>子组件</Text>
    {/* 插槽 */}
    {props.children}
  </View>
)

export default App
