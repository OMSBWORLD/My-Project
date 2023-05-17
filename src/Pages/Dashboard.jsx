import React, {useState, useEffect} from 'react'
import "../Styles/Dashboard.css"
import axios from 'axios'
import  {Link} from  'react-router-dom'
import { useParams } from 'react-router-dom'
import {BsEyeFill} from 'react-icons/bs';
import {FaUserEdit} from 'react-icons/fa';
import {MdDeleteForever} from 'react-icons/md';


function Dashboard (){
    let {id} = useParams
    const [users, setUsers]  = useState([])
    
    useEffect(()=>{
      loadUser()
    }, [])

    const loadUser =async()=>{
        const result =  await axios.get("http://localhost:3005/users")
        setUsers(result.data)
      }
    
      const deleteUser=async(id)=>{
         await axios.delete(`http://localhost:3005/users/${id}`)
         loadUser()
      }
      const output = users.map((user)=>{
        return(
         <tr className='row-body' key={user.id}> 
             <td>{user.id}</td> 
             <td>{user.firstName}</td>
             <td>{user.lastName}</td>
             <td>{user.gender}</td>
             <Link to= {`/user/${user.id}`}><td className='view'><BsEyeFill/></td></Link>
             <Link  to={`/edit/${user.id}`}><td className='edit'><FaUserEdit/></td></Link>
             <td className='delete' onClick={(id)=>deleteUser(user.id)}><MdDeleteForever/></td>
       </tr>
        )
      })
    return(
        <div className='home-content'>
          <div className='total'>
              Members:{users.length}
          </div>
           <table>
            <thead className='thead'>
                <tr  className='row-head'>
                    <th>S/N</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <h3>{output}</h3>
                </tr>
            </tbody>
           </table>
           <h1></h1>
        </div>
    )
}
export default Dashboard;