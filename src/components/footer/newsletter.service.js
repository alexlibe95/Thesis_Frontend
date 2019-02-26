import {config} from '../config/config.js';

export const newsletterService = {
    store
};

function store(username, email)  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, email})
    };

    return fetch(`${config.apiUrl}/newsletter`, requestOptions)
        .then(handleResponse)
        .then(success => {
            return success;
        });
}

function handleResponse(response) {
        if (!response.ok) {
            return false
        } else {
            return true;
        }
}
