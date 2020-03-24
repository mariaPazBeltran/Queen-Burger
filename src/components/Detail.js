import React, {useContext} from 'react'
import MyContext from '../states/MyContext';
import './Detail.css'

const Detail = () =>{
    const {state} = useContext(MyContext)
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
                {state.Orders.map((e, index) => (
                  <tr key={index}>
                    <td>{e.product}</td>
                    <td>{e.price}</td>
                    <td>
                      <button >
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