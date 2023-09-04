import axios from "axios";

const WebScrapperInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_WEB_SCRAPPER_URL
});

export default WebScrapperInstance;