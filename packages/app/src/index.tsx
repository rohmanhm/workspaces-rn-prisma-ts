import * as React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import ApolloWrapper from './hocs/ApolloWrapper'

import Home from './screens/Home'
import Profile from './screens/Profile'
import Category from './screens/Category'

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }: any) => (<Icon name="ios-home-outline" color={tintColor} size={32}/>)
    }
  },

  Category: {
    screen: ApolloWrapper(Category),
    navigationOptions: {
      tabBarLabel: "Category",
      tabBarIcon: ({ tintColor }: any) => (<Icon name="ios-apps-outline" color={tintColor} size={32}/>)
    }
  },
  Activity: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Activity",
      tabBarIcon: ({ tintColor }: any) => (<Icon name="ios-filing-outline" color={tintColor} size={32}/>)
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }: any) => (<Icon name="ios-person-outline" color={tintColor} size={32}/>)
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: {
        width: 5,
        height: 3
      },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})
