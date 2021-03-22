const stats = {
    getBaseMod(stat) {
        return Math.floor((stat - 10) / 2);
    },

    getLevel(character) {
        return character.class_1_level + character.class_2_level + character.class_3_level
    },

    getAbilityMod(character, level, ability, stat) {
        return character.proficiency[ability] ? this.profAdd(character[stat], this.getProfBonus(level)) : Math.floor((character[stat]- 10) / 2);
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
};

export default stats;
