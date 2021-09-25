const API = `${process.env.REACT_APP_API_URL}/v1`;

const Game = {
  // Fetch all games
  all: async (currentUser) => {
    return fetch(`${API}/users/${currentUser.id}/games`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // Fetch one game
  one: async (currentUser, id) => {
    return fetch(`${API}/users/${currentUser.id}/games/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // Create one game
  create: async (currentUser, params) => {
    return fetch(`${API}/users/${currentUser.id}/games`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // Edit one game
  update: async (currentUser, id, params) => {
    return fetch(`${API}/users/${currentUser.id}/games/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // Delete one game
  destroy: async (currentUser, id) => {
    return fetch(`${API}/users/${currentUser.id}/games/${id}`, {
      credentials: "include",
      method: "DELETE"
    }).then(res => res.json());
  }
};

export default Game;
  