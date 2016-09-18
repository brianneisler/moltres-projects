import * as Stylus from '../styles/constants'
import _ from 'mudash'

// Base styles
const baseStyles = {
  badge: {
    paddingTop: 2,
    paddingBottom: 3,
    paddingHorizontal: 9,
    backgroundColor: Stylus.GRAY,
    borderRadius: 100
  },
  badge_text: {
    color: Stylus.FULL_WHITE,
    fontSize: Stylus.FONT_SIZE_SM,
    fontWeight: Stylus.FONT_WEIGHT_MEDIUM
  }
}

export default baseStyles

// Alternative styles
const positive = {
  badge: {
    backgroundColor: Stylus.COLOR_POSITIVE
  },
  badge_text: {
    color: Stylus.FULL_WHITE
  }
}

const negative = {
  badge: {
    backgroundColor: Stylus.COLOR_NEGATIVE
  },
  badge_text: {
    color: Stylus.FULL_WHITE
  }
}

export const positiveStyles = _.merge({}, baseStyles, positive)
export const negativeStyles = _.merge({}, baseStyles, negative)
