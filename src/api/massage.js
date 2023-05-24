import axios from "axios";
import { createUrl } from "../constant";

export const deleteNotification = async (receiptId) => await axios({
    method: 'delete',
    url: `${createUrl().urlDelete}/${receiptId}`,
});


export const getNotification = async () => await axios({
    method: 'get',
    url: createUrl().urlGet,
});


export const postNotification = async (data) => await axios({
    method: 'post',
    url: createUrl().urlPost,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

export const getChatHistory = async (data) => await axios({
    method: 'post',
    url: createUrl().urlHistory,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});



