import { baseUrl } from "../config";

export const Character = {
    // Fetch all characters
    all() {
      return fetch(`${baseUrl}/characters`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one character
    one(id) {
      return fetch(`${baseUrl}/characters/${id}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Create one character
    create(params) {
      return fetch(`${baseUrl}/characters`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Edit one character
    update(id, params) {
      return fetch(`${baseUrl}/characters/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Delete one character
    destroy(id) {
      return fetch(`${baseUrl}/characters/${id}`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    }
  };
  