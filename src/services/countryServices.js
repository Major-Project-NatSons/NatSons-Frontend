import axios from "axios";
import { addCountryApi, getAllCountriesApi, getStateByCountryApi, addStateApi } from "./apiURLConstants";

const addNewCountry = async (country) => {
    try {
        await axios.post(addCountryApi, country, {
            headers: {
                Authorization: localStorage.getItem("userToken"),
            },
        });
    } catch (error) {
        console.error("Error adding new country:", error);
        throw error;
    }
}

const getAllCountries = async () => {
    try {
        const response = await axios.get(getAllCountriesApi);
        return response.data;
    } catch (error) {
        console.error("Error fetching countries:", error);
        throw error;
    }
}

const addNewState = async (state) => {
    try {
        await axios.post(addStateApi, state, {
            headers: {
                Authorization: localStorage.getItem("userToken"),
            },
        });
    } catch (error) {
        console.error("Error adding new state:", error);
        throw error;
    }
}

const getStateByCountry = async (countryId) => {
    try {
        const response = await axios.get(`${getStateByCountryApi}${countryId}`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching states by country:", error);
        throw error;
    }
}

export { addNewCountry, getAllCountries, addNewState, getStateByCountry };