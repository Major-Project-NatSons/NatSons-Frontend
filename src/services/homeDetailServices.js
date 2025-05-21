import axios from "axios";
import { createNewHouseApi, getAllHousesApi, getHomeByIdApi } from "./apiURLConstants";


const createNewHome = async (homeData) => {
    try {
        const token = localStorage.getItem("userToken");
        const response = await axios.post(createNewHouseApi, homeData, {
            headers: {
                Authorization: token,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating new home:", error);
        throw error;
    }
}

const getAllHomes = async () => {
    try {
        const response = await axios.get(getAllHousesApi);
        return response.data;
    } catch (error) {
        console.error("Error fetching all homes:", error);
        throw error;
    }
};

const getHomeById = async (homeId) => {
    try {
        const response = await axios.get(`${getHomeByIdApi}${homeId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching home by ID:", error);
        throw error;
    }
}

export { createNewHome, getAllHomes, getHomeById };