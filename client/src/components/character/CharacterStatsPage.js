import React, { useState, useEffect } from 'react';

import '../css/Character.css';
import { utils } from '../js/utils';
import { Character } from '../../api/character';
import { CharacterNav } from './CharacterNav';
import { CircularProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export const CharacterStatsPage = props => {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Character.one(props.match.params.id).then(character => { 
        setCharacter(character);
        setIsLoading(false);
      });
  }, [props.match.params.id]);

  if (isLoading) {
    return(
        <CircularProgress variant="determinate" />
    );
  };

  return (
    <div className="main-stats character-background">
      <h1 className="character-name-title">{character.name.toUpperCase()}</h1>
      <CharacterNav character={character} />

      <div className="character-sheet">
        <Card className="hp-ac-initiative stats">
          <h3>{character.hp}</h3><p>Hit Points</p>
          <h3>{character.armor_class}</h3><p>Armor Class</p>
          <h3>{utils.getInitiative}</h3><p>Initiative</p>
          <h3>{utils.getProfBonus(character.level)}</h3><p>Proficiency Bonus</p>
        </Card>

        <Card className="basic stats">
          <h3>{character.str}</h3>
          <p>({utils.getBaseMod(character.str)})</p>
          <p>STR</p>

          <h3>{character.dex}</h3>
          <p>({utils.getBaseMod(character.dex)})</p>
          <p>DEX</p>

          <h3>{character.con}</h3>
          <p>({utils.getBaseMod(character.con)})</p>
          <p>CON</p>

          <h3>{character.int}</h3>
          <p>({utils.getBaseMod(character.int)})</p>
          <p>INT</p>

          <h3>{character.wis}</h3>
          <p>({utils.getBaseMod(character.wis)})</p>
          <p>WIS</p>
          
          <h3>{character.cha}</h3>
          <p>({utils.getBaseMod(character.cha)})</p>
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
          <p>{utils.getAbilityMod(character, "acrobatics")} Acrobatics</p>
          <p>{utils.getAbilityMod(character, "animal handling")} Animal Handling</p>
          <p>{utils.getAbilityMod(character, "arcana")} Arcana</p>
          <p>{utils.getAbilityMod(character, "athletics")} Athletics</p>
          <p>{utils.getAbilityMod(character, "deception")} Deception</p>
          <p>{utils.getAbilityMod(character, "history")} History</p>
          <p>{utils.getAbilityMod(character, "insight")} Insight</p>
          <p>{utils.getAbilityMod(character, "intimidation")} Intimidation</p>
          <p>{utils.getAbilityMod(character, "investigation")} Investigation</p>
          <p>{utils.getAbilityMod(character, "medicine")} Medicine</p>
          <p>{utils.getAbilityMod(character, "nature")} Nature</p>
          <p>{utils.getAbilityMod(character, "perception")} Perception</p>
          <p>{utils.getAbilityMod(character, "performance")} Performance</p>
          <p>{utils.getAbilityMod(character, "persuasion")} Persuasion</p>
          <p>{utils.getAbilityMod(character, "religion")} Religion</p>
          <p>{utils.getAbilityMod(character, "sleight_of_hand")} Sleight of Hand</p>
          <p>{utils.getAbilityMod(character, "stealth")} Stealth</p>
          <p>{utils.getAbilityMod(character, "survival")} Survival</p>

        </Card>

        <Card className="conditions stats">
          <h3>Conditions</h3>
        </Card>

      </div>
    </div>
  );
};
