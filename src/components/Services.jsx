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
        <div className=' grid lg:grid-cols-3 grid-cols-1 gap-5 border border-gray-500 rounded-xl p-5'>
            <div className='lg:col-span-2 '>
                <img src="./src/assets/services/service-1.png" alt="Service" className="w-full rounded-xl" />
            </div>
            <div className=' flex justify-center items-center p-5 rounded-xl'>
                <p>Contenu ici</p>
            </div>
        </div>
    </div>
    
    );
};

export default Services;