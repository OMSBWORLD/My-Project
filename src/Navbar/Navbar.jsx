import React, {useState} from 'react';
import "../Styles/Navbar.css"
import {Link} from 'react-router-dom' 
import {RxDashboard} from 'react-icons/rx';
import {FcHome} from 'react-icons/fc';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import {GoThreeBars} from 'react-icons/go'
import {FaRegTimesCircle} from 'react-icons/fa'
import act from '../assets/act.png'




function Navbar (){
    const [mobile, setMobile]= useState(false)
    const handleMobile=()=>{
        setMobile(!mobile)
    }
    return(
        <div className='nav-link'>
            <div className='act'><h2>ACTIVATE 3.<img src={act} width='30kb'/> </h2></div>
            <div className={mobile ? 'mobile-link' : 'menu'}>
                <Link to='/' className='me'> <FcHome/>    Home</Link>
                <Link to='/dashboard' className='me'><RxDashboard/>   Dashboard</Link>
                <Link to='/add/user' className='me'> <AiOutlineAppstoreAdd/>    Add Users</Link>
            </div>
            <div className='menu-bars'>
                {mobile? <FaRegTimesCircle className='times' onClick={handleMobile}/>
                :
                <GoThreeBars className='bars' onClick={handleMobile}/>
                }
            </div>
        </div>
    )
}
export default Navbar;