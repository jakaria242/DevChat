import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import SectionHeading from '../../utilities/SectionHeading'
import PeraText from '../../utilities/PeraText'

const Registration = () => {
  return (
   <>
       <div className='flex justify-center	items-center	h-[100vh] bg-gray-800 flex-col'>
        <SectionHeading className='text-3xl	text-white capitalize' text='Get started with easily register'/>
        <PeraText className='text-1xl	text-slate-300	 capitalize my-4' text='Free register and you can enjoy it'/>
    <div className='bg-neutral-500 rounded-2xl py-5 px-8'>
      <form method='post' className='flex flex-col gap-y-3'>
        <div>
          <Input type="text" name='firstname' placeholder='Enter your first name' className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none capitalize	'/>
        </div>
        <div>
          <Input type="text" name='lastname' placeholder='Enter your last name'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none capitalize	'/>
        </div>
        <div>
          <Input type="email" name='email' placeholder='Enter your email'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
        </div>
        <div>
          <Input type="password" name='password' placeholder='Enter your password'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
        </div>
        <div>
          <Input type="password" name='conframepassword' placeholder='Conframe password'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
        </div>
        <div className='flex justify-center	items-center'>
          <Button className='py-4 px-8 bg-blue-700 rounded-2xl text-lg font-bold text-white w-[200px] mt-[7px]' type='submit' text='Submit'/>
        </div>
        <div className='flex justify-center	items-center gap-x-1.5'>
          <PeraText className='text-white text-lg font-normal' text='Already  have an account ?' />
          <PeraText  className='text-purple-700 font-bold text-lg cursor-pointer' text='Sign In'/>
        </div>
      </form>
    </div>
  </div>
   </>
  )
}

export default Registration