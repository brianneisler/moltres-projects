import React, { PropTypes } from 'react'
import { View } from 'react-native'
import baseStyles from './styles'


const propTypes = {
  children: PropTypes.node
}
const defaultProps = {}
const defaultStyles = baseStyles

// TODO CC: Row should validates the total grid size should add up to 6

const Row = (props) => {
  const { children } = props
  return (
    <View style={defaultStyles}>
      {children}
    </View>
  )
}

Row.propTypes = propTypes
Row.defaultProps = defaultProps

export default Row
