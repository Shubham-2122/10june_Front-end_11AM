import React, { useState } from 'react'

function Formobj() {

    const [form,setform] = useState({
        name : "",
        email : "",
        password :"",
        phone:""
    })

    const getchange =(e)=>{
        setform({
           ...form,
        //    name = value
           [e.target.name] : e.target.value 
        })
        console.log(form)
    }

  return (
       <div className='container'>
           <div className="col-md-6 mx-auto">
             {/* <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter your name</label>
                    <input type="text" className="form-control" onChange={(e)=>setform({...form,name:e.target.value})} id="name" value={form.name} aria-describedby="emailHelp" />             
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>setform({...form,email:e.target.value})} value={form.email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                 <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Enter your phone</label>
                    <input type="tel" className="form-control" value={form.phone} onChange={(e)=>setform({...form,phone:e.target.value})} id="phone" aria-describedby="emailHelp" />             
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control"  value={form.password} onChange={(e)=>setform({...form,password:e.target.value})} id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}


             <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter your name</label>
                    <input type="text" className="form-control" name='name' onChange={getchange} id="name" value={form.name} aria-describedby="emailHelp" />             
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' onChange={getchange} value={form.email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                 <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Enter your phone</label>
                    <input type="tel" className="form-control" name='phone' onChange={getchange} value={form.phone}  id="phone" aria-describedby="emailHelp" />             
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' onChange={getchange} value={form.password} id="exampleInputPassword1" />
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

export default Formobj
