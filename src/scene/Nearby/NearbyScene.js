import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text} from 'react-native'
import {TabNavigator,TabBarBottom} from 'react-navigation'

type Props = {}

type State = {}

export default class NearbyScene extends PureComponent<Props, State> {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Nearby</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})