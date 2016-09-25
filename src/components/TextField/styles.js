import * as Stylus from '../styles/constants' 

const baseStyles = {
  formGroup: {
    borderBottomWidth: Stylus.BORDER_WIDTH,
    borderBottomColor: Stylus.BORDER_COLOR,
    marginBottom: Stylus.FORM_GROUP_MARGIN_BOTTOM,
    paddingHorizontal: Stylus.FORM_GROUP_PADDING_HORIZONTAL,
    paddingVertical: Stylus.FORM_GROUP_PADDING_VERTICAL
  },
  formGroup_label: {
    color: Stylus.FORM_GROUP_LABEL_COLOR,
    fontWeight: Stylus.FORM_GROUP_LABEL_FONT_WEIGHT,
    fontSize: Stylus.FORM_GROUP_LABEL_FONT_SIZE,
    marginBottom: Stylus.FORM_GROUP_MARGIN_BOTTOM
  },
  formGroup_textInput: {
    padding: Stylus.TEXT_INPUT_PADDING,
    height: Stylus.TEXT_INPUT_HEIGHT
  }
}

export default baseStyles
