import axios, { AxiosPromise, Method } from 'axios';
import {API_PORT} from '../utils/const';

export const request = function (url:string, method: Method, data?: any): AxiosPromise<[any]> {
    const formattedUrl = 'http://localhost:' + API_PORT + '/' + url;

	return axios({ url: formattedUrl, method, data, validateStatus: () => true });
}; 