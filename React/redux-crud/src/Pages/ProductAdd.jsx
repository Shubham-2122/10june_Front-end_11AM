import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { procreate } from '../Slice/productSlice'
import { useNavigate } from 'react-router-dom'

function ProductAdd() {

    const redirect = useNavigate()

    const [pro, setpro] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        image: ""
    })

    const dispatch = useDispatch()

    const getchange = (e) => {
        setpro({
            ...pro,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(pro)
    }

    const Getproduct = (e) => {
        e.preventDefault()
        dispatch(procreate(pro))
        redirect("/pro")
        setpro({
            id: "",
            title: "",
            price: "",
            description: "",
            image: ""
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={Getproduct}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Enter your Name</label>
                                <input type="text" value={pro.title} onChange={getchange} name='title' className="form-control" id="Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Enter your Price</label>
                                <input type="text" value={pro.price} onChange={getchange} name='price' className="form-control" id="price" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Image" className="form-label">Enter your Image</label>
                                <input type="url" value={pro.image} onChange={getchange} name='image' className="form-control" id="Image" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">Enter your desc</label>
                                <textarea name="description" onChange={getchange} value={pro.description} className='form-control' id="desc"></textarea>
                            </div>


                            <button type="submit" className="btn btn-primary">Add user</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAdd
