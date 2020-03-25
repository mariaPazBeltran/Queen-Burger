import React, { useContext } from "react";
import "./Inputclient.css";
import MyContext from "../states/MyContext";
//este elemento capta el nombre del cliente y numero de mesa
const Inputclient = () => {
 const {state, dispatch} = useContext(MyContext)
 const getInfo = info => {
    dispatch({
        type:'getInfoClient', field:info.id, value:info.value })
  };
    return (
    <div className="input-container">
  <div>
    <label from="client" >Cliente </label>
    <input value={state.Client} type="text" id="Client" onChange={(info)=>getInfo(info.target)} />
    </div>
  <div>
    <label from="table">N° de Mesa </label>
    <input value={state.Table} type="number" id="Table"  onChange={(info)=>getInfo(info.target)}/> </div>
    </div>
    )
}

export default Inputclient;
