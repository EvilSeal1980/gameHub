import axios from "axios";

export default axios.create ({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'f1b60428738a4f629ad26d93f05c4ef9',
    },
});