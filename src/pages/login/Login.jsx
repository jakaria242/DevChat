import React from 'react'

const Login = () => {
  return (
    <>
    <div className='flex justify-center	items-center	h-[100vh] bg-gray-800 flex-col'>
       <h1 className='text-4xl	text-white capitalize  mb-8'>Login to your account!</h1>
      <div className='bg-neutral-500 rounded-2xl py-5 px-5'>
        <form method='post' className='flex flex-col gap-y-3'>
          <div>
            <input type="email" name='email' placeholder='Enter your email'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
          </div>
          <div>
            <input type="password" name='password' placeholder='Enter your password'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
          </div>
          <div className='flex justify-center	items-center'>
          <button className='py-4 px-8 bg-blue-700 rounded-2xl text-lg font-bold text-white w-[200px] mt-[10px]' type='submit'>Login</button>
          </div>
          <div className='flex justify-center	items-center gap-x-1.5'>
          <p className='text-white text-lg font-normal'>Don’t have an account ?</p>
          <span className='text-purple-700 font-bold text-lg cursor-pointer'>Sign up</span>
        </div>
        <div className='flex justify-center	items-center gap-x-1.5'>
        <span className='text-blue-700 font-bold text-lg cursor-pointer'>Forgotten password ?</span>
        </div>
        </form>
      </div>
  </div>
    </>
  )
}

export default Login