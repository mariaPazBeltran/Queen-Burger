import MyContext from './MyContext'
import InitialState from './InitialState'
import React, { useReducer } from "react";
import reducer from './Reducer';


const ProviderContext = props => {
    
const [state, dispatch] = useReducer(reducer, InitialState)
    return (
      <MyContext.Provider value={{ state, dispatch }}>
        {props.children}
      </MyContext.Provider>
    );
  };

  export default ProviderContext; 