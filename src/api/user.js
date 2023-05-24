import axios from "axios";
import { createUrl} from "../constant";

export const getContactInfo = async (data) => await axios({
    method: 'post',
    url: createUrl().urlContactInfo,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});
