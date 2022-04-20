import {TouchableOpacity, Text} from 'react-native'
import React from 'react'

const handlePress = () => {
  alert('Hi')
}

const App = () => (
  <TouchableOpacity onPress={handlePress} activeOpacity={0.5}>
    <Text>Touch Me</Text>
  </TouchableOpacity>
)
export default App
