import _ from 'mudash'
import React, { Children } from 'react'
import { Router } from 'react-native-router-flux'
import { Driver, select } from 'moltres'
import { connect } from 'react-redux'

const RouterWithRedux = connect()(Router)

@select({
  blueprint: (blueprint) => ({ scenes: _.get(blueprint, 'scenes') })
})
export default class RouterDriver extends Driver {

  renderDriver(children) {
    return (
      <RouterWithRedux
        scenes={this.state.scenes}>
        Children.only(children)
      </RouterWithRedux>
    )
  }
}