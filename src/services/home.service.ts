import fetch from 'node-fetch';

const createMessage = async (msg: string): Promise<string> => {
    return msg;
};

const getDeployments = async (url: string): Promise<void> => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export const homeService = {
    createMessage,
    getDeployments,
};
