import { Text, View } from 'react-native'
import React, { Component } from 'react'
class App extends Component {
  state = {
    num: 0
  }

  // 组件挂载完毕
  componentDidMount() {
    let { num } = this.state
    this.timeId = setInterval(() => {
      this.setState({
        num: num++
      })
    }, 60000)
  }
  // 组件将要卸载
  componentWillUnmount() {
    clearInterval(this.timeId)
  }
  render() {
    const { num } = this.state
    return (
      <View>
        <Text>{num}</Text>
      </View>
    )
  }
}

export default App
