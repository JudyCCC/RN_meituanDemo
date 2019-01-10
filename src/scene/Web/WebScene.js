import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text} from 'react-native'

type Props = {}

type State = {}

export default class WebScene extends PureComponent<Props, State> {
  constructor(props:Object){
    super(props)
    alert(this.props.navigation.state.params.url)
  }
  render() {
    return (
      <View>
        <Text>WebScene</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})