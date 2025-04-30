import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'
 
const Header = () => {
 
    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle">

                <Link to="/"   className="logo">
                      <h1 className="navbar-brand text-uppercase p-0 mt-2 ml-5" onClick={() => window.scrollTo({ top: 0 })}>
                     Bazar
                    </h1>
                     <img src='djamel' className='imagelogo' alt="Logo" />
                 
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header
