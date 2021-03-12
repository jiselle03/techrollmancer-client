import baseUrl from "../config";

const User = {
    current: async () => {
        return fetch(`${baseUrl}/users/current`, {
            method: "GET",
            credentials: "include"
        }).then(res => res.json());
    },
    create: async params => {
        return fetch (`${baseUrl}/users`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
};

export default User;
