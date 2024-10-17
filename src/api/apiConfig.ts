const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_PORT = process.env.REACT_APP_BASE_PORT;
const API_URL = `http://${BASE_URL}:${BASE_PORT}`;
export const profileURL = `${API_URL}/api/test`;