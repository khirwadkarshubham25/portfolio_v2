import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/awngdzmb' className='flex flex-col max-w-[600px] w-full' id='contactForm'>
            <div className='pb-8'>
                <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-[#b9db17]'>Contact</p>
            </div>

            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name='Message' rows="10" />
            <button className='text-white border-2 hover:bg-[#b9db17] hover:border-[#b9db17] hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact