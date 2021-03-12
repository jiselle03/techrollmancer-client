import baseUrl from "../config";

const Character = {
    // Fetch all characters
    all: async () => {
      return fetch(`${baseUrl}/characters`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one character
    one: async id => {
      return fetch(`${baseUrl}/characters/${id}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Create one character
    create: async params => {
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
    update: async (id, params) => {
      return fetch(`${baseUrl}/characters/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Edit proficiencies
    updateProf: async (charId, profId, proficiency, checked) => {
      return fetch(`${baseUrl}/characters/${charId}/proficiencies/${profId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
          body: JSON.stringify({[proficiency]: checked})
        }).then(res => res.json());
    },
    // Edit spells
    updateSpells: async (id, newSpells) => {
      return fetch(`${baseUrl}/characters/${id}/character_spells`, {
          credentials: "include",
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({spells: newSpells})
      }).then(res => res.json())
    },
    // Delete one character
    destroy: async id => {
      return fetch(`${baseUrl}/characters/${id}`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    },
  };
  
  export default Character;
  