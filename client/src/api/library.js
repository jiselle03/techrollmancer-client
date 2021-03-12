import baseUrl from "../config";

const Library = {
    // Fetch all race
    allRaces: async () => {
      return fetch(`${baseUrl}/libraries/races`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one race
    oneRace: async slug => {
      return fetch(`${baseUrl}/libraries/races/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch all classes
    allClasses: async () => {
      return fetch(`${baseUrl}/libraries/classes`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one class
    oneClass: async slug => {
      return fetch(`${baseUrl}/libraries/classes/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch all spells
    allSpells: async () => {
      return fetch(`${baseUrl}/libraries/spells`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one spell
    oneSpell: async slug => {
      return fetch(`${baseUrl}/libraries/spells/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch all equipment
    allEquipments: async () => {
      return fetch(`${baseUrl}/libraries/equipment`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one equipment
    oneEquipment: async slug => {
      return fetch(`${baseUrl}/libraries/equipment/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
  };
  
  export default Library;
  