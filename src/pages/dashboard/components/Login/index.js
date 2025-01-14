import React from 'react';
import './login.css';
import Logo from '../../../../assets/images/logo.png';
import { MyContext } from '../../../../App';
import { useContext,useEffect,useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from '@mui/material/Button';



export default function Login(){
  const context = useContext(MyContext);
  useEffect(()=>{
    context.setisHideSideBarandHeader(true);
  },[]);
  const [isShowPassword,setisShowPassword] = useState(false);

  return (
    <>
    <section className='loginSection'>
        <div className='loginBox'>
          <div className='logo text-center'>
            <img src={Logo} alt='Login'width="60px"/>
            <h5 className='font-weight-bold'>Login to My Jyoti DashBoard</h5>
          </div>

          <div className='mt-3 border p-4'>
          <form>
            <div className='form-group position-relative'>
            <span className='loginBoxIcon'><MdEmail/></span>
              <input type='text' className='form-control' placeholder='Enter Your Email' autoFocus/>
            </div>

            <div className='form-group position-relative'>
            <span className='loginBoxIcon'><RiLockPasswordFill/></span>
              <input type={`${isShowPassword===true ? 'text':'password'}`} className='form-control' placeholder='Enter Your Password'/>
              <span className='toggleShowPassword' onClick={()=>setisShowPassword(!isShowPassword)}>
                {
                  isShowPassword===true ? <FaEye/> : <FaEyeSlash/>
                }
              </span>
            </div>

            <div className='form-group'>
              <Button className='btn-blue btn-lg w-100'>Sign In</Button>
               
            </div>
          </form>
            
          </div>
        </div>
    </section>
    </>
  )
};