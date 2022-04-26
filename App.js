import { Text, View } from 'react-native'
import React from 'react'

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
