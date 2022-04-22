import { ImageBackground, Text } from 'react-native'
import React from 'react'

const App = () => (
  <ImageBackground
    source={require('./images/1.jpeg')}
    style={{ width: '100%', height: '100%' }}>
    <Text
      style={{
        color: 'maroon',
        fontSize: 22,
        textAlign: 'center',
        top: '30%'
      }}>
      Variety is the spice of life.
    </Text>
  </ImageBackground>
)
export default App
