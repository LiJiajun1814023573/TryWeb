  const initialState = []
  initialState[0]= {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
  
const todos = (state = initialState, action)=> {
    switch (action.type) {
      case 'ADD':
        return [
          ...state,
          {
            text: action.text,
            completed: false,
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          }
        ]
  
      case 'DELETE':
        return state.filter(todo =>
          todo.id !== action.id
        )
  
      case 'EDIT':
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, text: action.text } :
            todo
        )
  
      case 'COMPLETE':
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, completed: !todo.completed } :
            todo
        )
  
      case 'COMPLETE_ALL':
        const areAllMarked = state.every(todo => todo.completed)
        return state.map(todo => ({
          ...todo,
          completed: !areAllMarked
        }))
  
      case 'CLEAR':
        return state.filter(todo => todo.completed === false)
  
      default:
        return state
    }
  }