import * as Stylus from '../styles/constants' 

const baseStyles = {
  progressBar: {
    backgroundColor: Stylus.PROGRESS_BAR_BG,
    height: Stylus.PROGRESS_BAR_HEIGHT,
    alignSelf: 'stretch',
    position: 'relative'
  },
  progressBar_progress: {
    backgroundColor: Stylus.PROGRESS_BAR_PROGRESS_COLOR,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
  }
}

export default baseStyles
