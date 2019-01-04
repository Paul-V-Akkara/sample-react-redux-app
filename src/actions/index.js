/*
 * action types
 */

export const ADD_LIST = 'ADD_LIST'

export function addList(heading) {
  return { type: ADD_LIST, heading }
}