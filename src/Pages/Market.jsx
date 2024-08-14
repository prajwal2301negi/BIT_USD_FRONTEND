import React from 'react'
import Header from '../components/Header';
// import OrderBook from '../components/OrderBook';
import BuySellPanel from '../components/BuySellPanel';
import AdvancedChart from '../components/AdvancedChart';

function Market() {
  return (
    <div className="bg-[#0E0F14] min-h-screen pt-2 pb-1 px-2 flex justify-center flex-col">
      <Header />
      <div className="flex flex-grow px-4 py-1 space-x-4">
        <div className="flex-1 bg-[#0E0F14]">
          <AdvancedChart />
        </div>
        {/* <div className="w-1/4 bg-[#0E0F14]">
          <OrderBook />
        </div> */}
        <div className="w-1/8 bg-[#0E0F14]">
          <BuySellPanel />
        </div>
        <div className="App">
        </div>
      </div>
    </div>
  )
}

export default Market



