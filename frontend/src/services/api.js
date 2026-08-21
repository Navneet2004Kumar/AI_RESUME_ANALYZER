import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:5000",
});

export const analyzeResume = async (formData) => {
    return await API.post("/analyze", formData);
};

export default API;