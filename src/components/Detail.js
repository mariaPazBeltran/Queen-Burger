import React, {useContext} from 'react'
import MyContext from '../states/MyContext';
import './Detail.css'

const Detail = () =>{
    const {state, dispatch} = useContext(MyContext)
  const removeItem = (item, index) => {
      let currentTotal = state.Price;
      let minusTotal = item.price;
      let newTotal = currentTotal - minusTotal;
      dispatch({
        type:'removeItems', payload:index, value:newTotal})
      }

      const sendToKitchen = () =>{
        const nameClient = state.Client
        const numberTable = state.Table
        const orders = state.Orders
        if( nameClient === "" || numberTable === ''){
           document.getElementById('validation').innerHTML= 'Llena los campos correspondietes'
           document.getElementById('validation').style.border= 'solid'
          }
       if (orders.length === 0){
          document.getElementById('validation').innerHTML= 'No has hecho ningún Pedido'
          document.getElementById('validation').style.border= 'solid'
          }
          else{
            document.getElementById('validation').innerHTML= ''
            document.getElementById('validation').style.border= 'none'
            alert('se ha enviado el pedido a la base de datos')
          }
      }
    return(
        <section>
          <div id='validation'></div>
        <div className="table-detail">
            <table>
              <thead>
                <tr>
                  <td>Producto</td>
                  <td>Precio</td>
                </tr>
              </thead>
              <tbody>
                {state.Orders.map((item, index) => (
                  <tr key={index}>
                    <td>{item.product}</td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={()=>removeItem(item, index)} >
                      Borrar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total:</td>
                  <td>${state.Price}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="sendingkitchen">
          <button onClick={()=> dispatch({
          type:'reset' })}>Nuevo</button>
          <button onClick={sendToKitchen}>Enviar</button>
          </div>
          </section>
    )
}
export default Detail;