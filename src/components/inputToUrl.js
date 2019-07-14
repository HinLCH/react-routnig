import React from 'react'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import showInput from './showInput';
class input extends React.Component{
    constructor(){
        super()
        this.state={
            Input:''
        }
        this.handleInput=this.handleInput.bind(this)
    }
    handleInput(event){
        this.setState({
          [event.target.name]: event.target.value
        })
        console.log("inputing",event.target.value)
    }
    render () {   
        
        return (
              <div>
                <form onSubmit={this.handleInput} >
                    <input type="text" name="Input" value={this.state.Input} onChange={this.handleInput}/><br/>
                    <button>
                        <Link to="/showInput">
                            submit
                        </Link>
                    </button>
                  
                </form>
                {showInput}
              </div>           
        );
      }
}
export default input