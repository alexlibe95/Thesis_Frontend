import {config} from '../../config/config.js';

export const userService = {
    login,
    register,
    getsalt,
    changepass,
    logout
};

function login(username, passwordHash)  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, passwordHash })
    };
    return fetch(`${config.apiUrl}/auth`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + passwordHash);
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function register(instName, instLink, firstName, lastName, username, passwordHash, salt)  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ instName, instLink, firstName, lastName, username, passwordHash, salt })
    };
    return fetch(`${config.apiUrl}/register`, requestOptions)
        .then(handleResponseRegister)
        .then(success => {
            return success;
        });
}

function getsalt(username)  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
    };
    return fetch(`${config.apiUrl}/salt`, requestOptions)
      .then(response=>response.json())
      .then(response=> {
        return response
      })
}

function changepass(username, passwordHash, salt)  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, passwordHash, salt})
    };
    return fetch(`${config.apiUrl}/changepass`, requestOptions)
        .then(handleResponse)
        .then(success => {
            return success;
        });
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


function handleResponseRegister(response) {
        if (!response.ok) {
            return false
        }else{
            return true;
        }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
