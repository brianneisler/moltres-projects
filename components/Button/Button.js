import React, { Component, PropTypes } from 'react'
import { stydux } from 'react-stydux'
import RNButton from 'react-native-button'
import { default as baseStyles } from './styles'

@stydux(
  (styles) => ({
    button: styles.button,
    button_text: styles.button_text,
    button_positive: styles.button_positive,
    button_positive_text: styles.button_positive_text,
    button_negative: styles.button_negative,
    button_negative_text: styles.button_negative_text
  })
)
export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string, PropTypes.node
    ])
  }

  static defaultProps = {
    positive: false,
    negative: false
  }

  static defaultStyles = baseStyles

  render() {
    const {
      styles,
      children,
      ...other,
      positive,
      negative
    } = this.props

    return (
      <RNButton
        {...other}
        containerStyle={[
          styles.button,
          positive ? styles.button_positive : null,
          negative ? styles.button_negative : null
        ]}
        style={[
          styles.button_text,
          positive ? styles.button_positive_text : null,
          negative ? styles.button_negative_text : null
        ]}
      >
        {children}
      </RNButton>
    )
  }
}
