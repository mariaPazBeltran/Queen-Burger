import React, {useContext, useEffect} from 'react'
import Product from '../components/Product'
import {useHistory,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Style.css'
import MyContext from '../states/MyContext'
import Detail from '../components/Detail';

const Menu = () =>{
  const {state, dispatch} = useContext(MyContext)
  let history = useHistory();
    /*Al cargar la vista del menú, primero se 
      visualizaran las opciones del desayuno */
  useEffect(() => {
    history.push("/break");
  },[history]);

/**Mostrar el detalle de un pedido */
  const clickItem = e => {
    let products = state.Orders;
    products.push({
      product: e.product,
      price: e.price
    });
    /* se recupera el estado "price" que al comienzo vale 0 y se le suman los 
    precios de los pedidos para obtener el total del pedido*/
    let currentTotal = state.Price;
    let sumTotal = e.price;
    let newTotal = currentTotal + sumTotal;
    dispatch({
      type:'addDetail', payload:products, value:newTotal})
    }
 
  return(
    <div id='menu-container'>
      <Detail/>
      <div id='options'>
        <button className='menu-options'>
          <Link to='/Break'>Breakfast</Link>
        </button>
        <button className='menu-options'>
          <Link to='/Lunch'>Lunch</Link>
        </button>
        <div id='products_buttons'>
        <Switch>
          <Route path="/Break">
            {state.Products.Breakfast.map((productInfo, index)=>{
              return <Product key={index} infoproduct={productInfo} onClick={clickItem}/>
            })}
          </Route>
          <Route path="/Lunch">
            {state.Products.Lunch.map((productInfo, index)=>{
              return <Product key={index} infoproduct={productInfo} onClick={clickItem}/>
            })}
          </Route>
        </Switch>
        </div>
      </div>
    </div>
    )
}

export default Menu;