import React, { Component, PropTypes } from 'react'
import { Image } from 'react-native'
import { stydux } from 'react-stydux'
import _ from 'mudash'
import baseStyles from './styles'


const propStyles = (props) => {
  const { rounded } = props
  const styles = { card_image: {} }
  if (!rounded) {
    styles.card_image.borderRadius = 0
  }
  return styles
}

@stydux(
  (styles) => ({
    card_image: styles.card_image
  }),
  (defaultStyles, mappedStyles, inlineStyles, props) => _.merge(
    {},
    defaultStyles,
    mappedStyles,
    inlineStyles,
    propStyles(props)
  )
)
export default class CardImage extends Component {

  static propTypes = {
    source: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string
      }),
      PropTypes.number
    ]),
    rounded: PropTypes.bool
  }
  static defaultProps = {
    rounded: true
  }
  static defaultStyles = baseStyles

  render() {
    const { styles, source } = this.props
    return (
      <Image
        source={source}
        style={styles.card_image}
      />
    )
  }
}
