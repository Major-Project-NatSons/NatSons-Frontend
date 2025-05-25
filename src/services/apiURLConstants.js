const serverURl = 'http://localhost:8000/api';
const mongoServerURL = "http://localhost:3000/"
const loginApi = `${serverURl}/users/login`;
const signupApi = `${serverURl}/users/register`;
const mongoDBLoginAPI = `${mongoServerURL}api/auth/login`;
const mongoDBSignupAPI = `${mongoServerURL}api/auth/signup`;
const userProfileIdApi = `${serverURl}/users/profile/`;
const createNewHouseApi = `${serverURl}/homes/addNewHome`;
const getAllHousesApi = `${serverURl}/homes/getAllHomes`;
const addCountryApi = `${serverURl}/countries/add-new-country`;
const getAllCountriesApi = `${serverURl}/countries/get-all-countries`;
const addStateApi = `${serverURl}/states/add-new-state`;
const getStateByCountryApi = `${serverURl}/states/get-states-by-country/`;
const imageUploadApi = `${serverURl}/cdn/upload/single`;
const pdfUploadApi = `${serverURl}/cdn/upload/pdf`;
const getHomeByIdApi = `${serverURl}/homes/getHomeById/`;
const generateFloorPlansApi = `http://localhost:5000/generate_floor_plans`;
export { 
    loginApi,
    signupApi,
    userProfileIdApi,
    createNewHouseApi,
    addCountryApi,
    getAllCountriesApi,
    addStateApi,
    getStateByCountryApi,
    imageUploadApi,
    pdfUploadApi,
    getAllHousesApi,
    getHomeByIdApi,
    generateFloorPlansApi,
    mongoDBLoginAPI,
    mongoDBSignupAPI
};