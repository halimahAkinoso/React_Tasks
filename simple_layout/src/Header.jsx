import React from 'react'

function  Header () {
  return (
    
    <div>
    <header style={{ textAlign: "center",
      padding: "10px",
      borderBottom: "2px solid #ccc"}}/>
    <h1>My React App</h1>
    <nav>
         <a href="#" style={{ margin: "0 10px" }}>Home</a>
         <a href="#" style={{margin:"0 10px"}}>About</a>
         <a href="#" style={{margin:"0 10px"}}>Contact</a>
    </nav>
    </div>
  )
}

export default Header