import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="flex flex-col">
        Home
        <Link to='/signup'>signup</Link>  
        <Link to='/login'>login</Link>  
        <Link to='/doctor'>doctor</Link>  
    </div>
  )
}

export default Home