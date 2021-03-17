export const statFields = (str, dex, con, int, wis, cha) => {
    return [
        {
          label: "Strength",
          name: "str",
          stat: str,
          abilities: [
            {label: "Saving Throw", name: "Strength Save", stat: "str_save"},
            {label: "Athletics", name: "Athletics", stat: "athletics"},
          ],
        },
        {
          label: "Dexterity",
          name: "dex",
          stat: dex,
          abilities: [
            {label: "Saving Throw", name: "Dexterity Save", stat: "dex_save"},
            {label: "Acrobatics", name: "Acrobatics", stat: "acrobatics"},
            {label: "Sleight of Hand", name: "Sleight of Hand", stat: "sleight_of_hand"},
            {label: "Stealth", name: "Stealth", stat: "stealth"},
          ],
        },
        {
          label: "Constitution",
          name: "con",
          stat: con,
          abilities: [
            {label: "Saving Throw", name: "Constitution Save", stat: "con_save"},
          ],
        },
        {
          label: "Intelligence",
          name: "int",
          stat: int,
          abilities: [
            {label: "Saving Throw", name: "Intelligence Save", stat: "int_save"},
            {label: "Arcana", name: "Arcana", stat: "arcana"},
            {label: "History", name: "History", stat: "history"},
            {label: "Investigation", name: "Investigation", stat: "investigation"},
            {label: "Nature", name: "Nature", stat: "nature"},
            {label: "Religion", name: "Religion", stat: "religion"},
          ],
        },
        {
          label: "Wisdom",
          name: "wis",
          stat: wis,
          abilities: [
            {label: "Saving Throw", name: "Wisdom Save", stat: "wis_save"},
            {label: "Animal Handling", name: "Animal Handling", stat: "animal_handling"},
            {label: "Insight", name: "Insight", stat: "insight"},
            {label: "Medicine", name: "Medicine", stat: "medicine"},
            {label: "Perception", name: "Perception", stat: "perception"},
            {label: "Survival", name: "Survival", stat: "survival"},
          ],
        },
        {
          label: "Charisma",
          name: "cha",
          stat: cha,
          abilities: [
            {label: "Saving Throw", name: "Charisma Save", stat: "cha_save"},
            {label: "Deception", name: "Deception", stat: "deception"},
            {label: "Intimidation", name: "Intimidation", stat: "intimidation"},
            {label: "Performance", name: "Performance", stat: "performance"},
            {label: "Persuasion", name: "Persuasion", stat: "persuasion"},
          ],
        },
    ];
};