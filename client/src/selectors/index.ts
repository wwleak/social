//import { createSelector } from 'reselect';

export const authErrorSelector = (state) => state.auth.error

export const authTokenSelector = (state) => state.auth.token

export const authSelector = (state) => state.auth.authenticated

export const registeredSelector = (state) => state.register.registeredSelector

export const registerErrorSelector = (state) => state.register.error 

export const userUpdatedSelector = (state) => state.users.updated

/* const getTodos = (state) => state.todos

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }
) */