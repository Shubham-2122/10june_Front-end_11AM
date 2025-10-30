import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res.data)
        setuser(res.data)
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">addresss</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index)=>{
                            const {name,id,email,address} = data
                   
                            return(
                                <tr key={index}>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{address.city}</td>
                                    <td>{id}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Axios
