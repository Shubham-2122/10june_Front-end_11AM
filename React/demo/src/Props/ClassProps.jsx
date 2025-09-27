// class :- class in constro super
// props :- props type

import React, { Component } from 'react'

export class ClassProps extends Component {
    constructor(props){
        super(props);
        this.data = props
    }
    render() {
        return (
            
                <div className="col-md-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={this.data.img} style={{height:"250px"}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.data.title}</h5>
                            <p className="card-text">{this.data.desc}</p>
                            <button className='btn btn-primary'>ADD CARD</button>
                        </div>
                    </div>
                </div>
        
        )
    }
}

export default ClassProps
