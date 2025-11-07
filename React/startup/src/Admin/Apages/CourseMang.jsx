import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import { Slide, toast } from 'react-toastify'


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

    const [single, setsingle] = useState({
        id: "",
        cname: "",
        img: "",
        date: "",
        desc: "",
        author: "",
        title: ""
    })

    // single product
    const getsingle = async (id) => {
        const res = await axios.get(`http://localhost:3000/courses/${id}`)
        console.log(res.data)
        setsingle(res.data)
        toast.success('view data', { transition: Slide });

    }

    // delete product
    const deletecourse = async (id) => {
        const res = await axios.delete(`http://localhost:3000/courses/${id}`)
        console.log(res.data)
        fetchdata()
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
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getsingle(data.id)}>View</button>
                                            <button className='btn btn-success mx-2'>update</button>
                                            <button className='btn btn-danger' onClick={() => deletecourse(data.id)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="col-md-8 mx-auto wow slideInUp" data-wow-delay="0.1s">
                                    <div className="blog-item bg-light rounded overflow-hidden">
                                        <div className="blog-img position-relative overflow-hidden">
                                            <img className="img-fluid" src={single.img} alt />
                                            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>{single.cname}</a>
                                        </div>
                                        <div className="p-4">
                                            <div className="d-flex mb-3">
                                                <small className="me-3"><i className="far fa-user text-primary me-2" />{single.author}</small>
                                                <small><i className="far fa-calendar-alt text-primary me-2" />{single.date}</small>
                                            </div>
                                            <h4 className="mb-3">{single.title}</h4>
                                            <p>{single.desc}</p>
                                            <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CourseMang
