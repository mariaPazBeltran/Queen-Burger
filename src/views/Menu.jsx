/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect } from 'react';
import {
  useHistory,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Product from '../components/Product';
import './Style.css';
import MyContext from '../states/MyContext';
import Detail from '../components/Detail';
import Inputclient from '../components/Inputclient';

const Menu = () => {
  const { state, dispatch } = useContext(MyContext);
  const history = useHistory();
  /* Al cargar la vista del menú, primero se
      visualizaran las opciones del desayuno */
  useEffect(() => {
    history.push('/break');
  }, [history]);
  /** Mostrar el detalle de un pedido */
  const clickItem = (e) => {
    const products = state.Orders;
    products.push({
      product: e.product,
      price: e.price,
    });
    /* se recupera el estado "price" que al comienzo vale 0 y se le suman los precios de los
     pedidos para obtener el total del pedido */
    const currentTotal = state.Price;
    const sumTotal = e.price;
    const newTotal = currentTotal + sumTotal;
    dispatch({ type: 'addDetail', payload: products, value: newTotal });
  };
  return (
    <div id="menu-container">
      <div id="detail_info">
        <Inputclient />
        <Detail />
      </div>
      <div id="options">
        <button type="button" className="menu-options">
          <Link to="/Break">Breakfast</Link>
        </button>
        <button type="button" className="menu-options">
          <Link to="/Lunch">Lunch</Link>
        </button>
        <div id="products_buttons">
          <Switch>
            <Route path="/Break">
              {state.Products.Breakfast.map((productInfo, index) => (
                <Product
                  key={index}
                  infoproduct={productInfo}
                  onClick={clickItem}
                />
              ))}
            </Route>
            <Route path="/Lunch">
              {state.Products.Lunch.map((productInfo, index) => (
                <Product
                  key={index}
                  infoproduct={productInfo}
                  onClick={clickItem}
                />
              ))}
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Menu;
