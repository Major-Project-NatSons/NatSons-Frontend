import axios from "axios";
import { addContactApi } from "./apiURLConstants";

const addContactMessage = async (item)=>{
    try {
        await axios.post(addContactApi, item, {
            headers: {
                Authorization: localStorage.getItem("userToken"),
            },
        });
    }
    catch (error) {
        console.error("Error adding contact message:", error);
        throw error;
    }
}

export default addContactMessage;