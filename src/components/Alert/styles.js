import * as Stylus from '../styles/constants'
import _ from 'mudash'

// Base styles
const baseStyles = {
  alert: {
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0,
    right: 0
  },
  alert_content: {
    position: 'relative',
    backgroundColor: Stylus.COLOR_PRIMARY,
    paddingVertical: Stylus.GUTTER_LESS,
    paddingHorizontal: Stylus.GUTTER
  },
  alert_message: {
    fontSize: Stylus.FONT_SIZE_SM,
    color: Stylus.FULL_WHITE
  },
  alert_dismissable: {
    position: 'absolute',
    right: Stylus.GUTTER_LESS,
    top: 0
  }
}

export default baseStyles

// Alternative styles
const positive = {
  alert_content: {
    backgroundColor: Stylus.COLOR_POSITIVE
  }
} 
const negative = {
  alert_content: {
    backgroundColor: Stylus.COLOR_NEGATIVE
  }
}

export const positiveStyles = _.merge({}, baseStyles, positive)
export const negativeStyles = _.merge({}, baseStyles, negative)
