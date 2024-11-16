import {useEffect, useState} from "react";
import axios, {AxiosRequestConfig} from "axios";
import {Http} from "../enums/Http";
import {Endpoint} from "../enums/Endpoint";

const { REACT_APP_API_URL } = process.env;

const getToken = (): string | null => {
    return localStorage.getItem("accessToken");
};

const useRestAPI = (uri: Endpoint, method:Http, body? : object) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let config: AxiosRequestConfig = {};

        const token = getToken();
        config.headers = {
            Authorization: token ? `Bearer ${token}` : undefined,
        };


        const fetchData = async () => {
            try {
                let response;
                const targetUri = `${REACT_APP_API_URL}/${uri}`;

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
                        throw new Error(`No Method: ${method}`);
                }

                setData(response.data);
            } catch (err) {
                if (axios.isAxiosError(err) && err.response) {
                    setError(err.response.data.message || '요청 처리 중 오류가 발생했습니다.');
                } else {
                    setError('네트워크 오류가 발생했습니다.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [uri, body]);

    return { data, loading, error };
}

export default useRestAPI