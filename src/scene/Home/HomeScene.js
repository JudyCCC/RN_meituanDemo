import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import color from '../../widget/color'

type Props = {
  navigation:any
}

type State = {}

export default class HomeScene extends PureComponent<Props, State> {
  static navigationOptions = ({navigation}:any) => ({
    headerStyle:{backgroundColor:color.primary}
    headerTitle:(
      <TouchableOpacity style={styles.searchBar}>
          <Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon}/>
          <Text style={{fontSize:14}}>搜索</Text>
      </TouchableOpacity>
    )
  })
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBar:{
    flexDirection:'row',
    width:
  }
})