import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { stydux } from 'react-stydux'
import _ from 'mudash'
import baseStyles from './styles'


const propStyles = (props) => {
  return props.style ? { list: props.style } : {}
}

@stydux(
  (styles) => ({
    list: styles.list
  }),
  (defaultStyles, mappedStyles, inlineStyles, props) => _.merge(
    {},
    defaultStyles,
    mappedStyles,
    inlineStyles,
    propStyles(props)
  )
)
export default class List extends Component {

  static propTypes = {
    children: PropTypes.node
  }
  static defaultProps = {}
  static defaultStyles = baseStyles

  render() {
    const { children, styles } = this.props
    return (
      <View style={styles.list}>
        {children}
      </View>
    )
  }
}
