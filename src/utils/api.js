const API_KEY = "efc7ee7a-d6e2-4297-b2ba-510ce17bd8e2";
const API_KEY_STRING = "?api_key=" + API_KEY;
const API_URL = "https://project-2-api.herokuapp.com";

//test thunder: https://project-2-api.herokuapp.com/videos?api_key=efc7ee7a-d6e2-4297-b2ba-510ce17bd8e2
// id, title, channel, image


export const getVideosEndpoint = `${API_URL}/videos${API_KEY_STRING}`;

export function getVideoEndpoint(id) {
    return `${API_URL}/videos/${id}${API_KEY_STRING}`
}