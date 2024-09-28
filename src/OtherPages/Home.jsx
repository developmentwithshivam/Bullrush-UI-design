import React, { useEffect, useState } from 'react'

function Home() {
  const [obj, setobj] = useState({name:[1,2,3,4],age : 21})

  console.log(obj.name);

  


useEffect(() => {
  setobj({name:[10,20,30]})
}, [])
useEffect(() => {
  console.log(obj.name);
}, [obj])

  
  
  
  return (
    <>
    
    <div>Home</div>
    
    </>

  )
}

export default Home