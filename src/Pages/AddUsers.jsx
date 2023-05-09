import { useState } from "react";
import "../Styles/AddUsers.css"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function AddUsers (){
    let naviagte = useNavigate()
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
    const [error, setError] = useState(false)

    const {firstName, lastName, dateOfBirth, gender, maritalStatus, qualification, phone,  email, address} = user
    const handleInput=(e)=>{
         setUser({...user, [e.target.name]: e.target.value})
    }
  
    const handleSubmit=async(e)=>{
      e.preventDefault()
       if(firstName.trim().length===0 || lastName.trim().length===0 || email.trim().length==0){
        setError(true)
       }else{
        setError(false)
        await axios.post("http://localhost:3005/users", user)
        naviagte("/dashboard")
       }
       
    }
    return(
        <div className='add-users'>
          <div className="user-top">
              <h3>New User</h3>
          </div>
          <div className="user-buttom">
          <form onSubmit={handleSubmit}>
            <h5>First Name</h5>
            <input type="text" name="firstName" value={firstName} onChange={handleInput}/>
            {error && firstName.trim().length===0 ? 
              <label>First name can not be empty</label>
              :
              " "
            }
            <h5>Last Name</h5>
            <input type="text" name="lastName" value={lastName} onChange={handleInput}/>
               {error && lastName.trim().length===0 ?
                <label>Last name can  not be empty</label>
                :
                " "
              }
            <h5>Date Of Birth</h5>
            <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={handleInput}/>
               {error && dateOfBirth.trim().length===0 ? 
                <label>Date Of Birth can not be empty</label>
                :
                " "
              }
            <h5>Gender</h5>
              <select name="gender" value={gender} onChange={handleInput}>
                  <option value=''></option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
              </select>
              {error && gender.trim().length===0 ? 
                <label>Gender can not be empty</label>
                :
                " "
              }
            <h5>Marital Status</h5>
            <select name="maritalStatus" value={maritalStatus} onChange={handleInput}>
                  <option value=''></option>
                  <option value='single'>Single</option>
                  <option value='married'>Married</option>
                  <option value='divorced'>Divorced</option>
                  <option value='widow'>Widow</option>
                  <option value='widower'>Widower</option>
              </select>
              {error && maritalStatus.trim().length===0 ? 
                <label>Marital Status can not be empty</label>
                :
                " "
              }
        </form>
        <form onSubmit={handleSubmit}>
            <h5>Qualification</h5>
            <select name="qualification" value={qualification} onChange={handleInput}>
                  <option value=''></option>
                  <option value='SSCE'>SSCE</option>
                  <option value='BSc'>BSc</option>
                  <option value='MSc'>MSc</option>
                  <option value='NCE'>NCE</option>
                  <option value='PhD'>PhD</option>
                  <option value='OND'>OND</option>
                  <option value='BLLB'>BLLB</option>
                  <option value='BSc.Edu'>BSc.Edu</option>
                  <option value='others'>Others</option>
              </select>
              {error && qualification.trim().length===0 ? 
                <label>Qualification can not be empty</label>
                :
                " "
              }
            <h5>Phone Number</h5>
            <input type="number" name="phone" value={phone} onChange={handleInput}/>
               {error && phone.trim().length===0 ? 
                <label>Phone Number can not be empty</label>
                :
                " "
              }
            <h5>E-mail</h5>
            <input type="email" name="email" value={email} onChange={handleInput}/>
               {error && email.trim().length===0 ? 
                <label>Email can not be empty</label>
                :
                " "
              }
            <h5>Address</h5>
            <input type="text" name="address" value={address} onChange={handleInput}/>
               {error && address.trim().length===0 ? 
                <label>Address can not be empty</label>
                :
                " "
              }
            <button type='submit'>Submit</button>
        </form>
          </div>
      </div>
    )
}
export default AddUsers;