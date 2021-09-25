const API = `${process.env.REACT_APP_API_URL}/v1`;

const User = {
  current: async () => {
    return fetch(`${API}/users/current`, {
      method: "GET",
      credentials: "include"
    }).then(res => res.json());
  },
  create: async params => {
    return fetch (`${API}/users`, {
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
