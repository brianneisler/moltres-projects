import React, { Component, PropTypes } from 'react'
import { ScrollView } from 'react-native'
import { stydux } from 'react-stydux'
import baseStyles from './styles'


@stydux(
  (styles) => ({
    card_deck: styles.card_deck
  })
)
export default class CardDeck extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {}

  static defaultStyles = baseStyles

  render() {
    const { styles, children, ...other } = this.props

    // FIXME - CC: Only clone element if the child is Card component
    const childrenWithProps = React.Children.map(children,
      (child) => React.cloneElement(child, {
        isCardDeck: true,
        bordered: false
      })
    )

    return (
      <ScrollView
        {...other}
        contentContainerStyle={styles.card_deck}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        {childrenWithProps}
      </ScrollView>
    )
  }
}
