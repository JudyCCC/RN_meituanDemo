import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text} from 'react-native'
import {TabNavigator,TabBarBottom,StackNavigator} from 'react-navigation'
import HomeScene from './scene/Home/HomeScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import MineScene from './scene/Order/OrderScene'
import OrderScene from './scene/Order/OrderScene'
import TabBarItem from './widget/TabBarItem'
import color from './widget/color'
import WebScene from './scene/Web/WebScene'

type Props = {}

type State = {}

export default class RootScene extends PureComponent<Props, State> {
  render() {
    return (
      <Navigator/>
    )
  }
}

const Tab = TabNavigator({
  Home:{
    screen:HomeScene,
    navigationOptions:()=>({
      tabBarLabel:'团购',
      tabBarIcon:({focused,tintColor})=>(
        // <Image
        //   source={require('./img/tabbar/tabbar_homepage.png')}
        // />
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('./img/tabbar/tabbar_homepage.png')}
          selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
        />
      )
    })
  },
  Nearby:{
    screen:NearbyScene,
    navigationOptions:()=>({
      tabBarLabel:'附近',
      tabBarIcon:({focused,tintColor})=>(
        // <Image
        //   source={require('./img/tabbar/tabbar_merchant.png')}
        // />
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('./img/tabbar/tabbar_merchant.png')}
          selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
        />
      )
    })
  },
  Order:{
    screen:OrderScene,
    navigationOptions:()=>({
      tabBarLabel:'订单',
      tabBarIcon:({focused,tintColor})=>(
        // <Image
        //   source={require('./img/tabbar/tabbar_order.png')}
        // />
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('./img/tabbar/tabbar_order.png')}
          selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
        />
      )
    })
  },
  Mine:{
    screen:MineScene,
    navigationOptions:()=>({
      tabBarLabel:'我的',
      tabBarIcon:({focused,tintColor})=>(
        // <Image
        //   source={require('./img/tabbar/tabbar_mine.png')}
        // />
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('./img/tabbar/tabbar_mine.png')}
          selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
        />
      )
    })
  }
},{
  //安卓默认没有图标，需另外设置
  tabBarComponent:TabBarBottom,
  tabBarPosition:'bottom',
  lazy:true,    //是否需要将四个页面都创建出来
  animationEnabled:false,   //是否默认动画切换
  swipeEnabled:false,    //是否支持横向滑动切换
  tabBarOptions:{
    activeTintColor:color.primary,
    inactiveTintColor:color.gray,
    style:{backgroundColor:'white'}
  }
})

const Navigator = StackNavigator({
  Tab:{screen:Tab},
  WebScene:{screen:WebScene}
},{
  navigationOptions:{
    headerTintColor:'red',
    headerBackTitle:null,
  }
})

const styles = StyleSheet.create({})