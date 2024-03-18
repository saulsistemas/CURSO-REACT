import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className='container-fluid'>
                <Link className="navbar-brand" to="/"> useContext </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/login"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/About"
                        >
                            About
                        </NavLink>
                        {/* {<Link className="nav-item nav-link active" to="/">Home </Link>
                    <Link className="nav-item nav-link" to="/login">Login</Link>
                    <Link className="nav-item nav-link" to="/about">About</Link>} */}
                    </div>
                </div>
            </div>

        </nav>

    )
}
