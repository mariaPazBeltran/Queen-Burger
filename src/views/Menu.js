import React, {useContext, useEffect} from 'react'
import Product from '../components/Product'
import {useHistory,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Style.css'
import MyContext from '../states/MyContext'

const Menu = () =>{
    const {state} = useContext(MyContext)
    let history = useHistory();
    useEffect(() => {
      history.push("/break");
    },[history]);
    return(
      <div>
<button className='menu-options'><Link to='/break'>brfas</Link></button>
<button className='menu-options'><Link to='/lunch'>lnch</Link></button>
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