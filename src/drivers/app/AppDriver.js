import _ from 'mudash'
import React, { Children } from 'react'
import { View } from 'react-native'
import { Driver, select, wrapActions } from 'moltres'
import * as actions from './actions'


@select({
  actions: wrapActions((_actions) => {
    return _.pick(_.mutable(_actions), ['initApp'])
  }),
  blueprint: blueprint => ({ app: _.get(blueprint, 'app') })
})
export default class AppDriver extends Driver {

  createActions() {
    return actions
  }

  initDriver() {
    this.state.initApp()
  }

  // renderDriver(child) {
  //   const App = this.state.app
  //   if (App) {
  //     return (
  //       <App>
  //         Children.only(child)
  //       </App>
  //     )
  //   }
  //   return <View/>
  // }
}
