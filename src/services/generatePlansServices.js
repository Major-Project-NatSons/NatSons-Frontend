import axios from "axios";
import { generateFloorPlansApi } from "./apiURLConstants";

const generateFloorPlan = async (items) => {
    var result = await axios.post(generateFloorPlansApi, items, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (result.status === 200) {
        return result.data;
    } else {
        throw new Error("Failed to generate floor plan");
    }
}

export { generateFloorPlan };