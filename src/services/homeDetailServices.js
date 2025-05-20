import axios from "axios";
import { createNewHouseApi, getAllHousesApi } from "./apiURLConstants";


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

export { createNewHome, getAllHomes, }