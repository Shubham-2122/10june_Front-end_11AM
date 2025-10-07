import axios from 'axios'
import React, { useEffect } from 'react'

function UserTable1() {

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res.data)
    }

  return (
    <div>
      <h1>hello this Tabel 2</h1>
    </div>
  )
}

export default UserTable1
