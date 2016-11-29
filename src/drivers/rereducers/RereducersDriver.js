import _ from 'mudash'
import o from 'duxtape'
import { Driver } from '@moltres/drivers/driver'

export default class RereducersDriver extends Driver {

  createHigherOrder(state) {
    const rereducers = _.get(state, 'rereducers')
    return o.createRereducerHigherOrder(...rereducers)
  }

  createState(state, drivers) {
    return _.assoc(state, {
      rereducers: this.generateRereducers(state, drivers)
    })
  }

  generateRereducers(state, drivers) {
    return _.reduce(drivers, (rereducers, driver) => {
      if (_.isFunction(_.get(driver, 'createRereducer'))) {
        const rereducer = driver.createRereducer(state, drivers)
        if (rereducer) {
          return _.push(rereducers, rereducer)
        }
      }
      return rereducers
    }, _.im([]))
  }
}
