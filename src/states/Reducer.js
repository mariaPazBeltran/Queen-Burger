
function reducer(state, action) {
  switch (action.type) {
    case 'addDetail':
      return {
        ...state,
        Orders: action.payload,
        Price: action.value,
      };
    case 'removeItems':
      return {
        ...state,
        Orders: state.Orders.filter((_itemDelete, i) => i !== action.payload),
        Price: action.value,
      };
    case 'reset':
      return {
        ...state,
        Client: '',
        Table: '',
        Orders: [],
        Price: 0,
      };
    case 'getInfoClient':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      throw new Error();
  }
}
export default reducer;
