import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { stydux } from 'react-stydux'
import baseStyles from './styles'
import { LIST_ITEM_UNDERLAY_COLOR } from '../styles/constants'


@stydux(
  (styles) => ({
    listItem: styles.listItem,
    listItem_leftIcon: styles.listItem_leftIcon,
    listItem_rightIcon: styles.listItem_rightIcon,
    listItem_body: styles.listItem_body,
    listItem_heading: styles.listItem_heading,
    listItem_text: styles.listItem_text
  })
)
export default class ListItem extends Component {

  static propTypes = {
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    heading: PropTypes.string,
    text: PropTypes.string,
    onPress: PropTypes.func
  }
  static defaultProps = {
    onPress: () => null,
    underlayColor: LIST_ITEM_UNDERLAY_COLOR
  }
  static defaultStyles = baseStyles

  render() {
    const {
      onPress,
      styles,
      underlayColor,
      leftIcon,
      heading,
      text,
      rightIcon
    } = this.props

    return (
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}>
        <View style={styles.listItem}>
          { leftIcon &&
            <View style={styles.listItem_leftIcon}>{leftIcon}</View>}
          <View style={styles.listItem_body}>
            { heading && <Text style={styles.listItem_heading}>{heading}</Text> }
            { text && <Text style={styles.listItem_text}>{text}</Text> }
          </View>
          { rightIcon &&
            <View style={styles.listItem_rightIcon}>{rightIcon}</View>}
        </View>
      </TouchableHighlight>
    )
  }
}
