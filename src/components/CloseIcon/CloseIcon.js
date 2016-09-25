import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { stydux } from 'react-stydux'
import _ from 'mudash'
import baseStyles from './styles'


const propStyles = (props) => {
  const { size, tintColor } = props
  const styles = { closeIcon_text: {} }
  if (tintColor) {
    styles.closeIcon_text.color = tintColor
  }
  if (size) {
    styles.closeIcon_text.fontSize = size
  }
  return styles
}

@stydux(
  (styles) => ({
    closeIcon: styles.closeIcon,
    closeIcon_text: styles.closeIcon_text
  }),
  (defaultStyles, mappedStyles, inlineStyles, props) => _.merge(
    {},
    defaultStyles,
    mappedStyles,
    inlineStyles,
    propStyles(props)
  )
)
export default class CloseIcon extends Component {

  static propTypes = {
    onPress: PropTypes.function,
    size: PropTypes.number,
    tintColor: PropTypes.string
  }
  static defaultProps = {
    tintColor: null,
    size: null
  }
  static defaultStyles = baseStyles

  render() {
    const { styles, onPress } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.closeIcon}>
        <Text style={styles.closeIcon_text}>&times </Text>
      </TouchableOpacity>
    )
  }
}
