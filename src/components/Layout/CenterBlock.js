import React, { PropTypes } from 'react' 
import { View } from 'react-native'

const propTypes = {
  children: PropTypes.node
}

const CenterBlock = (props) => {
  const { children, style } = props

  const defaultStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <View style={[defaultStyles, style]}>
      {children}
    </View>
  )
}

CenterBlock.propTypes = propTypes

export default CenterBlock
