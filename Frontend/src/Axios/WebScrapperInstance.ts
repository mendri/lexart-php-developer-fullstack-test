import axios from "axios";

const WebScrapperInstance = axios.create({
    url: import.meta.env.VITE_WEB_SCRAPPER_URL
});

export default WebScrapperInstance;