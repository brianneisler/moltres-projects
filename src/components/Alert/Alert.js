import _ from 'mudash'
import React, { PropTypes, Component } from 'react'
import { View, Text, Animated } from 'react-native'
import { stydux } from 'react-stydux'
import CloseIcon from '../CloseIcon'
import baseStyles, { positiveStyles, negativeStyles } from './styles'

const mergeStyles = (defaultStyles, mappedStyles, inlineStyles, props) => {
  if (props.positive) {
    return _.assoc(defaultStyles, positiveStyles, mappedStyles, inlineStyles)
  } else if (props.negative) {
    return _.assoc(defaultStyles, negativeStyles, mappedStyles, inlineStyles)
  }
  return _.assoc(defaultStyles, mappedStyles, inlineStyles)
}

@stydux(
  (styles) => ({
    alert: styles.alert,
    alert_content: styles.alert_content,
    alert_dismissable: styles.alert_dismissable
  }), mergeStyles
)
export default class Alert extends Component {

  static propTypes = {
    children: PropTypes.string,
    position: PropTypes.string,
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    onClosePress: PropTypes.function
  }
  static defaultProps = {
    positive: false,
    negative: false,
    position: 'top'
  }
  static defaultStyles = baseStyles

  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  onClosePress = () => {
    const { onClosePress } = this.props
    this.setState({ visible: false })
    if (onClosePress) {
      onClosePress()
    }
  }

  render() {
    const { styles, children } = this.props
    return (
      <Animated.View style={[
        styles.alert,
        !this.state.visible ? {height: 0} : null]}>
        <View style={styles.alert_content}>
          <Text style={styles.alert_message}>
            {children}
          </Text>
          <View style={styles.alert_dismissable}>
            <CloseIcon onPress={this.onClosePress} />
          </View>
        </View>
      </Animated.View>
    )
  }
}
