import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createuser } from '../Slice/userSlice'
import { useNavigate } from 'react-router-dom'

function AddUser() {

    const redirect = useNavigate()

    const [newuser, setnewuser] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        phone: ""
    })

    const dispatch = useDispatch()

    const getchange = (e) => {
        setnewuser({
            ...newuser,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(newuser)
    }
    const getsubmit = (e) => {
        e.preventDefault()
        dispatch(createuser(newuser))
        redirect("/")
        setnewuser({
            id: "",
            name: "",
            email: "",
            password: "",
            phone: ""
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={getsubmit}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Enter your Name</label>
                                <input type="text" name='name' onChange={getchange} value={newuser.name} className="form-control" id="Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' onChange={getchange} value={newuser.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Enter your phone</label>
                                <input type="tel" name='phone' onChange={getchange} value={newuser.phone} className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onChange={getchange} name='password' value={newuser.password} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add user</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser
