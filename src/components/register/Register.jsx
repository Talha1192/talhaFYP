import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate,Link} from 'react-router-dom'
const Register = () => {
    const [fullName, setName] =useState();
    const [cnic,setCnic] = useState();                 
    const [address,setAddress] = useState();                 
    const [phone,setMobile] = useState();                 
    const [email,setEmail] = useState();                 
    const [password,setPassword] = useState();                 
    const [date,setDate] = useState();                 
    const navigate = useNavigate();
    const handelSubmit = (e)=>{
        e.preventDefault()
        const user = JSON.stringify({
            fullName,
            cnic,
            address,
            phone,
            email,
            password,
            date
        })

        const config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          };
           console.log("Submit clicked",user)
                axios.post('https://cloudfyp.herokuapp.com/api/register',user,config)
                .then(res=>{
                    console.log("User Registered",res)
                    toast.success(res.data.message);
                    navigate('/signin')
                })
                .catch((err)=>{
                    
                    toast.error(err.response.data.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    console.log(err.response.message)})
           
        
   
    }
    return (
        <div className='register'>
            <form onSubmit={handelSubmit} className="daba">
                <h2>Register</h2>
                <div>
                    <label className="NAME">NAME</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" name="NAME" placeholder="NAME" />
                
                </div>
                <div>
                    <label className="CNIC">CNIC</label>
                    <input onChange={(e)=>{setCnic(e.target.value)}} type="" name="CNIC" placeholder="CNIC"></input>
                
                </div>
                <div>
                    <label>Address</label>
                    <input onChange={(e)=>{setAddress(e.target.value)}} type="text" name="Address" placeholder="Address"></input>
                </div>

                <div>
                    <label>MOBILE NUMBER</label>
                    <input onChange={(e)=>{setMobile(e.target.value)}} type="number" name="MOBILE NUMBER" placeholder="MOBILE NUMBER"></input>
                </div>

                <div>
                    <label>EMAIL</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" name="EMAIL" placeholder="EMAIL"></input>
                </div>
                <div>
                    <label>PASWORD</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="Password" name="password" placeholder="PAsSWORD"></input>
                </div>
                <div>
                    <label>Date</label>
                    <input onChange={(e)=>{setDate(e.target.value)}} type="date" name="date" placeholder="date of issue"></input>
                </div>
                <input type="submit" value="Submit"></input>
                <div className="already">Already have an account? <Link to='/signin'>Login</Link></div>
            </form>
           
            
        </div>

    )
}

export default Register


