import React, { Component } from 'react'
import { TabBar as RNTabBar } from 'react-native-router-flux'
import { stydux } from 'react-stydux'
import baseStyles from './styles'


@stydux(
  (styles) => ({
    tabBar: styles.tabBar
  })
)
export default class TabBar extends Component {

  static defaultStyles = baseStyles

  render() {
    const { styles } = this.props
    return (
      <RNTabBar tabBarStyle={styles.tabBar} />
    )
  }
}
