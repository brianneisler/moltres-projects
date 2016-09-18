import React, { PropTypes } from 'react' 
import { View } from 'react-native'

import * as Stylus from '../styles/constants'

const propTypes = {
  children: PropTypes.node
}
const defaultProps = {}

// TODO CC: Row should validates the total grid size should add up to 6

const Row = (props) => {
  const { children } = props

  const defaultStyles = {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: -Stylus.GUTTER_LESS
  }

  return (
    <View style={defaultStyles}>
      {children}
    </View>
  )
}

Row.propTypes = propTypes
Row.defaultProps = defaultProps

export default Row
