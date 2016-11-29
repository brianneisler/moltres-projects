import _ from 'mudash'
import { Driver, select, wrapActions } from '@moltres/drivers/driver'
import * as actions from './actions'
import reducer from './reducer'
import saga from './sagas'


@select({
  actions: wrapActions((_actions) => {
    return _.pick(_.mutable(_actions), ['awaitApp'])
  })
})
export default class AppDriver extends Driver {

  constructor(info, context) {
    super(info, context)
    this.engine = context.engine
  }

  createActions() {
    return actions
  }

  createReducer() {
    return reducer
  }

  createSaga() {
    return saga
  }

  init() {
    this.state.awaitApp()
  }
}
