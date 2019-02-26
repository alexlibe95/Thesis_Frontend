import {config} from '../config/config.js';

export const searchService = {
    getallSchols,
    getSchols
};

function getallSchols()  {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }

    };

    return fetch(`${config.apiUrl}/getAllScholars`, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data;
        });
}

function getSchols(sector, level, euro, origin, age, indigent, active)  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sector, level, euro, origin, age, indigent, active})
    };

    return fetch(`${config.apiUrl}/getScholars`, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
