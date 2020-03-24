import React, {useContext} from 'react'
import Product from '../components/Product'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MyContext from '../states/MyContext'

const Menu = () =>{
    const {state} = useContext(MyContext)
    return(
      <div>
<Link to='/break'>brfas</Link>
<Link to='/lunch'>lnch</Link>
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
    )
}

export default Menu;