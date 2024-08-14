import React, { useEffect, useState } from 'react'
import axios from 'axios'

function OrderBook() {

    const [result, setResult] = useState([]);

    const API_KEY = '';

    const getData = async () => {
        try {
            const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/BTCUSD`, {
                params: {
                    apikey: API_KEY
                }
            });

            setResult(response.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="bg-[#0E0F14] text-white min-h-screen flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-6 text-white">Bitcoin Price Data</h1>
            <div className="w-full max-w-4xl bg-[#0E0F14] text-white shadow-md rounded-lg p-6">
                {result.length > 0 ? (
                    result.map((bitCoin) => (
                        <div key={bitCoin.symbol} className="mb-4 p-4 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-white mb-2">{bitCoin.name} ({bitCoin.symbol})</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="font-semibold text-white">Price: </span>
                                    <span className="text-white">${bitCoin.price.toFixed(2)}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-white">Day Low: </span>
                                    <span className="text-red-500">${bitCoin.dayLow.toFixed(2)}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-white">Day High: </span>
                                    <span className="text-green-500">${bitCoin.dayHigh.toFixed(2)}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-white">Year Low: </span>
                                    <span className="text-red-500">${bitCoin.yearLow.toFixed(2)}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-white">Year High: </span>
                                    <span className="text-green-500">${bitCoin.yearHigh.toFixed(2)}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-white">50-Day Avg: </span>
                                    <span className="text-white">${bitCoin.priceAvg50.toFixed(2)}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-white">200-Day Avg: </span>
                                    <span className="text-white">${bitCoin.priceAvg200.toFixed(2)}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-white">Volume: </span>
                                    <span className="text-white">{bitCoin.volume.toLocaleString()}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-white">Open: </span>
                                    <span className="text-white">${bitCoin.open.toFixed(2)}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-white">Previous Close: </span>
                                    <span className="text-white">${bitCoin.previousClose.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-red-600">No data available.</p>
                )}
            </div>
        </div>
    )
}

export default OrderBook
