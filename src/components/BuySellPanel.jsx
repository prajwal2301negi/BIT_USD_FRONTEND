import React, { useState } from 'react';
import {Link} from 'react-router-dom'


export default function BuySellPanel() {

  const [activeButton, setActiveButton] = useState('buy');

  return (
    <div className="bg-[#0E0F14] text-white pl-8 py-8 pr-16">
      <div className="flex justify-between">
      
        <button
          className={`w-1/2 py-2 rounded ${
            activeButton === 'buy' ? 'bg-[#00A86B] text-white' : 'bg-[#00c27862] text-black'
          }`}
          onClick={() => setActiveButton('buy')}
        >
          Buy
        </button>

        <button
          className={`w-1/2 py-2 rounded ${
            activeButton === 'sell' ? 'bg-[#791515] text-white' : 'bg-[#281419] text-black'
          }`}
          onClick={() => setActiveButton('sell')}
        >
          Sell
        </button>
      </div>

      
      <div className="mt-4">
        <label>Price</label>
        <input type="text" className="bg-[#1e1e1e] w-full p-2 mt-1 rounded" />
      </div>

    
      <div className="mt-4">
        <label>Quantity</label>
        <input type="text" className="bg-[#1e1e1e] w-full p-2 mt-1 rounded" />
      </div>

    
      <div className="flex space-x-2 mt-4">
        <button className="w-1/4 bg-[#0E0F14] py-1 rounded">25%</button>
        <button className="w-1/4 bg-[#0E0F14] py-1 rounded">50%</button>
        <button className="w-1/4 bg-[#0E0F14] py-1 rounded">75%</button>
        <button className="w-1/4 bg-[#0E0F14] py-1 rounded">Max</button>
      </div>

  
      <div className="flex items-center mt-4 space-x-2">
        <input type="checkbox" />
        <label>Post Only</label>
        <input type="checkbox" />
        <label>IOC</label>
      </div>

      
      <button className={`w-full py-2 mt-4 rounded ${
            activeButton === 'buy' ? 'bg-[#00A86B] text-white' : 'bg-[#B22222] text-white'
          }`}>
        {activeButton === 'buy' ? 'Buy' : 'Sell'}
      </button>

      <Link to='/' className='text-white flex items-center py-2 text-lg font-semibold'>Back</Link>
    </div>
  );
}
