import * as Stylus from '../styles/constants' 

const baseStyles = {
  card: {
    position: 'relative',
    backgroundColor: Stylus.FULL_WHITE,
    borderWidth: Stylus.CARD_BORDER_WIDTH,
    borderRadius: Stylus.CARD_BORDER_RADIUS,
    borderColor: Stylus.CARD_BORDER_COLOR,
    marginBottom: Stylus.GUTTER_LESS
  },
  card_deck: {
    flex: 1,
    flexWrap: 'nowrap',
    // margin balancing
    marginLeft: -Stylus.GUTTER
  },
  card_block: {
    paddingHorizontal: Stylus.CARD_PADDING,
    paddingVertical: Stylus.CARD_PADDING
  },
  card_footer: {
    paddingHorizontal: Stylus.CARD_PADDING,
    paddingVertical: Stylus.CARD_PADDING
  },
  card_header: {
    paddingHorizontal: Stylus.CARD_PADDING,
    paddingVertical: Stylus.CARD_PADDING
  },
  card_image: {
    height: 200,
    width: null,
    backgroundColor: Stylus.CARD_BORDER_COLOR,
    borderRadius: Stylus.CARD_BORDER_RADIUS
  },
  card_text: {
    marginBottom: Stylus.GUTTER_LESS,
    fontSize: Stylus.FONT_SIZE_SM,
    color: Stylus.FULL_BLACK
  },
  card_title: {
    marginBottom: Stylus.GUTTER_MINI,
    fontWeight: Stylus.FONT_WEIGHT_MEDIUM
  }
}

export default baseStyles
