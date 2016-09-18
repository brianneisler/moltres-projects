import * as Stylus from '../styles/constants' 

const baseStyles = {
  button: {
    paddingLeft: Stylus.GUTTER,
    paddingRight: Stylus.GUTTER,
    paddingTop: Stylus.GUTTER_LESS,
    paddingBottom: Stylus.GUTTER_LESS,
    borderRadius: Stylus.BORDER_RADIUS,
    borderWidth: Stylus.BORDER_WIDTH,
    borderColor: Stylus.COLOR_PRIMARY
  },
  button_text: {
    backgroundColor: Stylus.FULL_WHITE
  },
  button_positive: {
    backgroundColor: Stylus.COLOR_POSITIVE
  },
  button_positive_text: {
    color: Stylus.FULL_WHITE
  },
  button_negative: {
    backgroundColor: Stylus.COLOR_NEGATIVE
  },
  button_negative_text: {
    color: Stylus.FULL_WHITE
  }
}

export default baseStyles
