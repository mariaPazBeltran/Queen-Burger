
function reducer(state, action) {
    switch (action.type) {
      case 'addDetail':
        return{
          ...state,
          Orders: action.payload,
          Price: action.value
        }
      case 'removeItems':
        let itemDelete = state.Orders;
        const index = action.payload
      return{
        ...state,
        Orders: itemDelete.filter((itemDelete, i) => {
          return i !== index
        }),
        Price: action.value
      }
      case 'reset':
        return {
          ...state,
          Client: '',
          Table: 0,
          Orders: [],
          Price: 0,
        }
        case 'getInfoClient':
          return{
            ...state,
            [action.field]: action.value
          }
      default:
        throw new Error();
    }
  }
  export default reducer
