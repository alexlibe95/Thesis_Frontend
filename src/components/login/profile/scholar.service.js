import {config} from '../../config/config.js';


export const scholarService = {
    add,
    edit,
    remove
};

function add(title, sector, level, euro, origin, duration, age_from, age_until, indigent, comment, date_expire, link, username)  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, sector, level, euro, origin, duration, age_from, age_until, indigent, comment, date_expire, link, username})
    };

    return fetch(`${config.apiUrl}/addScholar`, requestOptions)
        .then(handleResponse)
        .then(success => {
            return success;
        });
}

function edit(ScholarID, title, sector, level, euro, origin, duration, age_from, age_until, indigent, comment, date_expire)  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ScholarID, title, sector, level, euro, origin, duration, age_from, age_until, indigent, comment, date_expire})
    };

    return fetch(`${config.apiUrl}/editScholar`, requestOptions)
        .then(handleResponse)
        .then(success => {
            return success;
        });
}

function remove(ScholarID)  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ScholarID})
    };

    return fetch(`${config.apiUrl}/removeScholar`, requestOptions)
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
