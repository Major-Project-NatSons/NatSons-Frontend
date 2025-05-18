import axios from "axios";
import { userProfileIdApi, userProfileIdAPI } from "./apiURLConstants";

const getUser = async (userId) => {
  try {
    // Validate that userId is provided
    if (!userId) {
      throw new Error("User ID is required.");
    }

    // Get the token from localStorage
    const token = localStorage.getItem("userToken");

    // Validate token
    if (!token || !token.startsWith("Bearer ")) {
      throw new Error("Invalid or missing authorization token.");
    }

    // Fetch data using axios
    const response = await axios.get(`${userProfileIdApi}${userId}`, {
      headers: {
        Authorization: token,
      },
    });

    // Return the response data
    return response.data;
  } catch (error) {
    // Log or handle the error appropriately
    console.error("Error fetching user data:", error.message);

    // You can throw the error or return a default object
    throw error;
  }
};

export { getUser };
