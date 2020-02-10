module ApplicationHelper

    # def base_mod stat
    #     ((stat - 10) / 2).floor
    # end

    # def ability_mod ability
    #     case ability
    #     when "acrobatics"
    #         @proficiency.acrobatics ? self.plus_proficiency(@character.dex, self.proficiency_bonus) : ((@character.dex - 10) / 2).floor
    #     when "animal handling"
    #         @proficiency.animal_handling ? self.plus_proficiency(@character.wis, self.proficiency_bonus) : ((@character.wis - 10) / 2).floor
    #     when "arcana"
    #         @proficiency.arcana ? self.plus_proficiency(@character.dex, self.proficiency_bonus) : ((@character.int - 10) / 2).floor
    #     when "athletics"
    #         @proficiency.athletics ? self.plus_proficiency(@character.str, self.proficiency_bonus) : ((@character.str - 10) / 2).floor
    #     when "deception"
    #         @proficiency.deception ? self.plus_proficiency(@character.cha, self.proficiency_bonus) : ((@character.cha - 10) / 2).floor
    #     when "history"
    #         @proficiency.history ? self.plus_proficiency(@character.int, self.proficiency_bonus) : ((@character.int - 10) / 2).floor
    #     when "insight"
    #         @proficiency.insight ? self.plus_proficiency(@character.wis, self.proficiency_bonus) : ((@character.wis - 10) / 2).floor
    #     when "intimidation"
    #         @proficiency.intimidation ? self.plus_proficiency(@character.cha, self.proficiency_bonus) : ((@character.cha - 10) / 2).floor
    #     when "investigation"
    #         @proficiency.investigation ? self.plus_proficiency(@character.int, self.proficiency_bonus) : ((@character.int - 10) / 2).floor
    #     when "medicine"
    #         @proficiency.medicine ? self.plus_proficiency(@character.wis, self.proficiency_bonus) : ((@character.wis - 10) / 2).floor
    #     when "nature"
    #         @proficiency.nature ? self.plus_proficiency(@character.int, self.proficiency_bonus) : ((@character.int - 10) / 2).floor
    #     when "perception"
    #         @proficiency.perception ? self.plus_proficiency(@character.wis, self.proficiency_bonus) : ((@character.wis - 10) / 2).floor
    #     when "performance"
    #         @proficiency.performance ? self.plus_proficiency(@character.cha, self.proficiency_bonus) : ((@character.cha - 10) / 2).floor
    #     when "persuasion"
    #         @proficiency.persuasion ? self.plus_proficiency(@character.cha, self.proficiency_bonus) : ((@character.cha - 10) / 2).floor
    #     when "religion"
    #         @proficiency.religion ? self.plus_proficiency(@character.int, self.proficiency_bonus) : ((@character.int - 10) / 2).floor
    #     when "sleight of hand"
    #         @proficiency.sleight_of_hand ? self.plus_proficiency(@character.dex, self.proficiency_bonus) : ((@character.dex - 10) / 2).floor
    #     when "stealth"
    #         @proficiency.stealth ? self.plus_proficiency(@character.dex, self.proficiency_bonus) : ((@character.dex - 10) / 2).floor
    #     when "survival"
    #         @proficiency.survival ? self.plus_proficiency(@character.wis, self.proficiency_bonus) : ((@character.wis - 10) / 2).floor
    #     when "str save"
    #         @proficiency.str_save ? self.plus_proficiency(@character.str, self.proficiency_bonus) : ((@character.str - 10) / 2).floor
    #     when "dex save"
    #         @proficiency.dex_save ? self.plus_proficiency(@character.dex, self.proficiency_bonus) : ((@character.dex - 10) / 2).floor
    #     when "con save"
    #         @proficiency.con_save ? self.plus_proficiency(@character.con, self.proficiency_bonus) : ((@character.con - 10) / 2).floor
    #     when "int save"
    #         @proficiency.int_save ? self.plus_proficiency(@character.int, self.proficiency_bonus) : ((@character.int - 10) / 2).floor
    #     when "wis save"
    #         @proficiency.wis_save ? self.plus_proficiency(@character.wis, self.proficiency_bonus) : ((@character.wis - 10) / 2).floor
    #     when "cha save"
    #         @proficiency.cha_save ? self.plus_proficiency(@character.cha, self.proficiency_bonus) : ((@character.cha - 10) / 2).floor
    #     end
    # end

    # def proficiency_bonus
    #     case @character.level
    #     when 1..4
    #         2
    #     when 5..8
    #         3
    #     when 9..12
    #         4
    #     when 13..16
    #         5
    #     when 17..20
    #         6
    #     end
    # end

    # def plus_proficiency stat, bonus
    #     self.base_mod(stat) + bonus
    # end

    # def roll sides, number = 1
    #     roll_array = []
    #     total = 0
    #     number.times do
    #       roll_value = rand(1..sides)
    #       total += roll_value
    #     end
    #     total
    # end

    # def attack_roll roll, type
    #     case type
    #     when "melee"
    #         @proficiency.str ? roll + plus_proficiency(@character.str, proficiency_bonus) : roll + base_mod @character.str
    #     when "ranged"
    #         @proficiency.dex ? roll + plus_proficiency(@character.dex, proficiency_bonus) : roll + base_mod @character.dex
    #     when "finesse str"
    #         @proficiency.str ? roll + plus_proficiency(@character.str, proficiency_bonus) : roll + base_mod @character.str
    #     when "finesse dex"
    #         @proficiency.dex ? roll + plus_proficiency(@character.dex, proficiency_bonus) : roll + base_mod @character.dex
    #     end
    # end
end
