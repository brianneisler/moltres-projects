import React, { PropTypes } from 'react' 
import { View } from 'react-native'

import * as Stylus from '../styles/constants'

const propTypes = {
  children: PropTypes.node
}

const Bar = (props) => {
  const {
    children,
    style
  } = props

  // Default styles
  const defaultStyles = {
    container: {
      paddingHorizontal: Stylus.GUTTER,
      paddingVertical: Stylus.GUTTER_LESS,
      borderTopWidth: Stylus.BORDER_WIDTH,
      borderTopColor: Stylus.BORDER_COLOR,
      borderBottomWidth: Stylus.BORDER_WIDTH,
      borderBottomColor: Stylus.BORDER_COLOR
    }
  }

  return (
    <View
      style={[
        defaultStyles.container, style
      ]}>
      { children }
    </View>
  )
}

Bar.propTypes = propTypes

export default Bar
