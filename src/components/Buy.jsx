import React, { useState } from "react";
import Card from "./Card";

const Buy = () => {
    const [filters, setFilters] = useState({
        propertyType: "",
        location: "",
        price: "",
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <section className="container mx-auto px-6 md:px-20 py-8 bg-light-bg">
            <div className="mb-6 p-4 bg-white rounded shadow">
                <h2 className="text-lg font-bold mb-4">Filter Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={filters.location}
                            onChange={handleFilterChange}
                            placeholder="Enter location"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Property Type
                        </label>
                        <select
                            name="propertyType"
                            value={filters.propertyType}
                            onChange={handleFilterChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
                        >
                            <option value="">Select Type</option>
                            <option value="apartment">Apartment</option>
                            <option value="villa">House</option>
                            <option value="townhouse">Land</option>
                            <option value="studio">Building</option>
                            <option value="cottage">Warehouse</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={filters.price}
                            onChange={handleFilterChange}
                            placeholder="Enter price"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Buy/Rent
                        </label>
                        <select
                            name="buyrent"
                            value={filters.buyrent}
                            onChange={handleFilterChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
                        >
                            <option value="">Select Type</option>
                            <option value="buy">Buy</option>
                            <option value="rent">Rent</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        image: "/home.jpg",
                        title: "Modern Family Home",
                        description: "A spacious family home with a large garden.",
                        price: "$1800",
                        bed: "3",
                        hall: "2",
                        bathroom: "3",
                    },
                    {
                        image: "/home.jpg",
                        title: "Luxury Townhouse",
                        description: "An elegant townhouse with a contemporary design.",
                        price: "$2500",
                        bed: "4",
                        hall: "2",
                        bathroom: "4",
                    },
                    {
                        image: "/home.jpg",
                        title: "Suburban Retreat",
                        description: "A peaceful home in a quiet suburban area.",
                        price: "$1400",
                        bed: "3",
                        hall: "1",
                        bathroom: "2",
                    },
                    {
                        image: "/home.jpg",
                        title: "Beachside Haven",
                        description: "A beautiful property just minutes from the beach.",
                        price: "$2200",
                        bed: "4",
                        hall: "3",
                        bathroom: "4",
                    },
                    {
                        image: "/home.jpg",
                        title: "Downtown Apartment",
                        description: "A chic apartment in the heart of the city.",
                        price: "$2000",
                        bed: "2",
                        hall: "1",
                        bathroom: "2",
                    },
                    {
                        image: "/home.jpg",
                        title: "Cozy Cottage",
                        description: "A quaint cottage with a warm and inviting interior.",
                        price: "$1200",
                        bed: "2",
                        hall: "1",
                        bathroom: "1",
                    },
                    {
                        image: "/home.jpg",
                        title: "Elegant Villa",
                        description: "A luxurious villa with a private pool and garden.",
                        price: "$3000",
                        bed: "5",
                        hall: "3",
                        bathroom: "5",
                    },
                    {
                        image: "/home.jpg",
                        title: "Compact Studio",
                        description: "A compact yet functional studio for urban living.",
                        price: "$1000",
                        bed: "1",
                        hall: "0",
                        bathroom: "1",
                    },
                ].map((category, index) => (
                    <Card
                        shadowColor="shadow-blue-400"
                        buttonColor="bg-blue-500 hover:bg-blue-600"
                        key={index}
                        image={category.image}
                        title={category.title}
                        description={category.description}
                        price={category.price}
                        bed={category.bed}
                        hall={category.hall}
                        bathroom={category.bathroom}
                    />
                ))}
            </div>
        </section>
    );
};

export default Buy;
