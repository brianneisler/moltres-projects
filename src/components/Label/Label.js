import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { stydux } from 'react-stydux'
import baseStyles from './styles'


@stydux(
  (styles) => ({
    label: styles.label,
    label_text: styles.label_text
  })
)
export default class Label extends Component {

  static propTypes = {
    children: PropTypes.string.isRequired
  }
  static defaultProps = {}
  static defaultStyles = baseStyles

  render() {
    const { styles, children } = this.props
    return (
      <View style={styles.label}>
        <Text style={styles.label_text}>
          {children}
        </Text>
      </View>
    )
  }
}
