import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#b9db17]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#dbd46c]'>Shubham Khirwadkar</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#67cfc1]'>I'm a Software Engineer</h2>
            <p className='text-[#67cfc1] py-4 max-w-[700px]'>
                specializing in building and designing web applications, data analysis and automation testing.
            </p>

            <div>
                <Link to='work' smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#b9db17] hover:border-[#b9db17] hover:text-black'>View Work Experience 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home