import React from 'react';

import '../css/Character.css';
import { utils } from '../js/utils';
import Card from '@material-ui/core/Card';

export const CharacterStats = props => {
  
  const { character } = props;
  const { name, hp, armor_class, str, dex, con, int, wis, cha } = character;
  const level = utils.getLevel(character);

  return (
    <>
      <h1 className="character-name-title">{name.toUpperCase()}</h1>

      <div className="character-sheet">
        <Card className="hp-ac-initiative stats">
          <h3>{hp}</h3><p>Hit Points</p>
          <h3>{armor_class}</h3><p>Armor Class</p>
          <h3>{utils.getInitiative}</h3><p>Initiative</p>
          <h3>{utils.getProfBonus(level)}</h3><p>Proficiency Bonus</p>
        </Card>

        <Card className="basic stats">
          <h3>{str}</h3>
          <p>({utils.getBaseMod(str)})</p>
          <p>STR</p>

          <h3>{dex}</h3>
          <p>({utils.getBaseMod(dex)})</p>
          <p>DEX</p>

          <h3>{con}</h3>
          <p>({utils.getBaseMod(con)})</p>
          <p>CON</p>

          <h3>{int}</h3>
          <p>({utils.getBaseMod(int)})</p>
          <p>INT</p>

          <h3>{wis}</h3>
          <p>({utils.getBaseMod(wis)})</p>
          <p>WIS</p>
          
          <h3>{cha}</h3>
          <p>({utils.getBaseMod(cha)})</p>
          <p>CHA</p>

        </Card>

        <Card className="saving-throws stats">
          <h3>Saving Throws</h3>
          <p>{utils.getAbilityMod(character, "str_save")} Strength</p>
          <p>{utils.getAbilityMod(character, "dex_save")} Dexterity</p>
          <p>{utils.getAbilityMod(character, "con_save")} Constitution</p>
          <p>{utils.getAbilityMod(character, "int_save")} Intelligence</p>
          <p>{utils.getAbilityMod(character, "wis_save")} Wisdom</p>
          <p>{utils.getAbilityMod(character, "cha_save")} Charisma</p>
        </Card>

        <Card className="ability stats">
          <h3>Skills</h3>
          <p>{utils.getAbilityMod(character, level, "acrobatics")} Acrobatics</p>
          <p>{utils.getAbilityMod(character, level, "animal handling")} Animal Handling</p>
          <p>{utils.getAbilityMod(character, level, "arcana")} Arcana</p>
          <p>{utils.getAbilityMod(character, level, "athletics")} Athletics</p>
          <p>{utils.getAbilityMod(character, level, "deception")} Deception</p>
          <p>{utils.getAbilityMod(character, level, "history")} History</p>
          <p>{utils.getAbilityMod(character, level, "insight")} Insight</p>
          <p>{utils.getAbilityMod(character, level, "intimidation")} Intimidation</p>
          <p>{utils.getAbilityMod(character, level, "investigation")} Investigation</p>
          <p>{utils.getAbilityMod(character, level, "medicine")} Medicine</p>
          <p>{utils.getAbilityMod(character, level, "nature")} Nature</p>
          <p>{utils.getAbilityMod(character, level, "perception")} Perception</p>
          <p>{utils.getAbilityMod(character, level, "performance")} Performance</p>
          <p>{utils.getAbilityMod(character, level, "persuasion")} Persuasion</p>
          <p>{utils.getAbilityMod(character, level, "religion")} Religion</p>
          <p>{utils.getAbilityMod(character, level, "sleight_of_hand")} Sleight of Hand</p>
          <p>{utils.getAbilityMod(character, level, "stealth")} Stealth</p>
          <p>{utils.getAbilityMod(character, level, "survival")} Survival</p>

        </Card>

        <Card className="conditions stats">
          <h3>Conditions</h3>
        </Card>

      </div>
    </>
  );
};
