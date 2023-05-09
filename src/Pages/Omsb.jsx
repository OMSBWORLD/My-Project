import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import Dashboard from './Dashboard';
import AddUsers from './AddUsers';
import '../Styles/Omsb.css'



function Omsb(){
    return(
        <div className='omsb'>
            <div className='nav'>
                <Navbar/>
            </div>
            <div className='routes'>
                <div className='top'>ACTIVATE 3.0</div>
                <div className='bottom'>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/add/user' element={<AddUsers/>}/>
                </Routes>
                </div>
            </div>
        </div>
    )
}
export default Omsb