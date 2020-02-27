export const utils = {
    getBlurb(field) {
        let blurb = "";
        field.map(line => {
            if (line[0] === "!") {
                blurb += "<hr /><h2>" + line.slice(1) + "</h2>"
            } else if (line[0] === "$") {
                blurb += "<h2>" + line.slice(1) + "</h2>"
            } else if (line[0] === "#") {
                blurb += "<h5>" + line.slice(1) + "</h5>"
            } else if (line[0] === "%") {
                blurb += "<strong>" + line.slice(1) + "</strong>"
            } else if (line[0] === "@") {
                blurb += "<em>" + line.slice(1) + "</em>"
            } else if (line[0] === "=") {
                blurb += line.slice(1) + "<br />"
            } else if (line[0] === "*") {
                blurb += "<div class='list-item'>• " + line.slice(1) + "</div>"
            } else if (line[line.length - 1] === ":") {
                blurb += "<p>" + line + "</p>"
            } else if (line[0] === "/" && line[line.length - 1] === "/") {
                blurb += line.slice(1, -1)
            } else if (line[line.length - 1] === "/") {
                blurb += "<p>" + line.slice(0, -1)
            } else if (line[0] === "/") {
                blurb += line.slice(1) + "</p>"
            } else {
                blurb += "<p>" + line + "</p>"
            };
        });
        return blurb;
    },

    getCategory(equipment) {
        if (equipment.gear_category) {
            return equipment.gear_category;
        } else if (equipment.armor_category) {
            return equipment.armor_category;
        } else if (equipment.vehicle_category) {
            return equipment.vehicle_category;
        } else if (equipment.tool_category) {
            return equipment.tool_category;
        } else if (equipment.category_range) {
            return equipment.category_range;
        };
    },

    getInitiative() {
        return 17;
    },

    getBaseMod(stat) {
        return Math.floor((stat - 10) / 2);
    },

    getLevel(character) {
        return character.class_1_level + character.class_2_level + character.class_3_level
    },

    getAbilityMod(character, level, ability) {
        switch(ability) {
            case "acrobatics":
                return character.profiency && character.proficiency.acrobatics ? this.profAdd(character.dex, this.getProfBonus(level)) : Math.floor((character.dex - 10) / 2);
            case "animal handling":
                return character.profiency && character.proficiency.animal_handling ? this.profAdd(character.wis, this.getProfBonus(level)) : Math.floor((character.wis - 10) / 2);
            case "arcana":
                return character.profiency && character.proficiency.arcana ? this.profAdd(character.int, this.getProfBonus(level)) : Math.floor((character.int - 10) / 2);
            case "athletics":
                return character.profiency && character.proficiency.athletics ? this.profAdd(character.str, this.getProfBonus(level)) : Math.floor((character.str - 10) / 2);
            case "deception":
                return character.profiency && character.proficiency.deception ? this.profAdd(character.cha, this.getProfBonus(level)) : Math.floor((character.cha - 10) / 2);
            case "history":
                return character.profiency && character.proficiency.history ? this.profAdd(character.int, this.getProfBonus(level)) : Math.floor((character.int - 10) / 2);
            case "insight":
                return character.profiency && character.proficiency.insight ? this.profAdd(character.wis, this.getProfBonus(level)) : Math.floor((character.wis - 10) / 2);
            case "intimidation":
                return character.profiency && character.proficiency.intimidation ? this.profAdd(character.cha, this.getProfBonus(level)) : Math.floor((character.cha - 10) / 2);
            case "investigation":
                return character.profiency && character.proficiency.investigation ? this.profAdd(character.int, this.getProfBonus(level)) : Math.floor((character.int - 10) / 2);
            case "medicine":
                return character.profiency && character.proficiency.medicine ? this.profAdd(character.wis, this.getProfBonus(level)) : Math.floor((character.wis - 10) / 2);
            case "nature":
                return character.profiency && character.proficiency.nature ? this.profAdd(character.int, this.getProfBonus(level)) : Math.floor((character.int - 10) / 2);
            case "perception":
                return character.profiency && character.proficiency.perception ? this.profAdd(character.wis, this.getProfBonus(level)) : Math.floor((character.wis - 10) / 2);
            case "performance":
                return character.profiency && character.proficiency.performance ? this.profAdd(character.cha, this.getProfBonus(level)) : Math.floor((character.cha - 10) / 2);
            case "persuasion":
                return character.profiency && character.proficiency.persuasion ? this.profAdd(character.cha, this.getProfBonus(level)) : Math.floor((character.cha - 10) / 2);
            case "religion":
                return character.profiency && character.proficiency.religion ? this.profAdd(character.int, this.getProfBonus(level)) : Math.floor((character.int - 10) / 2);
            case "sleight of hand":
                return character.profiency && character.proficiency.sleight_of_hand ? this.profAdd(character.dex, this.getProfBonus(level)) : Math.floor((character.dex - 10) / 2);
            case "stealth":
                return character.profiency && character.proficiency.stealth ? this.profAdd(character.dex, this.getProfBonus(level)) : Math.floor((character.dex - 10) / 2);
            case "survival":
                return character.profiency && character.proficiency.survival ? this.profAdd(character.wis, this.getProfBonus(level)) : Math.floor((character.wis - 10) / 2);
            case "str_save":
                return character.profiency && character.proficiency.str_save ? this.profAdd(character.str, this.getProfBonus(level)) : Math.floor((character.str - 10) / 2);
            case "dex_save":
                return character.profiency && character.proficiency.dex_save ? this.profAdd(character.dex, this.getProfBonus(level)) : Math.floor((character.dex - 10) / 2);
            case "con_save":
                return character.profiency && character.proficiency.con_save ? this.profAdd(character.con, this.getProfBonus(level)) : Math.floor((character.con - 10) / 2);
            case "int_save":
                return character.profiency && character.proficiency.int_save ? this.profAdd(character.int, this.getProfBonus(level)) : Math.floor((character.int - 10) / 2);
            case "wis_save":
                return character.profiency && character.proficiency.wis_save ? this.profAdd(character.wis, this.getProfBonus(level)) : Math.floor((character.wis - 10) / 2);
            case "cha_save":
                return character.profiency && character.proficiency.cha_save ? this.profAdd(character.cha, this.getProfBonus(level)) : Math.floor((character.cha - 10) / 2);;
        }
    },

    getProfBonus(level) {
        if (level < 0 || level > 20) {
            throw new Error("Level must be between 1 and 20.");
        } else if (level <= 4) {
            return 2;
        } else if (level <= 8) {
            return 3;
        } else if (level <= 12) {
            return 4;
        } else if (level <= 16) {
            return 5;
        } else {
            return 6;
        };
    },

    profAdd(stat, bonus) {
        return this.getBaseMod(stat) + bonus;
    },

    rollD4() {
        return Math.ceil(Math.random() * 4);
    },

    rollD6() {
        return Math.ceil(Math.random() * 6);
    },

    rollD8() {
        return Math.ceil(Math.random() * 8);
    },

    rollD10() {
        return Math.ceil(Math.random() * 10);
    },

    rollD12() {
        return Math.ceil(Math.random() * 12);
    },

    rollD20() {
        return Math.ceil(Math.random() * 20);
    },

    rollD100() {
        return Math.ceil(Math.random() * 100);
    },

    rollAbility(rolls) {
        let abilityScore = 0;
  
        for (let i = 0; i < rolls.length; i++) {
          abilityScore += rolls[i];
        };
  
        abilityScore -= Math.min(...rolls);
        return abilityScore;
    }
};
