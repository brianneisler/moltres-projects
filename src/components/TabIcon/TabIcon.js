import React, { PropTypes } from 'react' 
import { View, Text, Image } from 'react-native'
import * as Stylus from '../styles/constants'


const propTypes = {
  title: PropTypes.string,
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string
    }),
    PropTypes.number
  ])
}

const defaultProps = {}

const TabIcon = (props) => {
  const {
    selected,
    source,
    title,
    style,
    iconStyle,
    titleStyle
  } = props

  const defaultStyles = {
    tab: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'stretch',
      alignItems: 'center',
      height: 44,
      opacity: 0.8
    },
    active: {
      opacity: 1.0
    },
    icon: {
      height: 26,
      width: 26,
      resizeMode: 'contain'
    },
    title: {
      color: Stylus.GRAY_DARK,
      fontSize: Stylus.FONT_SIZE_XS
    }
  }

  return (
    <View style={[
      defaultStyles.tab,
      selected ? defaultStyles.active : null,
      style
    ]}>
    { source &&
      <Image
        source={source}
        style={[defaultStyles.icon, iconStyle]}
      />
    }
    {
      title &&
      <Text style={[defaultStyles.title, titleStyle]}>
        {title}
      </Text>
    }
    </View>
  )
}

TabIcon.propTypes = propTypes
TabIcon.defaultProps = defaultProps

export default TabIcon
