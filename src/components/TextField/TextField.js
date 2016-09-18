import React, { Component, PropTypes } from 'react'
import { TextInput, Text, View } from 'react-native'
import { stydux } from 'react-stydux'
import { default as baseStyles } from './styles'


@stydux(
  (styles) => ({
    formGroup: styles.formGroup,
    formGroup_label: styles.formGroup_label,
    formGroup_textInput: styles.formGroup_textInput
  })
)
export default class TextField extends Component {

  static propTypes = {
    label: PropTypes.string
  }

  static defaultProps = {}

  static defaultStyles = baseStyles

  render() {
    const { styles, label, ...other } = this.props

    return (
      <View style={styles.formGroup}>
        {
          label &&
          <Text style={styles.formGroup_label}>{label}</Text>
        }
        <TextInput
          style={styles.formGroup_textInput}
          {...other}
        />
      </View>
    )
  }
}
