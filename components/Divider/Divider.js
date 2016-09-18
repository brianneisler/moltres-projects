import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { stydux } from 'react-stydux'
import _ from 'mudash'
import { default as baseStyles } from './styles'


const propStyles = (props) => {
  const { inset } = props
  const styles = { divider: {} }

  if (inset) {
    styles.divider.marginLeft = inset
  }

  return styles
}

@stydux(
  (styles) => ({
    divider: styles.divider
  }), (defaultStyles, mappedStyles, inlineStyles, props) => _.merge(
    {},
    defaultStyles,
    mappedStyles,
    inlineStyles,
    propStyles(props)
  )
)
export default class Divider extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    inset: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.number
    ])
  }

  static defaultProps = {
    inset: 75
  }

  static defaultStyles = baseStyles

  render() {
    const { styles } = this.props
    return (
      <View style={styles.divider}></View>
    )
  }
}
