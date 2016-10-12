import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { stydux } from 'react-stydux'
import Bar from '../Bar'
import Button from '../Button'
import Chevron from '../Chevron'
import Grid from '../Grid'
import Row from '../Row'
import { Actions } from 'react-native-router-flux'
import baseStyles from './styles'


@stydux(
  (styles) => ({
    navbar: styles.navbar,
    navbar_title: styles.navbar_title,
    navbar_left: styles.navbar_left,
    navbar_right: styles.navbar_right,
    navbar_center: styles.navbar_center,
    navbar_leftTitle: styles.navbar_leftTitle,
    navbar_rightTitle: styles.navbar_rightTitle
  })
)
export default class NavBar extends Component {

  static propTypes = {
    renderLeft: PropTypes.func,
    renderRight: PropTypes.func
  }
  static defaultProps = {}
  static defaultStyles = baseStyles

  constructor(props) {
    super(props)
    this.renderLeft = this.renderLeft.bind(this)
  }

  renderBackButton() {
    const state = this.props.navigationState
    const styles = this.props.styles

    if (state.index === 0) {
      return null
    }
    return (
      <Button styles={{button: styles.navbar_leftButton}} onPress={Actions.pop}>
        <Chevron size={20} />
        <Text style={styles.navbar_leftTitle}>
          Back
        </Text>
      </Button>
    )
  }

  renderLeft() {
    const { renderLeft } = this.props
    return (
      renderLeft ?
        renderLeft() : this.renderBackButton()
    )
  }

  renderRight() {
    const { renderRight } = this.props
    return (
      renderRight ? renderRight() : <View></View>
    )
  }

  render() {
    const { styles, title } = this.props
    return (
      <Bar style={styles.navbar}>
        <Row>
          <Grid size={1}>
            {this.renderLeft()}
          </Grid>
          <Grid size={4} style={styles.navbar_center}>
            <Text style={styles.navbar_title}>{title}</Text>
          </Grid>
          <Grid size={1} style={styles.navbar_right}>
            {this.renderRight()}
          </Grid>
        </Row>
      </Bar>
    )
  }
}
