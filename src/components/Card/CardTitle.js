import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'
import { stydux } from 'react-stydux'
import { default as baseStyles } from './styles'


@stydux(
  (styles) => ({
    card_title: styles.card_title
  })
)
export default class CardTitle extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string, PropTypes.node
    ]).isRequired
  }

  static defaultProps = {}

  static defaultStyles = baseStyles

  render() {
    const { styles, children } = this.props

    return (
      <Text style={styles.card_title}>
        {children}
      </Text>
    )
  }
}
