import { Text, View } from 'react-native'
import React, { Component } from 'react'

class Btn extends Component {
  // 子组件挂载完毕
  componentDidMount() {
    console.log('子组件挂载完毕')
  }

  // 子组件即将被卸载
  componentWillUnmount() {
    console.log('子组件即将被卸载')
  }

  render() {
    return (
      <View>
        <Text>按钮</Text>
      </View>
    )
  }
}

class App extends Component {
  // 构造函数
  constructor() {
    super()
    console.log('1 构造函数 constructor')
    // 对state做初始化
    this.state = {
      num: 100,
      isShow: true
    }
  }

  // 组件挂载完毕
  componentDidMount() {
    console.log('3 组件挂载完毕')
  }

  handlePress = () => {
    this.setState({
      num: Date.now()
    })
  }

  handleToggle = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  render() {
    const { num, isShow } = this.state
    console.log('2 render函数 视图更新')
    return (
      <View>
        <Text onPress={this.handlePress}>{num}</Text>
        <Text onPress={this.handleToggle}>切换显示</Text>
        {isShow ? <Btn /> : <></>}
      </View>
    )
  }
}
export default App
