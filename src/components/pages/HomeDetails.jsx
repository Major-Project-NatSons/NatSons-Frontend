import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHomeById } from "../../services/homeDetailServices";

const HomeDetails = () => {
  const { homeId } = useParams();
  const [homeDetails, setHomeDetails] = useState(null);

  useEffect(() => {
    getHomeById(homeId)
      .then((response) => {
        setHomeDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching home details:", error);
      });
  }, [homeId]);

  if (!homeDetails) {
    return (
      <p className="container mx-auto px-6 md:px-20 py-8 bg-light-bg">
        Loading home details...
      </p>
    );
  }

  const {
    address,
    affidivit,
    area,
    city,
    country_id,
    createdAt,
    description,
    home_type,
    image,
    main_img,
    no_of_halls,
    no_of_kitchens,
    number_of_bathrooms,
    number_of_rooms,
    owner_name,
    price,
    property_type,
    registry,
    state_id,
    updatedAt,
    zip_code,
    title,
  } = homeDetails;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  return (
    <div className="container mx-auto px-6 md:px-20 py-8 bg-light-bg">
      <div className="bg-white rounded-3xl shadow-md p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{title || property_type}</h2>
        <img
          src={main_img || (Array.isArray(image) && image.length > 0 ? image[0] : "")}
          alt={title || "Main Image"}
          className="w-full h-64 object-contain rounded-2xl mb-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Property Details</h3>
            <p><strong>Owner:</strong> {owner_name}</p>
            <p><strong>Type:</strong> {home_type}</p>
            <p><strong>Price:</strong> ₹{price.toLocaleString()}</p>
            <p><strong>Area:</strong> {area.toLocaleString()} sq.ft</p>
            <p><strong>Rooms:</strong> {number_of_rooms}</p>
            <p><strong>Halls:</strong> {no_of_halls}</p>
            <p><strong>Kitchens:</strong> {no_of_kitchens}</p>
            <p><strong>Bathrooms:</strong> {number_of_bathrooms}</p>
            <p><strong>Description:</strong> {description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>City:</strong> {city}</p>
            <p><strong>Zip Code:</strong> {zip_code}</p>
            <p><strong>State ID:</strong> {state_id}</p>
            <p><strong>Country ID:</strong> {country_id}</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Documents</h3>
            <p>
              <strong>Affidavit:</strong>{" "}
              {affidivit ? (
                <a
                  href={affidivit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View PDF
                </a>
              ) : (
                "N/A"
              )}
            </p>
            <p>
              <strong>Registry:</strong>{" "}
              {registry ? (
                <a
                  href={registry}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View PDF
                </a>
              ) : (
                "N/A"
              )}
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Dates</h3>
            <p><strong>Created At:</strong> {formatDate(createdAt)}</p>
            <p><strong>Updated At:</strong> {formatDate(updatedAt)}</p>
          </div>
        </div>
        {Array.isArray(image) && image.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {image.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-32 object-contain rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeDetails;
