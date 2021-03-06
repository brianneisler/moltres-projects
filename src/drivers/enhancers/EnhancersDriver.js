import _ from 'mudash'
import { Driver } from '@moltres/drivers/driver'

export default class EnhancersDriver extends Driver {

  composeEnhancer(enhancer, state) {
    const enhancers = _.get(state, 'enhancers')
    return _.compose(..._.reverse(enhancers), enhancer)
  }

  createState(state, drivers) {
    return _.assoc(state, {
      enhancers: this.generateEnhancers(state, drivers)
    })
  }

  generateEnhancers(state, drivers) {
    return _.reduce(drivers, (enhancers, driver) => {
      if (_.isFunction(_.get(driver, 'createEnhancer'))) {
        const enhancer = driver.createEnhancer(state, drivers)
        if (_.isFunction(enhancer)) {
          return _.push(enhancers, enhancer)
        }
      }
      return enhancers
    }, _.im([]))
  }
}
