import React, { Component } from 'react'
import { TabBar as RNTabBar } from 'react-native-router-flux'
import { stydux } from 'react-stydux'

import { defaultStyles as baseStyles } from './styles' 

@stydux(
  (styles) => ({
    tabbar: styles.tabbar
  })
)
export default class TabBar extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {}

  static defaultProps = {}

  static defaultStyles = baseStyles

  render() {
    const { styles } = this.props

    return (
      <RNTabBar tabBarStyle={styles.tabBar} />
    )
  }
}
