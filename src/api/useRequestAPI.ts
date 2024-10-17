import React from 'react'
import axios from "axios";
import { error } from 'console';
import { toast } from 'react-toastify';
import { profileURL } from './apiConfig';


export default function useRequestAPI() {
    
    const requestGO = () => {
        axios.create({
            timeout: 100000
        })
            .get(profileURL)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => toast.error(error.message))
    }

    return { requestGO }
}
