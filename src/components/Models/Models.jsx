import React, { use, useState } from 'react';
import ModelsCard from './ModelsCard/ModelsCard';

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">Chose Your AI Model</h2>
        <p className="font-bold opacity-80">
          One subscription gives you access to all frontier AI models
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
