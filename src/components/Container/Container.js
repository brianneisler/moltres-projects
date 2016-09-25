import React, { PropTypes } from 'react'
import { View } from 'react-native'
import * as Stylus from '../styles/constants'

const propTypes = {
  children: PropTypes.node
}
const defaultStyles = {
  flex: 1,
  paddingHorizontal: Stylus.GUTTER
}

const Container = (props) => {
  const { children, style } = props
  return (
    <View style={[defaultStyles, style]}>
      {children}
    </View>
  )
}

Container.propTypes = propTypes

export default Container
