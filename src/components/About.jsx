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
            <p>A product-driven Software Engineer with extensive experience in designing backend applications, intuitive UI/UX, automation testing, and DevOps. A proven problem-solver, I excel at optimizing applications and ensuring high code quality through rigorous code reviews and collaborative teamwork. I am passionate about cybersecurity and delivering well-engineered solutions.</p>
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