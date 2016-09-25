import _ from 'mudash'
import React, { Component, PropTypes } from 'react'
import { Image, Text } from 'react-native'
import { stydux } from 'react-stydux'
import { default as baseStyles } from './styles'

@stydux(
  styles => ({
    avatar: styles.avatar,
    avatar_placeholder: styles.avatar_placeholder
  }),
  (defaultStyles, mappedStyles, inlineStyles, props) => _.assoc(
    defaultStyles,
    mappedStyles,
    inlineStyles,
    {
      avatar: {
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2
      }
    }
  )
)
export default class Avatar extends Component {

  static propTypes = {
    size: PropTypes.number,
    source: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string
      }),
      PropTypes.number
    ]),
    placeholder: PropTypes.string
  }

  static defaultStyles = baseStyles

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { placeholder, source, styles } = this.props
    return (
      <Image
        style={[styles.avatar]}
        source={source}>
        <Text style={styles.placeholder}>{placeholder}</Text>
      </Image>
    )
  }
}
