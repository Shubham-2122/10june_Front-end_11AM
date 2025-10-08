import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserCard() {

    const [card, setcard] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async (e) => {
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log(res.data)
        setcard(res.data)
    }

    return (
        <div>
            <div className="container">
                <div className="row">

                    {
                        card && card.map((data, index) => {
                            const {id,title,description,image} = data
                            // console.log(data)
                            return (
                                <div key={index} className="col-md-4">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{id}</h5>
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{description.slice(0, 100)}...</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default UserCard
