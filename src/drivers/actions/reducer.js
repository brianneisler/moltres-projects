import o from 'duxtape'
import { handleActions } from 'redux-actions'

export default o.mapReducers({
  actions: handleActions({
    [SET_ACTIONS]: (state, action) => action.payload,
    [UPDATE_ACTIONS]: (state, action) => _.assoc(state, action.payload)
  })
})
