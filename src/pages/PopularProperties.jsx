import React from 'react';

const properties = [
    {
        imageUrl: 'https://res.cloudinary.com/dqqectes0/image/upload/v1748444788/Link_kgijij.png',
    },
    {
        imageUrl: 'https://res.cloudinary.com/dqqectes0/image/upload/v1748444869/Link_1_kdyjms.png',
    },
    {
        imageUrl: 'https://res.cloudinary.com/dqqectes0/image/upload/v1748444879/Link_2_d2hbp5.png',
    },
    {
        imageUrl: 'https://res.cloudinary.com/dqqectes0/image/upload/v1748444888/Link_3_lrbrf7.png',
    },
];

const PopularProperties = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
                    Discover Our Popular Properties
                </h2>

                <div className="relative">
                    {/* Left Arrow Button */}
                    <button className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 focus:outline-none z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
                        {properties.map((property, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden group transition-transform duration-300 hover:shadow-xl w-[290px] sm:w-full"
                            >
                                <div className="relative">
                                    <img
                                        src={property.imageUrl}
                                        alt={`Popular property ${index + 1}`}
                                        className="w-full max-w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] rounded-[7px] object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow Button */}
                    <button className="absolute top-1/2 right-0 translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 focus:outline-none z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PopularProperties;
