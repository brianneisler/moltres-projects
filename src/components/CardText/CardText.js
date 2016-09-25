import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'
import { stydux } from 'react-stydux'
import baseStyles from './styles'


@stydux(
  (styles) => ({
    card_text: styles.card_text
  })
)
export default class CardText extends Component {

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
      <Text style={styles.card_text}>
        {children}
      </Text>
    )
  }
}
