import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { stydux } from 'react-stydux'
import _ from 'mudash'

import baseStyles from './styles'
import { CARD_DECK_CARD_WIDTH, CARD_DECK_CARD_MARGIN_LEFT } from '../styles/constants'

const propStyles = (props) => {
  const { isCardDeck, bordered, rounded } = props
  console.log(bordered, rounded)
  const styles = { card: {} }

  if (isCardDeck) {
    styles.card.width = CARD_DECK_CARD_WIDTH
    styles.card.marginLeft = CARD_DECK_CARD_MARGIN_LEFT
  }

  if (!bordered) {
    styles.card.borderWidth = 0
  }

  if (!rounded) {
    styles.card.borderRadius = 0
  }

  return styles
}

@stydux(
  (styles) => ({
    card: styles.card
  }), (defaultStyles, mappedStyles, inlineStyles, props) => _.merge(
    {},
    defaultStyles,
    mappedStyles,
    inlineStyles,
    propStyles(props)
  )
)
export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    bordered: PropTypes.bool,
    rounded: PropTypes.bool
  }

  static defaultProps = {
    bordered: true,
    rounded: true
  }

  static defaultStyles = baseStyles

  render() {
    const { styles, children, bordered, rounded } = this.props
    console.log(bordered, rounded)
    return (
      <View style={styles.card}>
        {children}
      </View>
    )
  }
}
