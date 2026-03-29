import React, { use, useState } from 'react';
import ModelsCard from './ModelsCard/ModelsCard';

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);

  return (
    <div>
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Choose Your <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">AI Model</span></h2>
        <p className="font-medium text-zinc-400 max-w-xl mx-auto">
          One subscription gives you access to all frontier AI models, seamlessly integrated into a single interface.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 mb-10">
        {models.map(model => (
          <ModelsCard key={model.id} model={model} carts={carts} setCarts={setCarts}></ModelsCard>
        ))}
      </div>
    </div>
  );
};

export default Models;
