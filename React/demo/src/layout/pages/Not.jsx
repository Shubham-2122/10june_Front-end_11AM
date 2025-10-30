import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Not() {

    const redirect = useNavigate()

    const backto =()=>{
        redirect("/")
    }

  return (
    <div>
      <h1 className='p-5 bg-danger text-center text-light'>Hello this 404 Not Found Page</h1>
      <Link to="/" className='btn btn-success'>Back to Home</Link>
      <button onClick={backto} className='btn mx-2 btn-info'>Back to Home Page</button>
    </div>
  )
}

export default Not
