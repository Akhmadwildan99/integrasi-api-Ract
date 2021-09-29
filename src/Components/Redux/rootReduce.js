import variable from "./dispatchVariable"

const globalState = {
    total: 0
  }
  // Reducer
  const rootReducer = (state = globalState, action) => {
    if(action.type === variable.plus) {
      return {
        ...state,
        total: state.total + 1
      }
    }
  
    if(action.type === variable.minus) {
      let total = 0
      if(state.total > 0) {
        total= state.total - 1
      }
  
      return {
        ...state,
        total: total 
      }
      
    }
    return state
    
}

export default rootReducer;