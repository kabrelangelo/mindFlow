import React from 'react';

const Roadmap = () => {
    return (
        <div id='roadmap' className="my-20">
            <h2 className="text-center text-3xl lg:text-5xl mb-10 text-gray-900 font-bold">
                Sur quoi nous travaillons
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-20">
                
                {/* Section avec badge "Fait" et image */}
                <div className=" mx-5 rounded-lg border border-gray-400  ">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 m-5 px-3 py-0.5 text-emerald-700  top-4 left-4 z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 mr-1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-sm">Fait</p>
                    </span>
                    <img
                        src="./assets/roadmap/image-1.png"
                        alt="game"
                        className="object-cover w-full"
                    />
                    <div className='m-6'>
                    <h4  className='text-2xl font-bold m-3'>Reconnaissance vocale</h4>
                    <p className='m-3'>
                    Permettez au chatbot de comprendre et de répondre aux commandes vocales, 
                    ce qui permet aux utilisateurs d'interagir plus facilement avec l'application en mains libres.</p>
                    </div>
                   
                </div>
                <div className=" mx-5 rounded-lg border border-gray-400  ">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 m-5 px-3 py-0.5 text-emerald-700  top-4 left-4 z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 mr-1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-sm">Fait</p>
                    </span>
                    <img
                        src="./assets/roadmap/image-3.png"
                        alt="game"
                        className="object-cover w-full"
                    />
                    <div className='m-6'>
                    <h4  className='text-2xl font-bold m-3'>Personnalisation du chatbot</h4>
                    <p className='m-3'>
                    Permettez aux utilisateurs de personnaliser l'apparence et le comportement du chatbot, 
                    le rendant plus attrayant et amusant à utiliser.</p>
                    </div>
                   
                </div>
                <div className=" mx-5 rounded-lg border border-gray-400  ">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 m-5 px-3 py-0.5 text-emerald-700  top-4 left-4 z-10">
   
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 mr-1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-sm">Fait</p>
                    </span>
                    <img
                        src="./assets/roadmap/image-2.png"
                        alt="game"
                        className="object-cover w-full"
                    />
                    <div className='m-6'>
                    <h4  className='text-2xl font-bold m-3'>Gamification</h4>
                    <p className='m-3'>Ajoutez des éléments de type jeu, tels que des badges ou des classements, 
                    pour inciter les utilisateurs à interagir plus fréquemment avec le chatbot.</p>
                    </div>
                   
                </div>
                <div className=" mx-5 rounded-lg border border-gray-400  ">
                    <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 m-5 px-3 py-0.5 text-emerald-700  top-4 left-4 z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 mr-1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-sm">Fait</p>
                    </span>
                    <img
                        src="./assets/roadmap/image-4.png"
                        alt="game"
                        className="object-cover w-full"
                    />
                    <div className='m-6'>
                    <h4  className='text-2xl font-bold m-3'>Intégration avec les API</h4>
                    <p className='m-3'>
                    
                    Permettez au chatbot d'accéder à des sources de données externes, 
                    telles que des API météo ou des API d'actualités, pour fournir des recommandations plus pertinentes.</p>
                    </div>
                   
                </div>
                
   
            </div>
        </div>
    );
};

export default Roadmap;
