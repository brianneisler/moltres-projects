import * as Stylus from '../styles/constants' 

const baseStyles = {
  avatar: {
    backgroundColor: Stylus.GRAY_LIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar_placeholder: {
    color: Stylus.GRAY_DARK,
    fontWeight: Stylus.FONT_WEIGHT_MEDIUM,
    fontSize: Stylus.FONT_SIZE_BASE,
    width: Stylus.AVATAR_SIZE,
    height: Stylus.AVATAR_SIZE,
    borderRadius: Stylus.AVATAR_SIZE / 2
  }
}

export default baseStyles
