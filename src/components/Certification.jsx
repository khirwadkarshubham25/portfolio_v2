import React from 'react';

const certs = [
  {
    imageSrc: require(`../assets/GoogleCyberSecurity.jpg`),
    imageAlt: 'Google Cybersecurity',
  },
  {
    imageSrc: require(`../assets/MicrosoftCyberSecurity.jpg`),
    imageAlt: 'Google Cybersecurity',
  }
]

const Certification = () => {

    return(
        <div name='certification' className='w-full pb-96 h-auto text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#b9db17]'>Certifications</p>
                    <p className='py-4'>These are the certifications I have completed.</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                    {certs.map((cert) => (
                    <div key={certs.name} className="group relative">
                        <img
                            alt={cert.imageAlt}
                            src={cert.imageSrc}
                            className="w-full rounded-lg bg-transparent object-contain group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                        />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certification