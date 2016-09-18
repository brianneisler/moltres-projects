import _ from 'mudash'
import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { stydux } from 'react-stydux'
import { default as baseStyles, positiveStyles, negativeStyles } from './styles'

const mergeStyles = (defaultStyles, mappedStyles, inlineStyles, props) => {
  if (props.positive) {
    return _.assoc({}, defaultStyles, positiveStyles, mappedStyles, inlineStyles)
  }
  if (props.negative) {
    return _.assoc({}, defaultStyles, negativeStyles, mappedStyles, inlineStyles)
  }
  return _.assoc({}, defaultStyles, mappedStyles, inlineStyles)
}

@stydux(
  styles => ({
    badge: styles.badge,
    badge_text: styles.badge_text
  }), mergeStyles
)
export default class Badge extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    containerStyle: PropTypes.object,
    children: PropTypes.string
  }

  static defaultProps = {
    positive: false,
    negative: false
  }

  static defaultStyles = baseStyles

  render() {
    const { styles, children } = this.props
    return (
      <View style={styles.badge}>
        <Text style={styles.badge_text}>
          { children }
        </Text>
      </View>
    )
  }
}
