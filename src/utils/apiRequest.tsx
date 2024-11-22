import axios, {AxiosRequestConfig} from 'axios';
import {Endpoint} from "../enums/Endpoint";
import {Http} from "../enums/Http";
import {getToken} from "../hooks/useRestAPI";

const { REACT_APP_API_URL } = process.env; // API 기본 URL

const apiRequest = async (uri: Endpoint, method: Http, body?: object, auth: boolean = false) => {
    const config: AxiosRequestConfig = {};

    if(auth){
        const token = getToken();
        config.headers = {
            Authorization: token ? `Bearer ${token}` : undefined,
        };
    }


    try {
        let response;
        const targetUri = `${REACT_APP_API_URL}/${uri}`

        switch (method) {
            case Http.GET:
                response = await axios.get(targetUri, { ...config, params: body });
                break;
            case Http.POST:
                response = await axios.post(targetUri, body, config);
                break;
            case Http.PUT:
                response = await axios.put(targetUri, body, config);
                break;
            case Http.DELETE:
                response = await axios.delete(targetUri, { ...config, data: body });
                break;
            default:
                throw new Error(`Unsupported method: ${method}`);
        }

        return { data: response.data, error: null };
    } catch (error) {
        let errorMessage = '알 수 없는 오류가 발생했습니다.';

        if (axios.isAxiosError(error) && error.response) {
            const { data } = error.response;
            errorMessage = data.message;
        }

        return { data: null, error: errorMessage };
    }
};

export default apiRequest;
