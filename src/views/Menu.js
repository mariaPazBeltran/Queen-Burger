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
    const {state} = useContext(MyContext)
    let history = useHistory();
    /*Al cargar la vista del menú, primero se 
      visualizaran las opciones del desayuno
     */
    useEffect(() => {
      history.push("/break");
    },[history]);

    return(
      <div id='menu-container'>
        <Detail/>
      <div id='options'>
<button className='menu-options'><Link to='/break'>Breakfast</Link></button>
<button className='menu-options'><Link to='/lunch'>Lunch</Link></button>
<div id='products_buttons'>
<Switch>
<Route path="/break">
{console.log(state.Products.Breakfast)}
           {state.Products.Breakfast.map((productInfo, index)=>{
               return <Product key={index} infoproduct={productInfo}/>
           })}
</Route>
<Route path="/lunch">
  
{state.Products.Lunch.map((productInfo, index)=>{
               return <Product key={index} infoproduct={productInfo}/>
           })}
</Route>
</Switch>
</div>
      </div>
      </div>
    )
}

export default Menu;