import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { stydux } from 'react-stydux'
import { default as baseStyles } from './styles'


@stydux(
  (styles) => ({
    card_header: styles.card_header
  })
)
export default class CardHeader extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }
  static defaultProps = {}
  static defaultStyles = baseStyles

  render() {
    const { styles, children } = this.props
    return (
      <View style={styles.card_header}>
        {children}
      </View>
    )
  }
}
