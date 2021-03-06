import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { stydux } from 'react-stydux'
import baseStyles from './styles'


@stydux(
  (styles) => ({
    card_block: styles.card_block
  })
)
export default class CardBlock extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  static defaultProps = {}

  static defaultStyles = baseStyles

  render() {
    const { styles, children } = this.props

    return (
      <View style={styles.card_block}>
        {children}
      </View>
    )
  }
}
