import InitialState from "./InitialState";

function reducer(state, action) {
    switch (action.type) {
      case 'addDetail':

        return{
          ...state,
          Orders: action.payload,
          Price: action.value
        }
      case 'reset':
        return InitialState
      default:
        throw new Error();
    }
  }
  export default reducer
