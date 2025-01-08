import axios from "axios"
import { loginApi, signupApi } from "./apiURLConstants"


const loginUser = async (item) => {
    try {
        const result = await axios.post(loginApi, item);
        if (result.status === 200) {
            return result.data;
        }
        return { error: "Unexpected response from server" };
    } catch (err) {
        // Log the error for debugging
        console.error("Error in login:", err);
        return { error: err.response?.data?.message || "Error during login process" };
    }
};


const registerUser = async(item)=>{
    var result = await axios.post(signupApi,item);
    if (result.status === 201){
        return result.data;
    }
    else{
        return {error: "Error in registration"}
    }
}
export {loginUser,registerUser}