import React from 'react'
import SectionHeading from '../../utilities/SectionHeading'
import Input from '../../components/Input'
import Button from '../../components/Button'
import PeraText from '../../utilities/PeraText'

const Login = () => {
  return (
    <>
    <div className='flex justify-center	items-center	h-[100vh] bg-gray-800 flex-col'>
      <SectionHeading className='text-4xl	text-white capitalize  mb-8' text='Login to your account!'/>
      <div className='bg-neutral-500 rounded-2xl py-5 px-5'>
        <form method='post' className='flex flex-col gap-y-3'>
          <div>
            <Input type="email" name='email' placeholder='Enter your email'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
          </div>
          <div>
            <Input type="password" name='password' placeholder='Enter your password'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
          </div>
          <div className='flex justify-center	items-center'>
            <Button className='py-4 px-8 bg-blue-700 rounded-2xl text-lg font-bold text-white w-[200px] mt-[10px]' type='submit' text='Login'/>
          </div>
          <div className='flex justify-center	items-center gap-x-1.5'>
            <PeraText className='text-white text-lg font-normal' text='Don’t have an account ?'/>
            <PeraText className='text-purple-700 font-bold text-lg cursor-pointer' text='Sign up'/>
        </div>
        <div className='flex justify-center	items-center gap-x-1.5'>
          <PeraText className='text-blue-700 font-bold text-lg cursor-pointer' text='Forgotten password ?'/>
        </div>
        </form>
      </div>
  </div>
    </>
  )
}

export default Login