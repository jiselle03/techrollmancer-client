import baseUrl from "../config";

const Library = {
    // Fetch all race
    allRaces() {
      return fetch(`${baseUrl}/libraries/races`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one race
    oneRace(slug) {
      return fetch(`${baseUrl}/libraries/races/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch all classes
    allClasses() {
      return fetch(`${baseUrl}/libraries/classes`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one class
    oneClass(slug) {
      return fetch(`${baseUrl}/libraries/classes/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch all spells
    allSpells() {
      return fetch(`${baseUrl}/libraries/spells`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one spell
    oneSpell(slug) {
      return fetch(`${baseUrl}/libraries/spells/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch all equipment
    allEquipments() {
      return fetch(`${baseUrl}/libraries/equipment`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one equipment
    oneEquipment(slug) {
      return fetch(`${baseUrl}/libraries/equipment/${slug}`, {
        credentials: "include"
      }).then(res => res.json());
    },
  };
  
  export default Library;
  