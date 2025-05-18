import axios from "axios";
import { createNewHouseApi } from "./apiURLConstants";


const createNewHome = async(homeData)=>{
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

export {createNewHome}