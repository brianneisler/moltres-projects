import * as Stylus from '../styles/constants'

const baseStyles = {
  searchBar: {
    flex: 1,
    flexDirection: 'row'
  },
  searchBar_textInput: {
    flex: 1,
    borderWidth: Stylus.BORDER_WIDTH,
    borderColor: Stylus.BORDER_COLOR,
    borderRadius: Stylus.BORDER_RADIUS,
    height: 28,
    paddingVertical: Stylus.GUTTER_LESS,
    paddingHorizontal: Stylus.GUTTER_LESS,
    fontSize: Stylus.FONT_SIZE_SM,
    backgroundColor: Stylus.GRAY_LIGHT
  },
  searchBar_button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 28,
    paddingVertical: Stylus.GUTTER_MINI,
    paddingLeft: Stylus.GUTTER_LESS,
    paddingRight: 0,
    fontWeight: Stylus.FONT_WEIGHT_MEDIUM,
    fontSize: Stylus.FONT_SIZE_BASE,
    marginRight: 0
  },
  searchBar_disabled: {
    color: Stylus.GRAY,
    marginRight: -100
  }
}

export default baseStyles
