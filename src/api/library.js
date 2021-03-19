const API = `${process.env.REACT_APP_API_URL}/v1`;

const Library = {
    // Fetch all race
    allRaces: async () => {
      return fetch(`${API}/libraries/races`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one race
    oneRace: async slug => {
      return fetch(`${API}/libraries/races/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch all classes
    allClasses: async () => {
      return fetch(`${API}/libraries/classes`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one class
    oneClass: async slug => {
      return fetch(`${API}/libraries/classes/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch all spells
    allSpells: async () => {
      return fetch(`${API}/libraries/spells`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one spell
    oneSpell: async slug => {
      return fetch(`${API}/libraries/spells/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch all equipment
    allEquipments: async () => {
      return fetch(`${API}/libraries/equipment`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one equipment
    oneEquipment: async slug => {
      return fetch(`${API}/libraries/equipment/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
  };
  
  export default Library;
  