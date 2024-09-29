import React from 'react';

const Services = () => {
    const brainwaveServicesIcons=[
        {id:1, image:"./assets/recording-01.svg" },
        {id:2, image:"./assets/recording-03.svg" },
        {id:3, image:"./assets/disc-02.svg" },
        {id:4, image:"./assets/sliders-04.svg" },
        {id:5, image:"./assets/chrome-cast.svg" },
    ]
    return (
        <div className='mt-20' id='services'>
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
                <img src="../../public/assets/services/service-1.png" alt="Service" className="w-full object-cover rounded-xl" />
            </div>
            <div className='justify-center items-center lg:my-40 p-5 rounded-xl'>
                <h4 className='lg:text-3xl text-xl m-5 font-bold'>La plus futée des IA</h4>
                <p className='m-5 '>MindFlow débloque le potentiel de l'intelligence artificielle.</p>
                <div className='m-5'>
                <span className="flex items-center py-4">
                    <span className="h-px flex-1 bg-black"></span>
                </span>
                <div className='flex'>
                <img src="./assets/check.svg" alt=""  />
                <h6 className='text-xl font-semibold mx-4'>Génération de photo</h6>
                </div>
                <span className="flex items-center py-4">
                    <span className="h-px flex-1 bg-black"></span>
                </span>
                <div className='flex'>
                <img src="./assets/check.svg" alt=""  />
                <h6 className='text-xl font-semibold mx-4'>Amélioration de photo</h6>
                </div>
                <span className="flex items-center py-4">
                    <span className="h-px flex-1 bg-black"></span>
                </span>
                <div className='flex'>
                <img src="./assets/check.svg" alt=""  />
                <h6 className='text-xl font-semibold mx-4'>Intégration transparente</h6>
                </div>
                
                </div>
            </div>
        </div>
         <div className="relative z-1 grid my-10 border-gray-500 border rounded-xl gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="./assets/services/service-2.png"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 text-xl font-bold mb-4">Retouche Photo </h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Améliorez automatiquement vos photos grâce à la fonction de retouche photo de notre application IA. Essayez-la maintenant !
                </p>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>
         <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4 text-xl font-bold">   Génération de vidéos</h4>
                <p className="body-2 mb-[2rem] text-n-3">
             
                Le moteur de génération de photos et de vidéos d'art IA le plus puissant au monde. Qu'allez-vous créer ?
                </p>

                <ul className="flex bg-purple-500 items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item.image} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src="./assets/services/service-3.png"
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
        
        </div>
      </div>
    </div>
    
    );
};

export default Services;