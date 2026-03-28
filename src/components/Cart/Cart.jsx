import React from 'react';

const Cart = ({ carts }) => {

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {carts.map(cart => (
        <div key={cart.id} className="flex items-center justify-center p-4">
          <div className="bg-base-300 rounded-xl shadow-md p-6 flex items-center w-full max-w-4xl">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-lg bg-base-200 flex items-center justify-center">
                <img src={cart.image} alt={cart.title} className="w-20 h-20" />
              </div>
            </div>

            <div className="ml-6 flex-grow">
              <h2 className="text-2xl font-bold text-gray-800">{cart.title}</h2>

              <p className="text-sm text-gray-600 mt-1">{cart.description}</p>
            </div>

            <div className="ml-6 text-right">
              <p className="text-2xl font-bold text-gray-800">${cart.price}</p>

              <p className="text-sm text-gray-600">/per month</p>
            </div>

            <button className="ml-4 text-gray-400 hover:text-gray-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

      <div className="flex justify-between bg-black text-white p-5 mt-5 mb-5 text-2xl font-bold">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
