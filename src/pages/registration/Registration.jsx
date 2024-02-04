import React from 'react'

const Registration = () => {
  return (
   <>
       <div className='flex justify-center	items-center	h-[100vh] bg-gray-800 flex-col'>
       <h1 className='text-3xl	text-white capitalize '>Get started with easily register</h1>
         <h4 className='text-1xl	text-slate-300	 capitalize my-4'>Free register and you can enjoy it</h4>
    <div className='bg-neutral-500 rounded-2xl py-5 px-8'>
      <form method='post' className='flex flex-col gap-y-3'>
        <div>
          <input type="text" name='firstname' placeholder='Enter your first name' className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none capitalize	'/>
        </div>
        <div>
          <input type="text" name='lastname' placeholder='Enter your last name'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none capitalize	'/>
        </div>
        <div>
          <input type="email" name='email' placeholder='Enter your email'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
        </div>
        <div>
          <input type="password" name='password' placeholder='Enter your password'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
        </div>
        <div>
          <input type="password" name='conframepassword' placeholder='Conframe password'  className='border-2	border-slate-600 py-4 px-8	rounded-3xl text-xl font-semibold	outline-none'/>
        </div>
        <div className='flex justify-center	items-center'>
        <button className='py-4 px-8 bg-blue-700 rounded-2xl text-lg font-bold text-white w-[200px] mt-[7px]' type='submit'>Submit</button>
        </div>
        <div className='flex justify-center	items-center gap-x-1.5'>
          <p className='text-white text-lg font-normal'>Already  have an account ?</p>
          <span className='text-purple-700 font-bold text-lg cursor-pointer'>Sign In</span>
        </div>
      </form>
    </div>
  </div>
   </>
  )
}

export default Registration