import axios from 'axios';

const createMessage = async (msg: string): Promise<string> => {
    return msg;
};

const getDeployments = async (url: string): Promise<void> => {
    const res = await axios(url);
    const data = await res.data;
    return data;
};

export const homeService = {
    createMessage,
    getDeployments,
};
