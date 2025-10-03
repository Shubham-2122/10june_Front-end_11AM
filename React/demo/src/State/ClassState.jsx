// class inbuilt consto :- 
// this.state => define varibale
// this.setstate() => function for class

// state :- object ,singel value

import React, { Component } from 'react'
import Images from './Images';

class ClassState extends Component {
    constructor() {
        super();
        this.state = {
            name: "het patel",
            cout: 0,
            isImage: true
        }
    }
    render() {


        // let name = "het"
        // console.log(name)
        // console.log(this.state.name)
        return (
            <div>

                <h1>Hello this class State</h1>

                <h1>Hello name : {this.state.name}</h1>
                <button onClick={() => this.setState({ name: "vraj patel" })}>Change name</button>
                <button onClick={() => this.setState({ name: "shubham jadav" })}>Change name 2</button>

                <h1>Hello cout : {this.state.cout} </h1>

                <button onClick={() => this.setState({ cout: this.state.cout + 1 })}>Increment</button>
                <button onClick={() => this.setState({ cout: this.state.cout - 1 })}>Decrement</button>
                <button onClick={()=>this.setState({cout : 0})}>Zero</button> <br /> <br />
            

                <button onClick={()=> this.setState({isImage : false})}>Hide</button>
                <button onClick={()=> this.setState({isImage : true})}>Show</button>
                
                <button onClick={()=>this.setState({isImage : !this.state.isImage})}>Toggle</button>
            
                {
                    (this.state.isImage)?<Images /> : false
                }

            </div>
        )
    }
}

export default ClassState
