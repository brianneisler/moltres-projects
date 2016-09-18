import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { stydux } from 'react-stydux'
import { default as baseStyles } from './styles'


@stydux(
  (styles) => ({
    card_block: styles.card_block
  })
)
export default class CardBlock extends Component {
  constructor(props) {
    super(props)
  }

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
