import React, { PropTypes } from 'react' 
import { View } from 'react-native'

import * as Stylus from '../styles/constants'

const propTypes = {
  size: PropTypes.oneOf([0,1,2,3,4,5,6]).isRequired,
  children: PropTypes.any,
  style: PropTypes.object
}
const defaultProps = {}

const Grid = (props) => {
  const { children, style, size } = props

  const defaultStyles = {
    flex: size,
    marginHorizontal: Stylus.GUTTER_LESS
  }

  return (
    <View style={[defaultStyles, style]}>
      {children}
    </View>
  )
}

Grid.propTypes = propTypes
Grid.defaultProps = defaultProps

export default Grid
