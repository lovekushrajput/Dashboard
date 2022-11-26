import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul className='flex flex-column  height-20  bg-white nav-container'>
                    <li >
                        <NavLink to='/' end>
                            <i className="fa-solid fa-house"></i>     Home
                        </NavLink >
                    </li>

                    <li>
                        <NavLink to="/articles">
                            <i className="fa-solid fa-austral-sign"></i>  Articles
                        </NavLink >

                    </li>

                    <li>
                        <NavLink to='/peoples'> <i className="fa-solid fa-users"></i> Peoples</NavLink >
                    </li>

                    <li>
                        <NavLink to="/help&support"> <i className="fa-regular fa-comment-dots"></i> Help & Support</NavLink >
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar