import * as Stylus from '../styles/constants'

const baseStyles = {
  listItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Stylus.GUTTER,
    paddingVertical: Stylus.GUTTER
  },
  listItem_leftIcon: {
    alignSelf: 'flex-start',
    marginRight: Stylus.GUTTER,
    flex: 0
  },
  listItem_rightIcon: {
    flex: 0,
    justifyContent: 'center',
    marginLeft: Stylus.GUTTER
  },
  listItem_body: {
    flex: 1
  },
  listItem_heading: {
    fontSize: Stylus.LIST_ITEM_HEADING_FONT_SIZE,
    color: Stylus.LIST_ITEM_HEADING_COLOR,
    marginBottom: Stylus.GUTTER_MINI
  },
  listItem_text: {
    fontSize: Stylus.LIST_ITEM_TEXT_FONT_SIZE,
    color: Stylus.LIST_ITEM_TEXT_COLOR
  }
}

export default baseStyles
