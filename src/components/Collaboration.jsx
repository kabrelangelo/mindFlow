import React from 'react';
import { motion } from 'framer-motion';
import { brainwaveSymbol, check } from "../../public/assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <div className="container rounded-xl border border-gray-500 mx-auto px-4 py-16 lg:flex items-center">
      {/* Contenu gauche */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 lg:pr-16"
      >
        <h2 className="lg:text-5xl text-3xl mx-5 font-bold mb-8">Une App de Chat pour une Collaboration Fluide</h2>

        <ul className="space-y-6 mb-10">
          {collabContent.map((item) => (
            <motion.li 
              key={item.id}
              className="flex items-start p-4 bg-gray-800 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={check} width={24} height={24} alt="check mark" className="mr-4 mt-1" />
              <div>
                <h6 className="text-lg font-semibold text-white">{item.title}</h6>
                {item.text && (
                  <p className="mt-2 text-gray-400">{item.text}</p>
                )}
              </div>
            </motion.li>
          ))}
        </ul>

        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Essayez maintenant
        </Button>
      </motion.div>

      {/* Côté droit avec disposition circulaire */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:w-1/2 mt-16 lg:mt-0"
      >
        <p className="text-lg text-gray-400 mb-12 lg:w-3/4 mx-auto text-center">
          {collabText}
        </p>

        <div className="relative w-full max-w-[30rem] aspect-square mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
          <div className="relative w-full h-full border-4 border-gray-700 rounded-full flex items-center justify-center">
            <motion.div 
              className="w-1/2 h-1/2 bg-gray-800 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <img src={brainwaveSymbol} width={64} height={64} alt="brainwave symbol" />
            </motion.div>

            <ul className="absolute mx-5 inset-0">
              {collabApps.map((app, index) => {
                const angle = (index * 2 * Math.PI) / collabApps.length;
                const x = Math.cos(angle);
                const y = Math.sin(angle);
                return (
                  <motion.li
                    key={app.id}
                    className="absolute"
                    style={{
                      top: `${50 + y * 50}%`,
                      left: `${50 + x * 50}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                      <img className="w-8 h-8 object-contain" alt={app.title} src={app.icon} />
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <LeftCurve className="absolute left-0 bottom-0" />
          <RightCurve className="absolute right-0 bottom-0" />
        </div>
      </motion.div>
    </div>
  );
};

export default Collaboration;