import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelsCard = ({ model, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = () => {
    setIsSubscribed(true);
    const isFound = carts.find(cart => cart.id === model.id);
    if (isFound) {
      toast.error('Item already added to cart!');
      return;
    }
    setCarts([...carts, model]);
    toast.success(`${model.title} added to cart!`);
  };

  return (
    <div className="card max-w-96 mx-auto rounded-3xl overflow-hidden bg-zinc-900/40 backdrop-blur-xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-2 transition-all duration-500 group">
      <div className="relative flex justify-center items-center h-56 bg-linear-to-b from-zinc-800/50 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-radial from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img
          className="h-32 w-32 mx-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          src={model.image}
          alt={model.title}
        />
      </div>

      <div className="card-body p-6 space-y-3 relative z-10 before:absolute before:inset-0 before:bg-linear-to-t before:from-zinc-950/80 before:to-transparent before:-z-10">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-2xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors drop-shadow-md">
            {model.title}
          </h2>
          {model.status && (
            <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30 uppercase tracking-wider font-semibold">
              {model.status}
            </span>
          )}
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed min-h-[40px]">
          {model.description}
        </p>
        <div className="flex items-end gap-1 pt-2">
          <span className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            ${model.price}
          </span>
          <span className="text-zinc-500 text-sm mb-1 font-medium">/month</span>
        </div>

        <div className="card-actions justify-center pt-4 border-t border-white/5 mt-4">
          <button
            onClick={handleSubscription}
            disabled={isSubscribed}
            className={`w-full py-3 rounded-xl font-bold tracking-wide transition-all duration-300 border ${
              isSubscribed
                ? 'bg-zinc-800/50 text-zinc-500 border-white/5 cursor-not-allowed'
                : 'bg-linear-to-r from-cyan-600/80 to-purple-600/80 hover:from-cyan-500 hover:to-purple-500 text-white border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]'
            }`}
          >
            {isSubscribed ? '✔ Subscribed' : 'Subscribe Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelsCard;
