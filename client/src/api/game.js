import { baseUrl } from "../config";
import { User } from './user';

let currentUser;
User.current().then(user => {
  currentUser = user;
});

export const Game = {
    // Fetch all games
    all() {
      return fetch(`${baseUrl}/users/${currentUser.id}/games`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one game
    one(id) {
      return fetch(`${baseUrl}/users/${currentUser.id}/games/${id}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Create one game
    create(params) {
      return fetch(`${baseUrl}/users/${currentUser.id}/games`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Edit one game
    update(id, params) {
      return fetch(`${baseUrl}/users/${currentUser.id}/games/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Delete one game
    destroy(id) {
      return fetch(`${baseUrl}/users/${currentUser.id}/games/${id}`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    }
  };
  