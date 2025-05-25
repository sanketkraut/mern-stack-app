import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export async function api1(input) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api1`, { input });
        return response.data;
    } catch (error) {
        console.error('Error in API 1:', error);
        throw error;
    }
}

export async function api2(id, step1) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api2`, { id, step1 });
        return response.data;
    } catch (error) {
        console.error('Error in API 2:', error);
        throw error;
    }
}

export async function api3(id, step2) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api3`, { id, step2 });
        return response.data;
    } catch (error) {
        console.error('Error in API 3:', error);
        throw error;
    }
}

export async function api4(id, step3) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api4`, { id, step3 });
        return response.data;
    } catch (error) {
        console.error('Error in API 4:', error);
        throw error;
    }
}

export async function api5(id, step4) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api5`, { id, step4 });
        return response.data;
    } catch (error) {
        console.error('Error in API 5:', error);
        throw error;
    }
}