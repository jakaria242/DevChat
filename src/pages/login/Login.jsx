import React, { useState } from 'react'
import SectionHeading from '../../utilities/SectionHeading'
import Input from '../../components/Input'
import Button from '../../components/Button'
import PeraText from '../../utilities/PeraText'
import Images from '../../utilities/Images'
import googlepic from '../../../public/images/google-icon.png'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash  } from "react-icons/fa";

const Login = () => {


  // password show and hide useState ================================
  let [passShow, setPassShow] = useState(false)
  // password show and hide useState ================================
 


  return (
    <>
    <div className='flex justify-center	items-center	h-[100vh] bg-gray-800 flex-col'>
      <SectionHeading className='text-4xl	text-white capitalize ' text='Login to your account!'/>
      <div className='border-2 border-slate-50 px-8 py-5 m-8 flex items-center gap-5 cursor-pointer rounded-2xl'>
        <div><Images sorce={googlepic} alter='Not Found'/></div>
        <Link className='text-white text-lg' to='#'>Login width google</Link>
      </div>
      <div className='bg-neutral-500 rounded-2xl py-5 px-5'>
        <form method='post' className='flex flex-col gap-y-3'>
          <div>
            <Input type="email" name='email' placeholder='Enter your email'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
          </div>
          <div className='relative'>
            <Input type={passShow ? 'text' : 'password'} name='password' placeholder='Enter your password'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
            <div className='absolute top-[26px] right-[18px] text-lg opacity-60'  onClick={()=>setPassShow(!passShow)}>{passShow ? <FaEye/> : <FaEyeSlash/>}</div>
          </div>
          <div className='flex justify-center	items-center'>
            <Button className='py-4 px-8 bg-blue-700 rounded-2xl text-lg font-bold text-white w-[200px] mt-[10px]' type='submit' text='Login'/>
          </div>
          <div className='flex justify-center	items-center gap-x-1.5'>
            <PeraText className='text-white text-lg font-normal' text='Don’t have an account ?'/>
            <Link to='/registration' className='text-purple-700 font-bold text-lg cursor-pointer'>Sign up</Link>
        </div>
        <div className='flex justify-center	items-center gap-x-1.5'>
          <PeraText className='text-blue-700 font-bold text-lg cursor-pointer' text='Forgotten password ?'/>
          <div className=''></div>
        </div>
        </form>
      </div>
  </div>
    </>
  )
}

export default Login