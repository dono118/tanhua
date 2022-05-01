import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { inject } from 'mobx-react'

@inject('rootStore')
export default class Btn extends Component {
  render() {
    return (
      <View>
        <Text>Btn:{this.props.rootStore.name}</Text>
      </View>
    )
  }
}
