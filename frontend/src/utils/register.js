const handleResponse = async (data) => {
    const res = await data.json()
    if (data.ok) {
        return res
    } else {
        return Promise.reject(res);
    }
}

export async function register(password, email) {
    const data = await fetch('https://api.dacorm.nomoredomains.icu/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password,
            email
        })
    })
    return handleResponse(data);
}

export async function login(password, email) {
    const data = await fetch('https://api.dacorm.nomoredomains.icu/signin', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password,
            email
        })
    })
    return handleResponse(data);
}

export async function auth(token) {
    const data = await fetch('https://api.dacorm.nomoredomains.icu/users/me', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    return handleResponse(data);
}