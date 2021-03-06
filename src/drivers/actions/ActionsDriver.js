import _ from 'mudash'
import { Driver } from '@moltres/drivers/driver'
import * as actions from './actions'
import reducer from './reducer'

export default class ActionsDriver extends Driver {

  createActions() {
    return actions
  }

  createReducer() {
    return reducer
  }

  createState(state, drivers) {
    return _.assoc(state, {
      actions: this.generateActions(state, drivers)
    })
  }

  generateActions(state, drivers) {
    return _.reduce(drivers, (reduction, driver) => {
      if (_.isFunction(_.get(driver, 'createActions'))) {
        return _.assoc(reduction, driver.createActions(state, drivers))
      }
      return reduction
    }, _.im({}))
  }
}
