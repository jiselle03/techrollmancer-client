import baseUrl from "../config";

const User = {
    current() {
        return fetch(`${baseUrl}/users/current`, {
            method: "GET",
            credentials: "include",
            mode:"no-cors"
        }).then(res => res.json());
    },
    create(params) {
        return fetch (`${baseUrl}/users`, {
            method: "POST",
            credentials: "include",
            mode:"no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};

export default User;
