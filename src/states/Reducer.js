import InitialState from "./InitialState";

function reducer(state, action) {
    switch (action.type) {
      
      case 'reset':
        return InitialState
      default:
        throw new Error();
    }
  }
  export default reducer
