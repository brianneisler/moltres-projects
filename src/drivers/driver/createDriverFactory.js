import _ from 'mudash'
import { warning } from 'moltres'
import isDriverClass from './isDriverClass'

export default function createDriverFactory() {

  function factory(module, engine) {
    const driverFactory = _.get(module, 'default')
    const info = _.get(module, 'info')
    let driver = null
    if (_.isFunction(driverFactory)) {
      if (isDriverClass(driverFactory)) {
        driver = new driverFactory(info, { engine })
      } else {
        driver = driverFactory(info, { engine })
      }
    } else if (_.isObject(driverFactory)) {
      driver = driverFactory
    }
    if (!driver) {
      warning('Driver did not declare an entry point')
    }
    return driver
  }
  return {
    factory
  }
}
