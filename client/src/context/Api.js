import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
    params: { hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': '9f07655f6emshd2ecc204ee38da8p120e6djsn6de4574ea6b5',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
