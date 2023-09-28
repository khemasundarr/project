import React from 'react'
import{Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg'>
    <div className='container'>
        <a className='navbar-brand logo text-black' href="/"></a>
        <ul className='navbar-nav '>
            <li>
                <Link className='li-items'to="/home">Home</Link>
            </li>
            <li>
                <Link className='li-items'to="/blog">Blog</Link>
            </li>
            <li>
                <Link className='li-items'to="/portfolio">Portfolio</Link>

            </li>
            <li>
                <Link className='li-items'to="/aboutthetests">AboutTheTests</Link>

            </li>
            <li>
            <Link className='li-items'to="/level1">Level1</Link>

            </li>
            <li>
                <Link className='li-items'to="/shop">Shop</Link>
            </li>
        </ul>
    </div>
    </nav>
  )
}

export default Navbar
