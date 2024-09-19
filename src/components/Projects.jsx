import React from 'react';
import ProjectJson from '../data/projects.json';

const Projects = () => {

    const data = ProjectJson.projects;

    const getImage = (imagePath) => {
        try{
            return require(`../${imagePath}`);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div name='projects' className='w-full pb-96 h-auto text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#b9db17]'>Projects</p>
                    <p className='py-4'>These are some of the projects I've worked on.</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        data.map(projectItem => (
                            <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${getImage(projectItem.bg)}`, backgroundSize: 'contain'}}>
                                <div className='opacity-0 group-hover:opacity-100'>
                                    <span className='text-2xl text-center font bold text-white tracking-wider'>
                                        {projectItem.title}
                                    </span>
                                    <div className='pt-8 text-center'>
                                        <a href={projectItem.github_url}>
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                                Code
                                            </button>
                                        </a>
                                        {
                                            projectItem.live_url !== undefined ? 
                                            <a href={projectItem.live_url}>
                                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                                    Live
                                                </button>
                                            </a> : ""
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Projects