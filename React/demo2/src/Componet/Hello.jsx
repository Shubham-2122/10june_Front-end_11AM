import React, { Component } from "react";

export default class Hello extends Component{
    render(){
        return(
           <div>
             <h1 className="font">hello this class component</h1>
             <h1 className="text-3xl font2 bg-amber-300 pad">hello this class component 2</h1> 

             <button className="btn">Add data</button>
              <button className="btn2">Add data</button>
           </div>
        )
    }
}
