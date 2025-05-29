import React, { useState } from 'react';
import PropertiesGrid from '../components/PropertyDetails'; // adjust the path if needed
import PopularProperties from './PopularProperties';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={decrement}
        disabled={count === 0}
        className="w-8 h-8 text-black text-xl font-bold rounded border border-gray-300 disabled:opacity-50"
      >
        -
      </button>
      <span className="text-black text-lg font-semibold w-8 text-center">{count}</span>
      <button
        onClick={increment}
        className="w-8 h-8 text-xl text-black font-bold rounded border border-gray-300"
      >
        +
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white px-6"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dqqectes0/image/upload/v1748428791/Frame_9325_f427nx.png')",
        }}
      >
        <div className="text-center max-w-2xl mt-24">
          {/* Responsive heading */}
          <h1 className="text-4xl sm:text-5xl md:text-[68px] font-bold mb-4 leading-[1] tracking-[2px] text-center">
            Browse Our Properties
          </h1>

          {/* Responsive paragraph */}
          <p className="mb-8 text-lg sm:text-xl md:text-[26px] font-normal leading-[1.6] tracking-normal text-center">
            Find your perfect home among our curated properties. Start browsing now!
          </p>

          <div className="w-full flex justify-center mt-10">
            <div className="w-full sm:w-[90%] md:w-[1238px] bg-white/50 p-2 sm:p-4">
              <div className="bg-white shadow-lg flex flex-wrap md:flex-nowrap items-center gap-4 p-4 rounded-lg">
                <div className="flex flex-col w-full sm:w-[45%] md:w-1/4">
                  <label className="text-sm font-medium text-gray-600 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Lagos"
                    className="border rounded-md px-3 py-2 text-gray-700"
                  />
                </div>

                <div className="flex flex-col w-full sm:w-[45%] md:w-1/4">
                  <label className="text-sm font-medium text-gray-600 mb-1">Property Type</label>
                  <input
                    type="text"
                    placeholder="e.g. 3b Duplex, Bungalow Flat"
                    className="border rounded-md px-3 py-2 text-gray-700"
                  />
                </div>

                <div className="flex flex-col w-full sm:w-[45%] md:w-1/4 items-center">
                  <label className="text-sm font-medium text-gray-600 mb-1">Bedrooms</label>
                  <Counter />
                </div>

              
                <button className="bg-[#3D9970] hover:bg-green-700 text-white px-6 py-2 rounded-tr-[10px] rounded-br-[10px] h-[60px] w-full sm:w-[45%] md:w-[240px] mt-0 sm:mt-4 md:mt-0 cursor-pointer transition-colors duration-300">
                  Find Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <PropertiesGrid />
      <PopularProperties />
    </>
  );
}
