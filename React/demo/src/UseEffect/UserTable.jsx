import React, { useEffect, useState } from 'react'

function UserTable() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                console.log(data)
                setuser(data)
            })
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">name</th>
                        <th scope="col">Email</th>
                        <th scope="col">city</th>
                        <th scope="col">company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data, index) => {
                            // console.log(data)
                            console.log(index)
                            return (
                                <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address.city}</td>
                                    <td>{data.company.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default UserTable
