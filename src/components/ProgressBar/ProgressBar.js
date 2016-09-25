import React, { Component, PropTypes } from 'react'
import { View, Dimensions } from 'react-native'
import { stydux } from 'react-stydux'
import _ from 'mudash'
import baseStyles from './styles'


const propStyles = (props) => {
  const { size, tintColor } = props
  const styles = {
    progressBar: {},
    progressBar_progress: {}
  }

  if (tintColor) {
    styles.progressBar_progress.backgroundColor = tintColor
  }
  if (size) {
    styles.progressBar.height = size
  }
  return styles
}

@stydux(
  (styles) => ({
    progressBar: styles.progressBar,
    progressBar_progress: styles.progressBar_progress
  }),
  (defaultStyles, mappedStyles, inlineStyles, props) => _.merge(
    {},
    defaultStyles,
    mappedStyles,
    inlineStyles,
    propStyles(props)
  )
)
export default class ProgressBar extends Component {

  static propTypes = {
    progress: PropTypes.number,
    size: PropTypes.number,
    tintColor: PropTypes.string
  }
  static defaultProps = {
    progress: 0
  }
  static defaultStyles = baseStyles

  constructor(props) {
    super(props)
    this.state = {
      progress: 0
    }
  }

  componentDidMount() {
    this.setState({
      progress: this.props.progress
    })
  }

  render() {
    const { styles } = this.props
    const { width } = Dimensions.get('window')
    return (
      <View style={styles.progressBar}>
        <View style={[
          styles.progressBar_progress,
          {right: width - (width * this.state.progress/100)}
        ]}></View>
      </View>
    )
  }
}
