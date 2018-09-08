import axios from 'axios';

export const baseURL = `http://jsonplaceholder.typicode.com/`;

export const API = axios.create({
    baseURL: baseURL
});
