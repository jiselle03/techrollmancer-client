import React from 'react';

import { utils } from '../js/utils';
import { FlexBox } from '../styles/FlexBox';

import { Card, Fab } from '@material-ui/core';
import { Edit } from '@material-ui/icons';

export const CharacterStats = props => {
  
  const { character } = props;
  const { name, hp, armor_class, str, dex, con, int, wis, cha } = character;
  const level = utils.getLevel(character);

  const checkBaseMod = (stat) => {
    const mod = utils.getBaseMod(stat);
    return mod > 0 ? "+" + mod : mod;
  };

  const checkAbilityMod = (character, level, ability) => {
    const mod = utils.getAbilityMod(character, level, ability);
    return mod > 0 ? "+" + mod : mod;
  };

  return (
    <>
      <h1>
        {name.toUpperCase()}
      </h1>

      <div 
        style={{
          position: "fixed",
          top: "60px",
          right: "15px",
          width: "5em",
          height: "5em"
        }}
      >
        <Fab color="secondary" aria-label="edit"><Edit /></Fab>
      </div>

      <div className="character-sheet">
        <Card className="hp-ac-initiative stats">
          <h6 className="header">Hit Points</h6>
          <div className="stat-header">
            <h2 className="main-stats">{hp}</h2>
          </div>

          <h6 className="header">Armor Class</h6>
          <div className="stat-header">
            <h2 className=" main-stats">{armor_class}</h2>
          </div>

          <h6 className="header">Initiative</h6>
          <div className="stat-header"> 
            <h2 className=" main-stats">{utils.getInitiative()}</h2>
          </div>

          <h6 className="header">Proficiency Bonus</h6>
          <div className="stat-header">
            <h2 className="main-stats">{utils.getProfBonus(level)}</h2>
          </div>
        </Card>

        <Card className="conditions stats">
          <h6 className="header">Conditions</h6>
        </Card>

        <Card className="str stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 className="header">Strength</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="str"
                >
                  <h2 className="stat-base">{str}</h2>
                  <h6 className="stat-mod">{checkBaseMod(str)}</h6>
                </FlexBox>
              </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "str_save")}</h6>
                </span>
                <span className="stat">
                  <p>Saving Throw</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "athletics")}</h6>
                </span>
                <span className="stat">
                  <p>Athletics</p>
                </span>
              </div>
              </div>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="dex stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 className="header">Dexterity</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="dex"
                >
                  <h2 className="stat-base">{dex}</h2>
                  <h6 className="stat-mod">{checkBaseMod(dex)}</h6>
                </FlexBox>
              </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "dex_save")}</h6>
                </span>
                <span className="stat">
                  <p>Saving Throw</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "acrobatics")}</h6>
                </span>
                <span className="stat">
                  <p>Acrobatics</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "sleight of hand")}</h6>
                </span>
                <span className="stat">
                  <p>Sleight of Hand</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "stealth")}</h6>
                </span>
                <span className="stat">
                  <p>Stealth</p>
                </span>
              </div>
              </div>
            </FlexBox>
          </FlexBox>
        </Card>
        
        <Card className="con stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 className="header">Constitution</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="con"
                >
                  <h2 className="stat-base">{con}</h2>
                  <h6 className="stat-mod">{checkBaseMod(int)}</h6>
                </FlexBox>
              </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "con_save")}</h6>
                </span>
                <span className="stat">
                  <p>Saving Throw</p>
                </span>
              </div>
            </div>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="int stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 className="header">Intelligence</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="int"
                >
                  <h2 className="stat-base">{int}</h2>
                  <h6 className="stat-mod">{checkBaseMod(int)}</h6>
                </FlexBox>
              </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "int_save")}</h6>
                </span>
                <span className="stat">
                  <p>Saving Throw</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "arcana")}</h6>
                </span>
                <span className="stat">
                  <p>Arcana</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "history")}</h6>
                </span>
                <span className="stat">
                  <p>History</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "investigation")}</h6>
                </span>
                <span className="stat">
                  <p>Investigation</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "nature")}</h6>
                </span>
                <span className="stat">
                  <p>Nature</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "religion")}</h6>
                </span>
                <span className="stat">
                  <p>Religion</p>
                </span>
              </div>
            </div>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="wis stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 className="header">Wisdom</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="wis"
                >
                  <h2 className="stat-base">{wis}</h2>
                  <h6 className="stat-mod">{checkBaseMod(wis)}</h6>
                </FlexBox>
              </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "wis_save")}</h6>
                </span>
                <span className="stat">
                  <p>Saving Throw</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "animal handling")}</h6>
                </span>
                <span className="stat">
                  <p>Animal Handling</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "insight")}</h6>
                </span>
                <span className="stat">
                  <p>Insight</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "medicine")}</h6>
                </span>
                <span className="stat">
                  <p>Medicine</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "perception")}</h6>
                </span>
                <span className="stat">
                  <p>Perception</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "survival")}</h6>
                </span>
                <span className="stat">
                  <p>Survival</p>
                </span>
              </div>
            </div>
            </FlexBox>
          </FlexBox>
        </Card>
          
          <Card className="cha stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 className="header">Charisma</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="cha"
                >
                  <h2 className="stat-base">{cha}</h2>
                  <h6 className="stat-mod">{checkBaseMod(cha)}</h6>
                </FlexBox>
              </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "cha_save")}</h6>
                </span>
                <span className="stat">
                  <p>Saving Throw</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "deception")}</h6>
                </span>
                <span className="stat">
                  <p>Deception</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "intimidation")}</h6>
                </span>
                <span className="stat">
                  <p>Intimidation</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "intimidation")}</h6>
                </span>
                <span className="stat">
                  <p>Intimidation</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "performance")}</h6>
                </span>
                <span className="stat">
                  <p>Performance</p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "persuasion")}</h6>
                </span>
                <span className="stat">
                  <p>Persuasion</p>
                </span>
              </div>
            </div>
            </FlexBox>
          </FlexBox>
        </Card>

      </div>
    </>
  );
};
