import {config} from '../config/config.js';

export const contactService = {
    sendEmail
};

function sendEmail(username, email, subject, text)  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, email, subject, text})
    };

    return fetch(`${config.apiUrl}/sendEmail`, requestOptions)
        .then(handleResponse)
        .then(success => {
            return success;
        });
}

function handleResponse(response) {
        if (!response.ok) {
            return false
        }else{
            return true;
        }
}
