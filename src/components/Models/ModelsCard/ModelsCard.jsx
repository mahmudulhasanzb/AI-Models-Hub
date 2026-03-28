import React, { useState } from 'react';

const ModelsCard = ({ model, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscription = () => {
    setIsSubscribed(true);
    setCarts([...carts, model])
  };

  return (
    <div className="card max-w-96 shadow-xl rounded-xl border-1 overflow-hidden">
      <div className="flex justify-center items-center h-56 bg-zinc-200">
        <img className="h-40 w-40 mx-auto object-contain" src={model.image} />
      </div>

      <div className="card-body space-y-2">
        <h2 className="card-title text-2xl font-semibold">{model.title}</h2>
        <p className="text-gray-600">{model.description}</p>
        <h2 className="text-lg font-semibold">
          <span className="text-xl font-bold">${model.price}</span> /month
        </h2>
        <div className="card-actions justify-center">
          <button
            onClick={handleSubscription}
            className="btn bg-red-500 text-white w-full rounded-lg text-xl font-semibold hover:bg-red-400"
          >
            {isSubscribed ? 'Subscribed' : 'Subscribe Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelsCard;
