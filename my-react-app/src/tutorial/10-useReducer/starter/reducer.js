import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions'
import { data } from '../../../data'
export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] }
    case REMOVE_ITEM: {
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload.id
      )
      return { ...state, people: newPeople }
    }
    case RESET_LIST:
      return { ...state, people: data }
    default:
      throw new Error(`No matching "${action.type}" - action type`)
  }
}
