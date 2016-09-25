import * as Stylus from '../styles/constants' 

const baseStyles = {
  label: {
    alignSelf: 'flex-start',
    backgroundColor: Stylus.LABEL_BG,
    paddingVertical: Stylus.LABEL_PADDING_VERTICAL,
    paddingHorizontal: Stylus.LABEL_PADDING_HORIZONTAL,
    borderRadius: Stylus.LABEL_BORDER_RADIUS
  },
  label_text: {
    color: Stylus.LABEL_TEXT_COLOR,
    fontSize: Stylus.LABEL_TEXT_FONT_SIZE
  }
}

export default baseStyles
