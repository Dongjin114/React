import React from 'react'
import axios from "axios";
import { error } from 'console';
import { toast } from 'react-toastify';


export default function useRequestAPI() {
    const API_URL = process.env.REACT_APP_API_URL;
    const profileURL = `${API_URL}/api/test`

    const requestGO = () => {
        axios.create({
            timeout: 100000
        })
            .get(`${profileURL}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => toast.error(error.message))
    }

    return { requestGO }
}
