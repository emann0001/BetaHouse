import React from 'react';
import { FaBath, FaBed, FaHeart, FaShareAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const properties = [
  {
    _id: 1,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦ 3,340,000,000",
    image: "https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388673/houseimage1_u0b5mm.png",
    featured: true,
    for: "Sale",
  },
  {
    _id: 2,
    title: "Exquisite Haven Villa",
    location: "Festac, Lagos",
    bedrooms: 5,
    bathrooms: 3,
    price: "₦ 4,000,000/1 Year",
    image: "https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388674/houseimage2_biyoxb.png",
    featured: true,
    for: "Rent",
  },
  {
    _id: 3,
    title: "Luxe Palatial Villa",
    location: "Gbagada, Lagos",
    bedrooms: 7,
    bathrooms: 3,
    price: "₦ 5,350,000,000",
    image: "https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388673/houseimage3_tdw8hm.png",
    featured: true,
    for: "Sale",
  },
  {
    _id: 4,
    title: "Harmony Luxury Villa",
    location: "Mushin, Lagos",
    bedrooms: 4,
    bathrooms: 3,
    price: "₦ 4,000,000,000",
    image: "https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388674/houseimage4_rnhqr6.png",
    featured: true,
    for: "Sale",
  },
  {
    _id: 5,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 4,
    price: "₦ 350,000,000/1 Year",
    image: "https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388673/houseimage5_anqrfl.png",
    featured: true,
    for: "Rent",
  },
  {
    _id: 6,
    title: "Real House Luxury Villa",
    location: "Lekki-Ajah, Lagos",
    bedrooms: 5,
    bathrooms: 3,
    price: "₦ 4,200,000,000",
    image: "https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388674/houseimage6_uv6em9.png",
    featured: true,
    for: "Sale",
  },
  {
    _id: 7,
    title: "Infinite Bliss Villa",
    location: "Ishagu, Enugu",
    bedrooms: 5,
    bathrooms: 3,
    price: "₦ 2,350,000,000",
    image: "https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388673/houseimage7_r3umij.png",
    featured: true,
    for: "Sale",
  },
  {
    _id: 8,
    title: "Real House Luxury Villa",
    location: "Work Layout, Owerri",
    bedrooms: 8,
    bathrooms: 6,
    price: "₦ 3,350,000/1 Year",
    image: "https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388673/houseimage8_en55nk.png",
    featured: true,
    for: "Rent",
  },
  {
    _id: 9,
    title: "Real House Luxury Villa",
    location: "Ikeja, Lagos",
    bedrooms: 6,
    bathrooms: 6,
    price: "₦ 600,000,000",
    image: "https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388673/houseimage9_tmjjmt.png",
    featured: true,
    for: "Sale",
  },
];

const PropertyCard = ({ property }) => (
  <div className="bg-white rounded-lg  overflow-hidden shadow-md flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
    <div className="relative">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      {property.featured && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          Featured
        </span>
      )}
      <span className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded ${
        property.for === "Rent" ? "bg-blue-500" : "bg-green-600"
      }`}>
        {property.for}
      </span>
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">{property.title}</h2>
        <div className="text-gray-500 text-sm flex items-center">
          <MdLocationOn className="mr-1" />
          {property.location}
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-600 mt-3 mb-4">
        <div className="flex items-center gap-1">
          <FaBed className="text-gray-400" /> {property.bedrooms}
        </div>
        <div className="flex items-center gap-1">
          <FaBath className="text-gray-400" /> {property.bathrooms}
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="font-bold text-gray-900 text-lg">
          {property.price}
        </div>
        <div className="flex justify-between mt-3 text-gray-500">
          <button className="hover:text-red-500 transition-colors">
            <FaHeart />
          </button>
          <button className="hover:text-blue-500 transition-colors">
            <FaShareAlt />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function PropertiesGrid() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-10 bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-sm text-gray-600 mb-2 md:mb-0">
            Showing 1–{properties.length} of {properties.length} results
          </div>
          <div className="text-sm text-gray-600">
            Sort by: 
            <select className="ml-2 border rounded px-2 py-1 bg-white">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-1">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 border rounded text-sm ${
                  page === 2
                    ? 'bg-[#3D9970] text-white border-[#3D9970]'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}