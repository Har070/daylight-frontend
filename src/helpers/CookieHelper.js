export const setCookie = (name, value) => {
    document.cookie = [name, '=', JSON.stringify(value)].join('');
}

export const getCookie = (name) => {
    let result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));

    return result;
}

export const removeCookie = (name) => {
    document.cookie = [name, '='].join('');
}
