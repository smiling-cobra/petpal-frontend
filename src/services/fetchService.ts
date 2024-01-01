const BASE_URL = 'http://localhost:3001/api';

const createRequest = async (endpoint: string, method = 'GET', body = null, headers = {}) => {
    try {
        const response = await fetch(
            `${BASE_URL}/${endpoint}`,
            {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: body ? JSON.stringify(body) : null,
            });
        
        if (!response.ok) {
            throw new Error('Network response failed');
        }

        return await response.json();
    } catch (error: any) {
        console.error('Error making API request:', error.message);
        throw error;
    }
};

export const get = (endpoint: string, headers = {}) => createRequest(endpoint, 'GET', null, headers);
export const post = (endpoint: string, body: any, headers = {}) => createRequest(endpoint, 'POST', body, headers);
// Other methods...