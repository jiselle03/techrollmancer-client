import User from './user';

const API = `${process.env.REACT_APP_API_URL}/v1`;

let currentUser;
User.current().then(user => currentUser = user);

const Game = {
    // Fetch all games
    all: async () => {
      return fetch(`${API}/users/${currentUser.id}/games`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one game
    one: async id => {
      return fetch(`${API}/users/${currentUser.id}/games/${id}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Create one game
    create: async params => {
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
    update: async (id, params) => {
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
    destroy: async id => {
      return fetch(`${API}/users/${currentUser.id}/games/${id}`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    }
  };

  export default Game;
  