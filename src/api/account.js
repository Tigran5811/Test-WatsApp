import axios from "axios";
import { createUrl} from "../constant";

export const getSettingsInfo = async () => await axios({
    method: 'get',
    url: createUrl().urlGetSettings,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

