import _ from 'mudash'
import o from 'duxtape'
import { handleActions } from 'redux-actions'
import { setActions, updateActions } from './actions'

export default o.mapReducers({
  actions: handleActions({
    [setActions]: (state, action) => action.payload,
    [updateActions]: (state, action) => _.assoc(state, action.payload)
  })
})
