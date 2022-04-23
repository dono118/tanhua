import { View, TextInput } from 'react-native'
import React from 'react'

const handleChangeText = text => {
  alert(text)
}

const App = () => (
  <View>
    <TextInput
      style={{ backgroundColor: '#F5DE83', paddingHorizontal: 12 }}
      onChangeText={handleChangeText}
      placeholder="请输入"
    />
  </View>
)

export default App
