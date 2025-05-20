const serverURl = 'http://localhost:8000/api';

const loginApi = `${serverURl}/users/login`;
const signupApi = `${serverURl}/users/register`;
const userProfileIdApi = `${serverURl}/users/profile/`;
const createNewHouseApi = `${serverURl}/homes/addNewHome`;
const getAllHousesApi = `${serverURl}/homes/getAllHomes`;
const addCountryApi = `${serverURl}/countries/add-new-country`;
const getAllCountriesApi = `${serverURl}/countries/get-all-countries`;
const addStateApi = `${serverURl}/states/add-new-state`;
const getStateByCountryApi = `${serverURl}/states/get-states-by-country/`;
const imageUploadApi = `${serverURl}/cdn/upload/single`;
const pdfUploadApi = `${serverURl}/cdn/upload/pdf`;
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
};