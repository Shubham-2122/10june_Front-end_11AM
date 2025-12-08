import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from '../Slice/userSlice'

function EditU() {

    const redirect = useNavigate()
    const { id } = useParams()
    console.log(id)

    const { users, loading } = useSelector((state) => state.user)
    // console.log(users)

    const [edit, setedit] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        phone: ""
    })

    useEffect(() => {
        const singleuser = users.filter((data, index) => data.id === id)
        // console.log(singleuser[0])
        setedit(singleuser[0])
    }, [])

    const getchange = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
        // console.log(edit)
    }

    const dispatch = useDispatch()

    const getsumbit = (e) => {
        e.preventDefault()
        dispatch(updateuser(edit))
        redirect("/")
    }


    return (
        <div>
            <div className="container">
                <h1>Edit user Data</h1>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form >
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Enter your Name</label>
                                <input type="text" name='name' onChange={getchange} value={edit && edit.name} className="form-control" id="Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={edit && edit.email} onChange={getchange} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Enter your phone</label>
                                <input type="tel" value={edit && edit.phone} onChange={getchange} name='phone' className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={edit && edit.password} onChange={getchange} name='password' className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={getsumbit}>Edit user</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditU
