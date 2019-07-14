import React from 'react'
//We need the Switch and Route components
import { Switch, Route } from 'react-router-dom'
//import the components that we want to route to.These are the Home, Works and About components
import Home from './Home'
import Works from './Works'
import About from './About'
import id from './id'
import input from './inputToUrl'
import showInput from './showInput'
//We use the <Switch> component to group our <Route> components. Switch looks for all the Routes and then returns the first matching one.

const Content = () =>{
    return(
      <Switch>
{/* the extra exact prop is required for the Home component, which is the main directory. */}
        <Route exact path="/" component={Home}/>
        <Route path="/works" component={Works}/>
        <Route path="/about" component={About}/>
        <Route path="/user/:id" component={id}/>
        <Route path="/input" component={input}/>
        <Route path="/showInput" component={showInput}/>
        
      </Switch>
    )
}
   
  export default Content


