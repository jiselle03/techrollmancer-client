import baseUrl from "../config";

const User = {
    current() {
        return fetch(`https://cors-anywhere.herokuapp.com/${baseUrl}/users/current`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    },
    create(params) {
        return fetch (`https://cors-anywhere.herokuapp.com/${baseUrl}/users`, {
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
