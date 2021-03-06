//TODO BRN: This might make more sense as part of magmar

import _ from 'mudash'
import { Driver } from '@moltres/drivers/driver'

export default class GraphQLDriver extends Driver {

  createState(state, drivers) {
    return _.assoc(state, {
      graphs: this.generateGraphs(state, drivers)
    })
  }

  generateGraphs(state, drivers) {
    return _.reduce(drivers, (graphs, driver) => {
      if (_.isFunction(_.get(driver, 'createGraphs'))) {
        return _.assoc(graphs, driver.createGraphs(state, drivers))
      }
      return graphs
    }, _.im({}))
  }
}
