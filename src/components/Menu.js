import React from 'react'
import { Link } from 'react-router-dom'
 
const Menu = () =>{
  return(
    <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/works">Works</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/user/1">id1</Link></li>
      <li><Link to="/input">inputToUrl</Link></li>
    </ul>
    {/* {this.props.children} */}
  </div>
  )
}
 
export default Menu