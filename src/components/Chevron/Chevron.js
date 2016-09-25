import React, { Component, PropTypes } from 'react'
import { Image } from 'react-native'
import { stydux } from 'react-stydux'
import _ from 'mudash'
import baseStyles from './styles'


const propStyles = (props) => {
  const { direction, size, tintColor } = props
  const styles = { chevron: {} }

  if (direction === 'right') {
    styles.chevron.transform = [{rotate: '180deg'}]
  } else if (direction === 'up') {
    styles.chevron.transform = [{rotate: '90deg'}]
  } else if (direction === 'down') {
    styles.chevron.transform = [{rotate: '-90deg'}]
  }

  if (size) {
    styles.chevron.height = size
    styles.chevron.width = size
  }

  if (tintColor) {
    styles.chevron.tintColor = tintColor
  }

  return styles
}

@stydux(
  (styles) => ({
    chevron: styles.chevron
  }),
  (defaultStyles, mappedStyles, inlineStyles, props) => _.merge(
    {},
    defaultStyles,
    mappedStyles,
    inlineStyles,
    propStyles(props)
  )
)
export default class Chevron extends Component {

  static propTypes = {
    direction: PropTypes.string,
    size: PropTypes.number,
    tintColor: PropTypes.string
  }
  static defaultProps = {
    direction: 'left'
  }
  static defaultStyles = baseStyles

  render() {
    const { styles } = this.props
    return (
      <Image
        source={require('./assets/chevron.png')}
        style={styles.chevron}
      />
    )
  }
}
