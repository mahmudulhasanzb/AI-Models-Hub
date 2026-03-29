import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  // Place order
  const handlePayment = () => {
    setCarts([]);
    toast.success('Payment successful!');
  };

  // delete selected cart
  const handleDelete = cart => {
    const filteredArray = carts.filter(c => c.id !== cart.id);
    setCarts(filteredArray);
    toast.warning('Item removed from cart!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
        Your{' '}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
          Cart
        </span>
      </h1>

      {carts.length === 0 ? (
        <div className="text-center text-zinc-500 py-10 text-xl">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-4">
          {carts.map(cart => (
            <div key={cart.id} className="flex justify-center">
              <div className="bg-zinc-900/50 backdrop-blur-md rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-white/5 p-6 flex items-center w-full max-w-4xl hover:border-cyan-500/30 transition-colors duration-300 group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-zinc-800/80 flex items-center justify-center border border-white/5 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-shadow">
                    <img
                      src={cart.image}
                      alt={cart.title}
                      className="w-16 h-16 object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                <div className="ml-6 flex-grow">
                  <h2 className="text-2xl font-bold text-white tracking-wide">
                    {cart.title}
                  </h2>
                  <p className="text-sm text-zinc-400 mt-1 max-w-xl">
                    {cart.description}
                  </p>
                </div>

                <div className="ml-6 flex flex-col items-end">
                  <p className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                    ${cart.price}
                  </p>
                  <p className="text-sm text-zinc-500 font-medium">
                    /per month
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(cart)}
                  className="ml-8 text-zinc-600 hover:text-red-500 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] hover:bg-red-500/10 p-2 rounded-full transition-all focus:outline-none"
                  aria-label="Remove item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center bg-linear-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-md border border-cyan-500/20 text-white p-6 mt-8 rounded-2xl text-2xl max-w-4xl mx-auto shadow-[0_0_20px_rgba(34,211,238,0.1)]">
            <div className="font-semibold text-zinc-300">Total Calculation</div>
            <div className="font-bold text-3xl text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              ${totalPrice}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-6">
            <button
              onClick={handlePayment}
              className="w-full py-4 rounded-xl font-bold text-xl tracking-wide transition-all duration-300 bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
            >
              Complete Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
