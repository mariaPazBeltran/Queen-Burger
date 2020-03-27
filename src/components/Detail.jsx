/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import MyContext from '../states/MyContext';
import './Detail.css';
import db from '../Data/config-firebase';

const Detail = () => {
  const { state, dispatch } = useContext(MyContext);
  const removeItem = (item, index) => {
    const currentTotal = state.Price;
    const minusTotal = item.price;
    const newTotal = currentTotal - minusTotal;
    dispatch({ type: 'removeItems', payload: index, value: newTotal });
  };

  const sendToKitchen = () => {
    const nameClient = state.Client;
    const numberTable = state.Table;
    const orders = state.Orders;
    if (nameClient === '' || numberTable === '') {
      document.getElementById('validation').innerHTML = 'Llena los campos correspondietes';
      document.getElementById('validation').style.border = 'solid';
    } else if (orders.length === 0) {
      document.getElementById('validation').innerHTML = 'No has hecho ningún Pedido';
      document.getElementById('validation').style.border = 'solid';
    } else {
      document.getElementById('validation').innerHTML = '';
      document.getElementById('validation').style.border = 'none';
      const init = new Date();
      const timeInit = `${init.getHours()}:${init.getMinutes()}`;
      db.collection('orders')
        .add({
          mesa: state.Table,
          cliente: state.Client,
          estado: 'pendiente',
          orden: state.Orders,
          total: state.Price,
          inicio: timeInit,
          termino: '',
        })
        .then((docRef) => {
          // eslint-disable-next-line no-console
          console.log('Document successfully written!', docRef.id);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Error writing document: ', error);
        });
    }
  };
  return (
    <section>
      <div id="validation" />
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
                  <button type="button" onClick={() => removeItem(item, index)}>
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total:</td>
              <td>
                $
                {state.Price}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="sendingkitchen">
        <button type="button" onClick={() => dispatch({ type: 'reset' })}>
          Nuevo
        </button>
        <button type="button" onClick={sendToKitchen}>Enviar</button>
      </div>
    </section>
  );
};
export default Detail;
