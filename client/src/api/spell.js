import baseUrl from "../config";

const Spell = {
    update(id, newSpells) {
        return fetch(`${baseUrl}/characters/${id}/character_spells`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({spells: newSpells})
        }).then(res => res.json())
    }
};

export default Spell;
