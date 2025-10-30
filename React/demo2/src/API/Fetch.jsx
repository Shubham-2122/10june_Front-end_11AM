import React, { useEffect } from 'react'

function Fetch() {

    useEffect(()=>{
            fetchdata()
        },[])

    const fetchdata = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users",{
            method : "GET"
        })
        .then ((data)=>{
            return data.json()
        })
        .then ((data,index)=>{
            console.log(data)
        })
    }

  return (
    <div>
      
    </div>
  )
}

export default Fetch
