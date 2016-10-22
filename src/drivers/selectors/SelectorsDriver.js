import _ from 'mudash'
import o from 'duxtape'
import { Driver } from 'moltres'

export default class SelectorsDriver extends Driver {

  createMiddleware(state) {
    return o.createSelectorMiddleware(_.get(state, 'selectorEngine'))
  }

  createState(state, drivers) {
    return _.assoc(state, {
      selectorEngine: o.createSelectorEngine()
    })
  }
}
