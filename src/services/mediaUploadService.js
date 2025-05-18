import axios from 'axios';
import { imageUploadApi, pdfUploadApi } from './apiURLConstants';

const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const res = await axios.post(imageUploadApi, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return res.data.imageUrl;
    } catch (err) {
        console.error('Image upload failed:', err);
        throw err;
    }
};

const uploadPdf = async (pdfFile) => {
    const formData = new FormData();
    formData.append('pdf', pdfFile);

    try {
        const res = await axios.post(pdfUploadApi, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return res.data.pdfUrl;
    } catch (err) {
        console.error('PDF upload failed:', err);
        throw err;
    }
};

export { uploadImage, uploadPdf };