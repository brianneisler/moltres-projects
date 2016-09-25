import _ from 'mudash'
import React, { Children } from 'react'
import { Actions, Router, Scene } from 'react-native-router-flux'
import { Driver, select } from 'moltres'
import { connect } from 'react-redux'

const RouterWithRedux = connect()(Router)

@select({
  app: (app) => ({ scenes: _.get(app, 'scenes') })
})
export default class RouterDriver extends Driver {

  renderDriver(children) {
    console.log('this.state:', this.state)
    return (
      <RouterWithRedux
        scenes={this.state.scenes}>
        {Children.only(children)}
      </RouterWithRedux>
    )
  }
}
