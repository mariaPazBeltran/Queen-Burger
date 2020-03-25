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
    return(
        <section>
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
          <button>Enviar</button>
          </div>
          </section>
    )
}
export default Detail;