import {View, Image} from 'react-native'
import React from 'react'

const App = () => (
  <View>
    {/* <Image source={require('./images/1.jpg')} /> */}
    {/* <Image source={require('./images/1.png')} /> */}
    <Image source={require('./images/1.gif')} />
    {/* <Image
      source={{
        uri: 'http://img.duoziwang.com/2018/16/04272126721348.jpg'
      }}
      style={{width: 200, height: 300}}
    /> */}
  </View>
)
export default App
