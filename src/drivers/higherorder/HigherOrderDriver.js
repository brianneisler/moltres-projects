import _ from 'mudash'
import { Driver } from 'moltres'
import enhancer from './enhancer'

export default class HigherOrderDriver extends Driver {

  createState(state, drivers) {
    return _.assoc(state, {
      higherOrders: this.generateHigherOrders(state, drivers)
    })
  }

  createEnhancer(state) {
    return enhancer(state)
  }

  generateHigherOrders(state, drivers) {
    return _.reduce(drivers, (higherOrders, driver) => {
      if (_.isFunction(_.get(driver, 'createHigherOrder'))) {
        const higherOrder = driver.createHigherOrder(state, drivers)
        if (_.isFunction(higherOrder)) {
          return _.push(higherOrders, higherOrder)
        }
      }
      return higherOrders
    }, _.im([]))
  }
}
