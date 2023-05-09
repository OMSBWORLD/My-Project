import React from 'react';
import "../Styles/Navbar.css"
import {Link} from 'react-router-dom' 
import {RxDashboard} from 'react-icons/rx';
import {FcHome} from 'react-icons/fc';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';




function Navbar (){
    return(
        <div className='nav-link'>
            <div className='act'><h2>ACTIVATE 3.0</h2></div>
            <div className='menu'>
                <Link to='/'> <FcHome/>    Home</Link>
                <Link to='/dashboard' className='me'><RxDashboard/>   Dashboard</Link>
                <Link to='/add/user'> <AiOutlineAppstoreAdd/>    Add Users</Link>
            </div>
        </div>
    )
}
export default Navbar;