import React, { useState } from "react";

const Sell = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    location: "",
    description: "",
    frontImage: null,
    otherImages: [
      { image: null, desc: "" },
      { image: null, desc: "" },
      { image: null, desc: "" },
      { image: null, desc: "" },
    ],
    area: "",
    propertyType: "",
    builtUpArea: "",
    carpetArea: "",
    superBuiltUpArea: "",
    ageOfProperty: "",
    zoning: "",
    rooms: "",
    rentsell: "",
    bathrooms: "",
    halls: "",
    kitchen: "",
    registry: null,
    affidavit: null,
    adharCard: null,
    panCard: null,
    propertyReceipt: false,
    governmentApproval: false,
    powerOfAttorney: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "frontImage") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (name === "registry" || name === "affidavit" || name === "adharCard" || name === "panCard") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      const [key, index] = name.split("-");
      const updatedImages = [...formData.otherImages];
      updatedImages[parseInt(index)][key] = files[0];
      setFormData({ ...formData, otherImages: updatedImages });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="container mx-auto px-6 py-10 bg-gray-50">
      <p className="text-center text-gray-700 mb-10">Provide the necessary details to list your property for sale.</p>

      <form
        className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10 space-y-8"
        onSubmit={handleSubmit}
      >
        <fieldset className="border-t border-gray-300">
          <legend className="text-lg font-medium text-gray-700 px-2">Owner Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                Price (IND) <span className="text-red-500">*</span>
              </label>
              <input
                id="price"
                type="number"
                name="price"
                placeholder="Enter Price"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <input
                id="description"
                type="text"
                name="description"
                placeholder="Enter Description "
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="border-t border-gray-300">
          <legend className="text-lg font-medium text-gray-700 px-2">Property Details</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                id="location"
                type="text"
                name="location"
                placeholder="Location"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>


            <div>
              <label htmlFor="propertyType" className="block text-gray-700 font-medium mb-2">
                Property Type <span className="text-red-500">*</span>
              </label>
              <select
                id="propertyType"
                name="propertyType"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                value={formData.propertyType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Land">Land</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Building">Building</option>
              </select>
            </div>

            <div>
              <label htmlFor="propertyType" className="block text-gray-700 font-medium mb-2">
                Rent/Sell <span className="text-red-500">*</span>
              </label>
              <select
                id="rentsell"
                name="rentsell"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                value={formData.rentsell}
                onChange={handleInputChange}
                required
              >
                <option value="">Select</option>
                <option value="Apartment">Rent</option>
                <option value="Apartment">Sell</option>

              </select>
            </div>


          </div>

          <div>
            <label htmlFor="area" className="block text-gray-700 font-medium mb-2">
              Area (sq. ft) <span className="text-red-500">*</span>
            </label>
            <input
              id="area"
              type="number"
              name="area"
              placeholder="Total Area"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
              value={formData.area}
              onChange={handleInputChange}
              required
            />
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="rooms" className="block text-gray-700 font-medium mb-2">
                No. of Rooms <span className="text-red-500">*</span>
              </label>
              <input
                id="rooms"
                type="number"
                name="rooms"
                placeholder="No. of Rooms"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                value={formData.rooms}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="bathrooms" className="block text-gray-700 font-medium mb-2">
                No. of Bathrooms <span className="text-red-500">*</span>
              </label>
              <input
                id="bathrooms"
                type="number"
                name="bathrooms"
                placeholder="No. of Bathrooms"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                value={formData.bathrooms}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="halls" className="block text-gray-700 font-medium mb-2">
                No. of Halls <span className="text-red-500">*</span>
              </label>
              <input
                id="halls"
                type="number"
                name="halls"
                placeholder="No. of Halls"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                value={formData.halls}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="kitchen" className="block text-gray-700 font-medium mb-2">
                No. of Kitchens <span className="text-red-500">*</span>
              </label>
              <input
                id="kitchen"
                type="number"
                name="kitchen"
                placeholder="No. of Kitchens"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                value={formData.kitchen}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

        </fieldset>

        <fieldset className="border-t border-gray-300">
          <legend className="text-lg font-medium text-gray-700 px-2">Seller Documents</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="adharCard" className="block text-gray-700 font-medium mb-2">
                Adhar Card <span className="text-red-500">*</span>
              </label>
              <input
                id="adharCard"
                type="file"
                name="adharCard"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                onChange={handleFileChange}
                required
              />
            </div>
            <div>
              <label htmlFor="panCard" className="block text-gray-700 font-medium mb-2">
                PAN Card <span className="text-red-500">*</span>
              </label>
              <input
                id="panCard"
                type="file"
                name="panCard"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="border-t border-gray-300">
          <legend className="text-lg font-medium text-gray-700 px-2">Property Images</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="frontimage" className="block text-gray-700 font-medium mb-2">
                Front Image <span className="text-red-500">*</span>
              </label>
              <input
                id="frontimage"
                type="file"
                name="frontimage"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                onChange={handleFileChange}
                required
              />
            </div>
            <div>
              <label htmlFor="frontimage" className="block text-gray-700 font-medium mb-2">
                Additional image <span className="text-red-500">*</span>
              </label>
              <input
                id="additonalimage"
                type="file"
                name="additonalimage"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                onChange={handleFileChange}
                required
              />
            </div>
            <div>
              <label htmlFor="frontimage" className="block text-gray-700 font-medium mb-2">
                Additional image <span className="text-red-500">*</span>
              </label>
              <input
                id="additonalimage"
                type="file"
                name="additonalimage"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                onChange={handleFileChange}
                required
              />
            </div>
            <div>
              <label htmlFor="frontimage" className="block text-gray-700 font-medium mb-2">
                Additional image <span className="text-red-500">*</span>
              </label>
              <input
                id="additonalimage"
                type="file"
                name="additonalimage"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                onChange={handleFileChange}
                required
              />
            </div>
            <div>
              <label htmlFor="frontimage" className="block text-gray-700 font-medium mb-2">
                Additional image <span className="text-red-500">*</span>
              </label>
              <input
                id="additonalimage"
                type="file"
                name="additonalimage"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                onChange={handleFileChange}
                required
              />
            </div>

          </div>
        </fieldset>





        <fieldset className="border-t border-gray-300">
          <legend className="text-lg font-medium text-gray-700 px-2">Documents</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="registry" className="block text-gray-700 font-medium mb-2">
                Registry Document <span className="text-red-500">*</span>
              </label>
              <input
                id="registry"
                type="file"
                name="registry"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                onChange={handleFileChange}
                required
              />
            </div>
            <div>
              <label htmlFor="affidavit" className="block text-gray-700 font-medium mb-2">
                Affidavit Document <span className="text-red-500">*</span>
              </label>
              <input
                id="affidavit"
                type="file"
                name="affidavit"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="border-t border-gray-300">
          <legend className="text-lg font-medium text-gray-700 px-2">Tax and Approvals</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Property Tax Receipts <span className="text-red-500">*</span>
              </label>
              <input
                type="checkbox"
                name="propertyReceipt"
                checked={formData.propertyReceipt}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span className="text-gray-700">Attach Property Tax Receipts</span>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Government Approvals <span className="text-red-500">*</span>
              </label>
              <input
                type="checkbox"
                name="governmentApproval"
                checked={formData.governmentApproval}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span className="text-gray-700">Attach Government Approvals</span>
            </div>
          </div>
        </fieldset>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium text-lg focus:ring-2 focus:ring-blue-400"
          >
            Submit Details
          </button>
        </div>
      </form>
    </section>
  );
};

export default Sell;
