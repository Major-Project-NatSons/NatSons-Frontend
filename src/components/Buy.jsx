import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getAllHomes } from "../services/homeDetailServices";

const Buy = () => {
    const [filters, setFilters] = useState({
        propertyType: "",
        location: "",
        price: "",
    });

    const [properties, setProperties] = useState(null);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    useEffect(() => {
        getAllHomes().then((response) => {
            console.log(response);
            
            setProperties(response.data);
        }
        ).catch((error) => {
            console.error("Error fetching properties:", error);
        });
    },[]);

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
            {
                properties && properties.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {properties.map((property, index) => (
                            <Card
                                shadowColor="shadow-blue-400"
                                buttonColor="bg-blue-500 hover:bg-blue-600"
                                key={index}
                                image={property.main_img}
                                title={property.title}
                                description={property.description}
                                price={property.price}
                                bed={property.number_of_rooms}
                                hall={property.no_of_halls}
                                bathroom={property.number_of_bathrooms}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No properties found.</p>
                )
            }
        </section>
    );
};

export default Buy;
