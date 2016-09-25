import React, { Component, PropTypes } from 'react'
import { Text, TextInput, TouchableOpacity, Animated } from 'react-native'
import Bar from '../Bar'
import { stydux } from 'react-stydux'
import baseStyles from './styles'
import { TEXT_INPUT_PLACEHOLDER_COLOR } from '../styles/constants'


@stydux(
  (styles) => ({
    searchBar: styles.searchbar,
    searchBar_textInput: styles.searchBar_textInput,
    searchBar_button: styles.searchBar_button
  })
)
export default class SearchBar extends Component {

  static propTypes = {
    onCancelPress: PropTypes.function
  }
  static defaultProps = {
    placeholder: 'Search',
    placeholderTextColor: TEXT_INPUT_PLACEHOLDER_COLOR,
    clearButtonMode: 'while-editing'
  }
  static defaultStyles = baseStyles

  constructor(props) {
    super(props)
    this.state = {
      disabled: true
    }
  }

  render() {
    const {
      styles,
      placeholder,
      placeholderTextColor,
      clearButtonMode,
      ...textInputProps
    } = this.props

    return (
      <Bar style={styles.searchBar}>
        <TextInput
          ref='search'
          style={styles.searchBar_textInput}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          clearButtonMode={clearButtonMode}
          {...textInputProps}
        />
        <Animated.View>
          <TouchableOpacity onPress={this.handlePress} disabled={this.state.disabled}>
            <Text style={[
              styles.searchBar_button,
              this.state.disabled ? styles.searchBar_disabled : null
            ]}>Cancel</Text>
          </TouchableOpacity>
        </Animated.View>
      </Bar>
    )
  }

  handleBlur = () => {
    this.setState({
      disabled: true
    })
  }

  handleFocus = () => {
    this.setState({
      disabled: false
    })
  }

  handlePress = () => {
    const { onCancelPress } = this.props
    this.refs.search.blur()
    if (onCancelPress) {
      onCancelPress()
    }
  }
}
