import React from 'react';

const Services = () => {
    return (
        <div className='my-20'>
        <div className='text-center flex flex-col justify-center items-center'>
            <h2 className='text-3xl lg:text-5xl font-bold m-5'>
                L'IA Générative à Votre Service
            </h2>
            <p className='font-mono mb-20'>
                MindFlow débloque tout le potentiel de l'intelligence artificielle pour votre vie au quotidien
            </p>
        </div>
        <div className=' grid lg:grid-cols-3 grid-cols-1 gap-5 border border-gray-500 rounded-xl p-2'>
            <div className='lg:col-span-2 '>
                <img src="./src/assets/services/service-1.png" alt="Service" className="w-full object-cover rounded-xl" />
            </div>
            <div className='justify-center items-center lg:my-40 p-5 rounded-xl'>
                <h4 className='lg:text-3xl text-xl m-5 font-bold'>La plus futée des IA</h4>
                <p className='m-5 '>MindFlow débloque le potentiel de l'intelligence artificielle.</p>
                <div className='m-5'>
                <span className="flex items-center py-4">
                    <span className="h-px flex-1 bg-black"></span>
                </span>
                <div className='flex'>
                <img src="./src/assets/check.svg" alt=""  />
                <h6 className='text-xl font-semibold mx-4'>Génération de photo</h6>
                </div>
                <span className="flex items-center py-4">
                    <span className="h-px flex-1 bg-black"></span>
                </span>
                <div className='flex'>
                <img src="./src/assets/check.svg" alt=""  />
                <h6 className='text-xl font-semibold mx-4'>Amélioration de photo</h6>
                </div>
                <span className="flex items-center py-4">
                    <span className="h-px flex-1 bg-black"></span>
                </span>
                <div className='flex'>
                <img src="./src/assets/check.svg" alt=""  />
                <h6 className='text-xl font-semibold mx-4'>Intégration transparente</h6>
                </div>
                
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Services;