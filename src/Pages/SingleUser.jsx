import React, {useState, useEffect} from 'react'
import { useParams, Link} from 'react-router-dom'
import axios from 'axios'
import "../Styles/SingleUser.css"
import {RxDashboard} from 'react-icons/rx';


function SingleUser (){
    const {id} = useParams()
    const [user, setUser] =useState({
        firstName: " ",
        lastName: " ",
        dateOfBirth: " ",
        gender: " ",
        maritalStatus: " ",
        qualification:  " ",
        phone: " ",
        email: " ",
        address: " "
    })
    const {firstName, lastName, dateOfBirth, gender, maritalStatus, qualification, phone, email, address} = user

    useEffect(()=>{
       loadUser()
    }, [])
    const loadUser=async()=>{
      const res = await axios.get(`http://localhost:3005/users/${id}`)
      setUser(res.data)
  
    }
    return(
        <div className='view-grand'>
            <div className='view-left'>
                <Link to='/dashboard'><RxDashboard/>   Dashboard</Link>
            </div>
            <div className='view-right'>
                <div className='view-top'>
                    <h3>{email}</h3>
                </div>
                <div className='view-buttom'>
                    <div className='buttom-one'>
                        <h3>Welcome! {lastName}</h3>
                    </div>
                    <div className='buttom-two'>
                       <div className='buttom-two-one'>
                            <h3>First Name:</h3>
                            <h3>Last Name:</h3>
                            <h3>Date Of Birth:</h3>
                            <h3>Gender:</h3>
                            <h3>Marital Status:</h3>
                            <h3>Qualification:</h3>
                            <h3>Phone No:</h3>
                            <h3>E-mail: </h3>
                            <h3>Address: </h3> 
                       </div>
                       <div className='butttom-two-two'>
                            <h3>{firstName}</h3>
                            <h3>{lastName}</h3>
                            <h3>{dateOfBirth}</h3>
                            <h3>{gender}</h3>
                            <h3>{maritalStatus}</h3>
                            <h3>{qualification}</h3>
                            <h3>{phone}</h3>
                            <h3>{email}</h3>
                            <h3>{address}</h3> 
                       </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default SingleUser;