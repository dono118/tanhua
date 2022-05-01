import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import rootStore from './mobx'
import Btn from './components/Btn'

class App extends Component {
  render() {
    return (
      <View>
        <Provider rootStore={rootStore}>
          <Btn></Btn>
        </Provider>
      </View>
    )
  }
}
export default App
