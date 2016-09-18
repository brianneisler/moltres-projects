import * as Stylus from '../styles/constants' 

const baseStyles = {}

export default baseStyles

const searchBar = {
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

export { searchBar as searchBarStyles }

const navBar = {
  navbar: {
    height: Stylus.NAV_BAR_HEIGHT,
    backgroundColor: Stylus.NAV_BAR_BG,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 20,
    paddingBottom: 0,
    paddingHorizontal: Stylus.NAV_BAR_PADDING_HORIZONTAL,
    borderBottomWidth: Stylus.NAV_BAR_BORDER_WIDTH,
    borderBottomColor: Stylus.NAV_BAR_BORDER_COLOR
  },
  navbar_title: {
    fontSize: Stylus.NAV_BAR_TITLE_FONT_SIZE,
    fontWeight: Stylus.NAV_BAR_TITLE_FONT_WEIGHT,
    textAlign: 'center'
  },
  navbar_center: {
    alignItems: 'center',
    justifyContent:'center'
  },
  navbar_leftButton: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderWidth: 0
  },
  navbar_leftTitle: {
    fontSize: Stylus.NAV_BAR_FONT_SIZE,
    color: Stylus.NAV_BAR_BUTTON_COLOR
  },
  navbar_right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  navbar_rightTitle: {
    fontSize: Stylus.NAV_BAR_FONT_SIZE
  }
}

export { navBar as navBarStyles }
