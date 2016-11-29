import _ from 'mudash'
import { warning } from 'moltres'

export default function createAppFactory() {

  function factory({engine, module}) {
    const appFactory = _.get(module, 'default')
    const info = _.get(module, 'info')
    let app = null
    if (_.isFunction(appFactory)) {
      app = appFactory({ engine, info, module })
    } else if (_.isObject(appFactory)) {
      app = appFactory
    }
    if (!app) {
      warning('App did not declare an entry point')
    }
    return app
  }
  return {
    factory
  }
}
