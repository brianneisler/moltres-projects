import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { stydux } from 'react-stydux'
import _ from 'mudash'
import { default as baseStyles } from './styles'


const propStyles = (props) => {
  const { containerStyle } = props
  return {
    subheader: containerStyle || {},
    subheader_text: {}
  }
}

@stydux(
  (styles) => ({
    subheader: styles.subheader,
    subheader_text: styles.subheader_text
  }),
  (defaultStyles, mappedStyles, inlineStyles, props) => _.merge(
    {},
    defaultStyles,
    mappedStyles,
    inlineStyles,
    propStyles(props)
  )
)
export default class Subheader extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }
  static defaultProps = {}
  static defaultStyles = baseStyles

  render() {
    const { styles, children } = this.props
    return (
      <View style={styles.subheader}>
        <Text style={styles.subheader_text}>
          {children}
        </Text>
      </View>
    )
  }
}
