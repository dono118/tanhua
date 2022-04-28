import { Text, View } from 'react-native'
import React, { Component } from 'react'

class App extends Component {
  state = {
    num: 100
  }

  // handlePress() {
  //   console.log(this.state)
  // }

  // 1 箭头函数
  handlePress = () => {
    console.log(this.state)
  }

  // handlePress1() {
  //   console.log(this.state)
  // }

  // handlePress2() {
  //   console.log(this.state)
  // }

  // handlePress3() {
  //   console.log(this.state)
  // }

  // 4 在构造函数中绑定事件
  // constructor() {
  //   super()
  //   this.handlePress3 = this.handlePress3.bind(this)
  // }

  render() {
    return (
      <View>
        <Text onPress={this.handlePress}>{this.state.num}</Text>
        {/* 2 通过bind来绑定 */}
        {/* <Text onPress={this.handlePress1.bind(this)}>{this.state.num}</Text> */}
        {/* 3 匿名函数 */}
        {/* <Text onPress={() => this.handlePress2()}>{this.state.num}</Text> */}
        {/* <Text onPress={this.handlePress3}>{this.state.num}</Text> */}
      </View>
    )
  }
}
export default App
