import React, { useState } from 'react';

import { baseUrl } from '../../config';
import { Character } from '../../api/character';
import { CharacterProficiencies } from './CharacterProficiencies';
import { utils } from '../js/utils';
import { FlexBox } from '../styles/FlexBox';
import { ButtonStyle } from '../styles/ButtonStyle';
import { Fade, FadeStyle } from '../styles/FadeStyle';
import { InputEditStats } from './CharacterInputEdit';
import { TooltipRoll, TooltipEdit } from './CharacterTooltips';

import { Backdrop, Card, Modal } from '@material-ui/core';

export const CharacterStats = props => {
  const [editHP, setEditHP] = useState(false);
  const [editAC, setEditAC] = useState(false);
  const [editInitiative, setEditInitiative] = useState(false);
  const [editSpeed, setEditSpeed] = useState(false);
  const [editStr, setEditStr] = useState(false);
  const [editDex, setEditDex] = useState(false);
  const [editCon, setEditCon] = useState(false);
  const [editInt, setEditInt] = useState(false);
  const [editWis, setEditWis] = useState(false);
  const [editCha, setEditCha] = useState(false);
  const [open, setOpen] = useState(false);
  const [roll, setRoll] = useState(0);
  const [modifier, setModifier] = useState(0);
  const [ability, setAbility] = useState(null);

  const { character, handleRefresh } = props;
  const { id, name, hp, armor_class, initiative, speed, str, dex, con, int, wis, cha, proficiency } = character;
  const level = utils.getLevel(character);

  const handleClick = field => {
    switch(field) {
      case "hp":
        return setEditHP(true);
      case "armor_class":
        return setEditAC(true);
      case "initiative":
        return setEditInitiative(true);
      case "speed":
        return setEditSpeed(true);
      case "str":
        return setEditStr(true);
      case "dex":
        return setEditDex(true);
      case "con":
        return setEditCon(true);
      case "int":
        return setEditInt(true);
      case "wis":
        return setEditWis(true);
      case "cha":
        return setEditCha(true);
      default:
        return;
    };
  };

  const handleBlur = (event, field) => {
    const { value } = event.currentTarget;

    switch(field) {
      case "hp":
        Character.update(id, {hp: value})
          .then(() => {
              setEditHP(false);
            }).then(() => {
              handleRefresh();
            });
        break;
      case "armor_class":
        Character.update(id, {armor_class: value})
          .then(() => {
              setEditAC(false);
            }).then(() => {
              handleRefresh()
            });
        break;
      case "initiative":
        Character.update(id, {initiative: value})
          .then(() => {
            setEditInitiative(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "speed":
        Character.update(id, {speed: value})
          .then(() => {
            setEditSpeed(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "str":
        Character.update(id, {str: value})
          .then(() => {
            setEditStr(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "dex":
        Character.update(id, {dex: value})
          .then(() => {
            setEditDex(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "con":
        Character.update(id, {con: value})
          .then(() => {
            setEditCon(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "int":
        Character.update(id, {int: value})
          .then(() => {
            setEditInt(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "wis":
        Character.update(id, {wis: value})
          .then(() => {
            setEditWis(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "cha":
        Character.update(id, {cha: value})
          .then(() => {
            setEditCha(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      default:
        return;
    };
  };

  const handleChange = event => {
    const { field } = event.target.parentNode.parentNode.dataset;
    const { checked } = event.target;

    return fetch(`${baseUrl}/characters/${id}/proficiencies/${proficiency.id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify({[field]: checked})
      }).then(res => res.json())
      .then(() => {
        props.handleRefresh();
    });
  };

  const checkBaseMod = stat => {
    const mod = utils.getBaseMod(stat);
    return mod > 0 ? "+" + mod : mod;
  };

  const checkAbilityMod = (character, level, ability) => {
    const mod = utils.getAbilityMod(character, level, ability);
    return mod > 0 ? "+" + mod : mod;
  };

  const checkInitiative = initiative => {
    return initiative > 0 ? "+" + initiative : initiative;
  };

  const checkProfBonus = level => {
    const bonus = utils.getProfBonus(level);
    return bonus > 0 ? "+" + bonus : bonus;
  };

  const checkRoll = (roll, modifier) => {
    if (roll - modifier === 20) {
      return "nat20 roll";
    } else if (roll - modifier === 1) {
      return "nat1 roll";
    } else {
      return "roll";
    };
  };

  const handleOpen = (modifier, ability) => {
    setOpen(true);
    setRoll(utils.roll(20) + modifier);
    setAbility(ability);
    setModifier(modifier > 0 ? "+" + modifier : modifier);
  };

  const handleClose = () => {
    setRoll(0);
    setModifier(0);
    setAbility(null);
    setOpen(false);
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
      </div>

      <div className="character-sheet">
        <Card className="stats">
        <h6 className="header">Level</h6>
          <div className="stat-header"> 
            <h2 className=" main-stats">{level}</h2>
          </div>

          <h6 className="header">Hit Points</h6>
          <div onClick={() => handleClick("hp")} className="stat-header">
          {editHP && (
            <InputEditStats 
              onHandleBlur={handleBlur}
              field="hp" 
              step="1"
              defaultValue={hp} />
          )}
          {!editHP && (
            <TooltipEdit field={hp} />
          )}
          </div>

          <h6 className="header">Armor Class</h6>
          <div onClick={() => handleClick("armor_class")} className="stat-header">
          {editAC && (
            <InputEditStats 
              onHandleBlur={handleBlur} 
              field="armor_class"
              step="1"
              defaultValue={armor_class}
            />
          )}
          {!editAC && (
            <TooltipEdit field={armor_class} />
          )}
          </div>
        </Card>

        <Card className="stats">
        <h6 className="header">Speed</h6>
          <div onClick={() => handleClick("speed")} className="stat-header"> 
          {editSpeed && (
            <InputEditStats 
              onHandleBlur={handleBlur} 
              field="speed"
              step="1"
              min="0"
              defaultValue={speed}
            />
          )}
          {!editSpeed && (
            <TooltipEdit field={speed} />
          )}
          </div>

          <TooltipRoll 
            modifier={initiative} 
            ability={"initiative"} 
            name={"Initiative"} 
            header
            onHandleOpen={handleOpen} 
          />
          <div onClick={() => handleClick("initiative")} className="stat-header"> 
            {editInitiative && (
              <InputEditStats 
                onHandleBlur={handleBlur} 
                field="initiative"
                step="1"
                defaultValue={initiative}
              />
            )}
            {!editInitiative && (
              <TooltipEdit field={checkInitiative(initiative)} />
            )}
          </div>

          <h6 className="header">Proficiency Bonus</h6>
            <div className="stat-header" onClick={() => handleClick("bonus")} >
              <h2 className="main-stats">{checkProfBonus(level)}</h2>
            </div>
        </Card>

        <Card className="str stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={utils.getBaseMod(str)} 
              ability={"str"} 
              name={"Strength"} 
              header
              onHandleOpen={handleOpen} 
            />
            <div onClick={() => handleClick("str")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
                className="str"
              >
                {editStr && (
                  <InputEditStats 
                    onHandleBlur={handleBlur} 
                    field="str"
                    step="1"
                    min="0"
                    max="20"
                    defaultValue={str} 
                  />
                )}
                {!editStr && (
                  <>
                    <TooltipEdit field={str} />
                    <h6 className="stat-mod">{checkBaseMod(str)}</h6>
                  </>
                )}
              </FlexBox>
            </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "str_save")}
                  field={"str_save"} 
                  proficiencies={character.proficiency} 
                  onHandleChange={handleChange} 
                />
                <span className="stat">
                  <TooltipRoll 
                  modifier={utils.getAbilityMod(character, level, "str_save")}
                  ability={"Strength Save"}
                  name={"Saving Throw"}
                  header={false}
                  onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "athletics")}
                  field={"athletics"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "athletics")}
                    ability={"Athletics"}
                    name={"Athletics"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              </div>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="dex stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={utils.getBaseMod(dex)}
              ability={"Dexterity"}
              name={"Dexterity"}
              header
              onHandleOpen={handleOpen} 
            />
            <div onClick={() => handleClick("dex")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
                className="dex"
              >
              {editDex && (
                <InputEditStats 
                  onHandleBlur={handleBlur} 
                  field="dex"
                  step="1"
                  min="0"
                  max="20"
                  defaultValue={dex} />
              )}
              {!editDex && (
                <>
                  <TooltipEdit field={dex} />
                  <h6 className="stat-mod">{checkBaseMod(dex)}</h6>
                </>
              )}
              </FlexBox>
            </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "dex_save")}
                  field={"dex_save"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "dex_save")}
                    ability={"Dexterity Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "acrobatics")}
                  field={"acrobatics"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "acrobatics")}
                    ability={"Acrobatics"}
                    name={"Acrobatics"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "sleight of hand")}
                  field={"sleight_of_hand"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "sleight of hand")}
                    ability={"Sleight of Hand"}
                    name={"Sleight of Hand"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "stealth")}
                  field={"stealth"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "stealth")}
                    ability={"Stealth"}
                    name={"Stealth"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              </div>
            </FlexBox>
          </FlexBox>
        </Card>
        
        <Card className="con stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={utils.getBaseMod(con)}
              ability={"Constitution"}
              name={"Constitution"}
              header
              onHandleOpen={handleOpen} 
            />
            <div onClick={() => handleClick("con")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
                className="con"
              >
              {editCon && (
                <InputEditStats 
                  onHandleBlur={handleBlur} 
                  field="con"
                  step="1"
                  min="0"
                  max="20"
                  defaultValue={con} />
              )}
              {!editCon && (
                <>
                  <TooltipEdit field={con} />
                  <h6 className="stat-mod">{checkBaseMod(int)}</h6>
                </>
              )}
              </FlexBox>
            </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "con_save")}
                  field={"con_save"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "con_save")}
                    ability={"Constitution Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
            </div>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="int stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={utils.getBaseMod(int)}
              ability={"Intelligence"}
              name={"Intelligence"}
              header
              onHandleOpen={handleOpen} 
            />
            <div onClick={() => handleClick("int")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
                className="int"
              >
              {editInt && (
                <InputEditStats 
                  onHandleBlur={handleBlur} 
                  field="int"
                  step="1"
                  min="0"
                  max="20"
                  defaultValue={int} 
                />
              )}
              {!editInt && (
                <>
                  <TooltipEdit field={int} />
                  <h6 className="stat-mod">{checkBaseMod(int)}</h6>
                </>
              )}
              </FlexBox>
            </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "int_save")}
                  field={"int_save"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "int_save")}
                    ability={"Intelligence Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "arcana")}
                  field={"arcana"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "arcana")}
                    ability={"Arcana"}
                    name={"Arcana"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "history")}
                  field={"history"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "history")}
                    ability={"History"}
                    name={"History"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "investigation")}
                  field={"investigation"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "investigation")}
                    ability={"Investigation"}
                    name={"Investigation"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "nature")}
                  field={"nature"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "nature")}
                    ability={"Nature"}
                    name={"Nature"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "religion")}
                  field={"religion"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "religion")}
                    ability={"Religion"}
                    name={"Religion"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
            </div>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="wis stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={utils.getBaseMod(wis)}
              ability={"Wisdom"}
              name={"Wisdom"}
              header
              onHandleOpen={handleOpen} 
            />
            <div onClick={() => handleClick("wis")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
                className="wis"
              >
              {editWis && (
                <InputEditStats 
                  onHandleBlur={handleBlur} 
                  field="wis"
                  step="1"
                  min="0"
                  max="20"
                  defaultValue={wis} 
                />
              )}
              {!editWis && (
                <>
                  <TooltipEdit field={wis} />
                  <h6 className="stat-mod">{checkBaseMod(wis)}</h6>
                </>
              )}
              </FlexBox>
            </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "wis_save")}
                  field={"wis_save"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "wis_save")}
                    ability={"Wisdom Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "animal handling")}
                  field={"animal_handling"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "animal handling")}
                    ability={"Animal Handling"}
                    name={"Animal Handling"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "insight")}
                  field={"insight"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "insight")}
                    ability={"Insight"}
                    name={"Insight"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "medicine")}
                  field={"medicine"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "medicine")}
                    ability={"Medicine"}
                    name={"Medicine"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "perception")}
                  field={"perception"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "perception")}
                    ability={"Perception"}
                    name={"Perception"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "survival")}
                  field={"survival"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "survival")}
                    ability={"Survival"}
                    name={"Survival"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
            </div>
            </FlexBox>
          </FlexBox>
        </Card>
          
          <Card className="cha stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={utils.getBaseMod(cha)}
              ability={"Charisma"}
              name={"Charisma"}
              header
              onHandleOpen={handleOpen} 
            />
            <div onClick={() => handleClick("cha")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
                className="cha"
              >
              {editCha && (
                <InputEditStats 
                  onHandleBlur={handleBlur} 
                  field="cha"
                  step="1"
                  min="0"
                  max="20"
                  defaultValue={cha} 
                />
              )}
              {!editCha && (
                < >
                  <TooltipEdit field={cha} />
                  <h6 className="stat-mod">{checkBaseMod(cha)}</h6>
                </>
              )}
              </FlexBox>
            </div>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <div className="stat border ability">
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "cha_save")}
                  field={"cha_save"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "cha_save")}
                    ability={"Charisma Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "deception")}
                  field={"deception"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "deception")}
                    ability={"Deception"}
                    name={"Deception"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "intimidation")}
                  field={"intimidation"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "intimidation")}
                    ability={"Intimidation"}
                    name={"Intimidation"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "performance")}
                  field={"performance"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "performance")}
                    ability={"Performance"}
                    name={"Performance"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <CharacterProficiencies 
                  modifier={checkAbilityMod(character, level, "persuasion")}
                  field={"persuasion"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={utils.getAbilityMod(character, level, "persuasion")}
                    ability={"Persuasion"}
                    name={"Persuasion"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
            </div>
            </FlexBox>
          </FlexBox>
        </Card>

        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
              timeout: 500,
          }}
        >
          <FlexBox
              alignItems="center"
              justifyContent="center"
              margin="35vh 0"
          >
              <Fade in={open}>
                  <FadeStyle>
                      <h2>{ability}</h2>
                      <h1 className={checkRoll(roll, modifier)}>{roll}</h1>
                      <h5>({modifier})</h5>

                      <button 
                          onClick={handleClose}
                          style={ButtonStyle.modalButton}
                      >
                          EXIT
                      </button>
                  </FadeStyle>
              </Fade>
          </FlexBox>
        </Modal>

      </div>
    </>
  );
};
