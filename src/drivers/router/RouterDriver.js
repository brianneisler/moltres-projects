import _ from 'mudash'
import React, { Children } from 'react'
import { Router } from 'react-native-router-flux'
import { Driver, select } from 'moltres'
import { connect } from 'react-redux'

const RouterWithRedux = connect()(Router)

@select({
  blueprint: blueprint => ({ scenes: _.get(blueprint, 'scenes') })
})
export default class RouterDriver extends Driver {

  renderDriver(children) {
    console.log('children:', children)
    console.log('this.state.scenes:', this.state.scenes)
    return (
      <RouterWithRedux
        scenes={this.state.scenes}>
        Children.only(children)
      </RouterWithRedux>
    )
  }
}
