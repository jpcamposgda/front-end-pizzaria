import axios, {Axios, AxiosError} from 'axios'

import { parseCookies } from 'nookies'
import { signOut } from '../contexts/AuthContext';
import { AuthTokenError } from './errors/AuthTokenError';

export function setupAPIClient(ctx= undefined){
let cookies = parseCookies(ctx);

const api = axios.create({

    baseURL: 'https://backend-pizzaria-cba.herokuapp.com',
    headers: {

        Authorization: `Bearer ${cookies['@nextauth.token']}`
    }

})

api.interceptors.response.use(response => {

    return response;
}, (error: AxiosError)=> {

    if(error.response.status === 401) {

    // qualquer error desloga o usuario

    if(typeof window !== undefined) {

        signOut();

    }else{

        return Promise.reject(new AuthTokenError()) 
        }
    }

    return Promise.reject(error)
})

return api;
}