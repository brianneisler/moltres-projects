import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { stydux } from 'react-stydux'
import _ from 'mudash'
import { default as baseStyles } from './styles'


const propStyles = (props) => {
  const style = props.style ? { list: props.style } : {}
  return style
}

@stydux(
  (styles) => ({
    list: styles.list
  }), (defaultStyles, mappedStyles, inlineStyles, props) => _.merge(
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
