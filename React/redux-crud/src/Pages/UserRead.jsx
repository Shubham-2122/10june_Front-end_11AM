import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser, readdata } from '../Slice/userSlice'

function UserRead() {

    const { users, loading } = useSelector((data) => data.user)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(readdata())
    }, [])
    console.log(users)
    console.log(loading)

    return (
        <div>
            <h1>Hello this User data</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((data, index) => {
                                console.log(data)
                                return (<tr>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <button className='btn btn-info'>View</button>
                                        <button className='btn btn-success mx-2'>edit</button>
                                        <button className='btn btn-danger' onClick={()=>dispatch(deleteuser(data.id))}>delete</button>
                                    </td>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default UserRead
