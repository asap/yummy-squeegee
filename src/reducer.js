import { combineReducers } from 'redux'
import { REQUEST_AWWZ, RECEIVE_AWWZ, SELECT_AWW } from './actions'

function awwz(state = {
  items: []
}, action) {
  switch (action.type) {
    case RECEIVE_AWWZ:
      return Object.assign({}, state, {
        items: action.awwz,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function currentAww(state = {}, action) {
  switch (action.type) {
    case RECEIVE_AWWZ:
      return action.currentAww

    case SELECT_AWW:
      return action.aww
    default:
      return state
  }
}

const rootReducer = combineReducers({
  awwz,
  currentAww
})

export default rootReducer
