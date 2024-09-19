import React from 'react'
import MyPicture from '../assets/mypicture.jpg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300' >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-1'>
            <p className='text-4xl font-bold inline border-b-4 border-[#b9db17]'>About Me</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right'>
            <p className='text-4xl font-bold'>Hi, I am Shubham</p>
            <p>I am a Software Engineer with passion for lifelong learning, problem solving and always imporving onself. If I'm not in front of my laptop, I'm most likely reading or travelling.</p>
          </div>
          <div>
            <img src={MyPicture} alt='My Picture' className='w-full mx-auto'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About