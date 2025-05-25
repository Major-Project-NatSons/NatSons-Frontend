import axios from "axios";
import { mongoDBLoginAPI, mongoDBSignupAPI } from "./apiURLConstants";

const mongoLogin = async(item)=>{

    try {
        const response = await axios.post(mongoDBLoginAPI, item, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        if (error.response && error.response.data) {
            return { error: error.response.data.message || "Login failed" };
        } else {
            return { error: "An unexpected error occurred" };
        }
    }
}

const mongoSignup = async(item)=>{
    try {
        const response = await axios.post(mongoDBSignupAPI, item, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error during signup:", error);
        if (error.response && error.response.data) {
            return { error: error.response.data.message || "Signup failed" };
        } else {
            return { error: "An unexpected error occurred" };
        }
    }
}

export { mongoLogin, mongoSignup };