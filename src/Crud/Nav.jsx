import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className='Nav-main'>
        <article  className='nav-article'>
         <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafT0cXoKNUL7daxG2YY3HVKMIebakUMbiEg&usqp=CAU" alt="" />
        <li><Link className='MenuLinks' to='/'>HOME</Link></li>    
        <li><Link className='MenuLinks' to='/read'>READ</Link></li>    
        <li><Link className='MenuLinks' to='/create'>CREATE</Link></li>    
        </article>
    </nav>
    </>
  )
}

export default Nav
