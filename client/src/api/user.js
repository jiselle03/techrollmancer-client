import baseUrl from "../config";

const User = {
    current() {
        return fetch(`${baseUrl}/users/current`, {
            mode: "no-cors",
            method: "GET",
            credentials: "include"
        }).then(res => res.json());
    },
    create(params) {
        return fetch (`${baseUrl}/users`, {
            mode: "no-cors",
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};

export default User;
