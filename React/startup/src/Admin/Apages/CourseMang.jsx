import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'

function CourseMang() {

    const [course, setcourse] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/courses")
        console.log(res.data)
        setcourse(res.data)
    }

    return (
        <div>
            <Aheader title="Course Mangment" data="Course" />

            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">cname</th>
                            <th scope="col">author</th>
                            <th scope="col">date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            course && course.map((data, index) => {
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.cname}</td>
                                        <td>{data.author}</td>
                                        <td>{data.date}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button  className='btn btn-success mx-2'>update</button>
                                            <button  className='btn btn-danger'>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default CourseMang
