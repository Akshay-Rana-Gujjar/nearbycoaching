import axios from 'axios';
import { API_DOMAIN, SEARCH, SEARCH_ENDPOINT } from '../constants/api';


export default function (query){

    const SEARCH_API_URL = `${API_DOMAIN}${SEARCH_ENDPOINT}?query=${query}`;

    return axios.get(SEARCH_API_URL)


} 