import { combineReducers } from 'redux'
import {
  ADD_LIST,
} from '../actions'
function lists(state = [], action) {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...state,
        {
          id: `list-${state.length + 1}`,
          heading: action.heading,
          cards: []
        }
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
    lists,
})

export default todoApp