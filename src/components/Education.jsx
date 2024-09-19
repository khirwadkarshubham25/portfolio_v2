import React from 'react'
import EducationJson from '../data/education.json';

const Education = () => {
    const data = EducationJson.education;

    return (
        <div name='education' className='w-full h-auto pb-96 text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#b9db17]'>Education</p>
                    <p className='py-4'>This is my Education history.</p>
                </div>

                <div className="relative">
                        
                    <div className="hidden lg:block absolute border left-1/2 transform -translate-x-1/2 h-full border-gray-300 "></div>
                    {data.map((eduItem, index) => (
                        <div key={index} className={`hover:scale-110 duration-500 mb-8 flex flex-col h-full lg:flex-row items-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                            {
                                index % 2 !== 0 ? 
                                <div className='grid grid-cols-4 gap-[53px] pt-2 w-1/4'>
                                    <div className='shadow-md shadow-[#040c16] col-span-3'><p>{eduItem.start} - {eduItem.end}</p></div>
                                    <div className="col-span-1 hidden lg:flex justify-center items-center bg-green-400 border-2 border-white rounded-full h-5 w-5 left-1/2 transform -translate-x-1/2" style={{ top: '50%' }}></div>
                                </div> : 
                                <div></div>
                            }
                            <div
                            className={`shadow-md shadow-[#040c16] rounded-lg p-6 max-w-md ${index % 2 === 0 ? 'lg:mr-9' : 'lg:ml-4' }`}>
                                <h3 className="text-xl font-bold text-[#b9db17]">{eduItem.degree}</h3>
                                <p className="text-[#67cfc1] text-md">{eduItem.school}</p>
                                <p className="text-gray-300 mt-2 text-justify">{eduItem.description}</p>
                            </div>
                            {
                                index % 2 === 0 ? 
                                <div className='grid grid-cols-4 gap-[12px] pt-2 w-1/4'>
                                    <div className="col-span-1 hidden lg:flex justify-center items-center bg-green-400 border-2 border-white rounded-full h-5 w-5 left-1/2 transform -translate-x-1/2" style={{ top: '50%' }}></div>
                                    <div className='shadow-md shadow-[#040c16] col-span-3'><p>{eduItem.start} - {eduItem.end}</p></div>
                                </div> : 
                                <div></div>
                            }
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education