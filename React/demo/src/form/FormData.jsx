import React, { useState } from 'react'

function FormData() {

    const [name,setname] = useState("")
    const [email,setemail] =useState("")
    const [phone,setphone] = useState("")
    const [password,setpassword] = useState("")



    return (
        <div className='container'>
           <div className="col-md-6 mx-auto">
             <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter your name</label>
                    <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)} value={name} id="name" aria-describedby="emailHelp" />             
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>setemail(e.target.value)} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                 <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Enter your phone</label>
                    <input type="tel" className="form-control" onChange={(e)=>setphone(e.target.value)} value={phone} id="phone" aria-describedby="emailHelp" />             
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e)=>setpassword(e.target.value)} value={password} id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
           </div>

        </div>
    )
}

export default FormData
