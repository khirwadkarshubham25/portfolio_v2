import SkillsData from '../data/skills.json'

const Skills = () => {
    const data = SkillsData.skills;

    const getImage = (imagePath) => {
        try{
            return require(`../${imagePath}`);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div name='skills' className='w-full pb-96 h-auto text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#b9db17]'>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {    
                        data.map(imageItem => (
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                                <img src={getImage(imageItem.icon)} alt={`${imageItem.title} icon`} className='w-20 mx-auto'/>
                                <p className='my-4'>{imageItem.title}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Skills