import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('rootStore') // 注入 用来获取 全局数据的
@observer //  当全局发生改变了  组件的重新渲染 从而显示最新的数据
export default class Btn extends Component {
  handleChangeName = () => {
    const arr = ['八戒', '张三', '李四', '王五', '赵六', '悟空']
    let i = Math.floor(Math.random() * arr.length)
    console.log(arr[i])
    this.props.rootStore.changeName(arr[i])
  }

  render() {
    return (
      <View>
        <Text onPress={this.handleChangeName}>点我改变姓名</Text>
        <Text>姓名:{this.props.rootStore.name}</Text>
      </View>
    )
  }
}
