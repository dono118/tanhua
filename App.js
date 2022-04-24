import { View, Text } from 'react-native'
import React from 'react'

const obj = {
  name: '张三',
  age: 25
}
const arr = ['apple', 'orange', 'banana']
const App = () => (
  <View>
    <Text>姓名：{obj.name}</Text>
    <Text>年龄：{obj.age}</Text>
    {arr.map((v, i) => (
      <View key={i} style={{ backgroundColor: 'aqua' }}>
        <Text>{v}</Text>
      </View>
    ))}
  </View>
)

export default App
