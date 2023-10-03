import React from 'react'
import{Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-bg fixed-top'>
    <div className='container'>
        <img className="logo"src='https://mainwprentals.b-cdn.net/wp-content/uploads/2021/09/main_transparent.png'alt='img'/>
        </div>
        <div>
        <ul className='navbar-nav '>
            <li>
                <Link className='li-items'to="/home">Home</Link>
            </li>
            <li>
                <Link className='li-items'to="/demos">Demos</Link>
            </li>
            <li>
                <Link className='li-items'to="/properties">Properties</Link>

            </li>
            <li>
                <Link className='li-items'to="/owners">Owners</Link>

            </li>
            <li>
            <Link className='li-items'to="/features">Features</Link>

            </li>
            <li>
                <Link className='li-items'to="/pages">Pages</Link>
            </li>
            <li>
                <Link className='li-items'to="/Login">Login</Link>
            </li>
            <li>
                <Link className='li-items'to="/signup">Signup</Link>
            </li>
            <btn>
                <button className='btn'to="/submitpropertys">Submitpropertys</button>
            </btn>

        </ul>
    </div>
    </nav>
  )
}

export default Navbar
