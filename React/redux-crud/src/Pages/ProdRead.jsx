import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { prodelete, proRead } from '../Slice/productSlice'

function ProdRead() {

    const { products, loading } = useSelector((state) => state.product)

    console.log(loading)
    console.log(products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(proRead())
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                   {
                    products && products.map((data,index)=>{
                        return(
                             <div className="col-md-4" key={index}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={data.image} style={{height:"250px"}} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                 <h5 className="card-title">{data.price}</h5>
                                <p className="card-text">{data.description.slice(0,100)}</p>
                                <button className='btn btn-danger me-2' onClick={()=>dispatch(prodelete(data.id))}>Delete</button>
                                <button className='btn btn-success'>Edit</button>
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

export default ProdRead
