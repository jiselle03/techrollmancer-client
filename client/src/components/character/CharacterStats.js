import React, { useState } from 'react';

import { utils } from '../js/utils';
import { FlexBox } from '../styles/FlexBox';
import { ButtonStyle } from '../styles/ButtonStyle';
import { FadeStyle } from '../styles/FadeStyle';
import { InputEdit } from './InputEdit';

import { Backdrop, Card, Fab, Fade, Modal } from '@material-ui/core';
import { Edit } from '@material-ui/icons';

export const CharacterStats = props => {
  const [editLevel, setEditLevel] = useState(false);
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
  const [bonus, setBonus] = useState(0);
  const [ability, setAbility] = useState(null);

  let count, timeout = 0;
  const handleClick = field => {
    // cancel previous callback
    if (timeout) setTimeout(timeout);
    count++;

    // schedule new callback [timeBetweenClicks] ms after last click
    timeout = setTimeout(() => {
      if (count === 2) {
        // turn on edit mode
        switch(field) {
          case "class_1_level":
            return setEditLevel(true);
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
        };
      };

      // reset count
      count = 0;
    }, 250);
  };

  const handleBlur = field => {
    // handle saving
    console.log(field)
    // turn off edit mode
    switch(field) {
      case "class_1_level":
        return setEditLevel(false);
      case "hp":
        return setEditHP(false);
      case "armor_class":
        return setEditAC(false);
      case "initiative":
        return setEditInitiative(false);
      case "speed":
        return setEditSpeed(false);
      case "str":
        return setEditStr(false);
      case "dex":
        return setEditDex(false);
      case "con":
        return setEditCon(false);
      case "int":
        return setEditInt(false);
      case "wis":
        return setEditWis(false);
      case "cha":
        return setEditCha(false);
    };
  };
  
  const { character } = props;
  const { name, hp, armor_class, initiative, speed, str, dex, con, int, wis, cha } = character;
  const level = utils.getLevel(character);

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

  const handleOpen = (bonusNum, ability) => {
    setOpen(true);
    setRoll(utils.roll(20) + bonusNum);
    setAbility(ability);
    bonusNum > 0 ? setBonus("+" + bonusNum) : setBonus(bonusNum);
  };

  const handleClose = () => {
    setRoll(0);
    setBonus(0);
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
        <Fab color="secondary" aria-label="edit"><Edit /></Fab>
      </div>

      <div className="character-sheet">
        <Card className="stats">
        <h6 className="header">Level</h6>
          <div className="stat-header"> 
          {editLevel && (
            <InputEdit 
              onHandleBlur={handleBlur} 
              field="class_1_level"
              step="1"
              defaultValue={level}
            />
          )}
          {!editLevel && (
            <h2 onClick={() => handleClick("class_1_level")} className=" main-stats">{level}</h2>
          )}
          </div>

          <h6 className="header">Hit Points</h6>
          <div className="stat-header">
          {editHP && (
            <InputEdit 
              onHandleBlur={handleBlur}
              field="hp" 
              step="1"
              defaultValue={hp} />
          )}
          {!editHP && (
            <h2 onClick={() => handleClick("hp")} className="main-stats">{hp}</h2>
          )}
          </div>

          <h6 className="header">Armor Class</h6>
          <div className="stat-header">
          {editAC && (
            <InputEdit 
              onHandleBlur={handleBlur} 
              field="armor_class"
              step="1"
              defaultValue={armor_class}
            />
          )}
          {!editAC && (
            <h2 onClick={() => handleClick("ac")} className=" main-stats">{armor_class}</h2>
          )}
          </div>
        </Card>

        <Card className="stats">
        <h6 className="header">Speed</h6>
          <div className="stat-header"> 
          {editSpeed && (
            <InputEdit 
              onHandleBlur={handleBlur} 
              field="speed"
              step="1"
              min="0"
              defaultValue={speed}
            />
          )}
          {!editSpeed && (
            <h2 onClick={() => handleClick("speed")} className=" main-stats">{speed}</h2>
          )}
          </div>

          <h6 className="header" onClick={() => handleOpen(initiative, "Initiative")}>Initiative</h6>
          <div className="stat-header"> 
            {editInitiative && (
              <InputEdit 
                onHandleBlur={handleBlur} 
                field="initiative"
                step="1"
                defaultValue={initiative}
              />
            )}
            {!editInitiative && (
              <h2 onClick={() => handleClick("initiative")} className=" main-stats">{checkInitiative(initiative)}</h2>
            )}
          </div>

          <h6 className="header">Proficiency Bonus</h6>
            <div className="stat-header">
              <h2 onClick={() => handleClick("bonus")} className="main-stats">{checkProfBonus(level)}</h2>
          </div>

          <h6 className="header">Conditions</h6>
        </Card>

        <Card className="str stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 onClick={() => handleOpen(utils.getBaseMod(str), "Strength")} className="header">Strength</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="str"
                >
                  {editStr && (
                    <InputEdit 
                      onHandleBlur={handleBlur} 
                      field="str"
                      step="1"
                      min="0"
                      max="20"
                      defaultValue={str} 
                    />
                  )}
                  {!editStr && (
                    <h2 onClick={() => handleClick("str")} className="stat-base">{str}</h2>
                  )}
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
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "str_save"), "Strength Save")}>
                    Saving Throw
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "athletics")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "athletics"), "Athletics")}>
                    Athletics
                  </p>
                </span>
              </div>
              </div>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="dex stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 onClick={() => handleOpen(utils.getBaseMod(dex), "Dexterity")} className="header">Dexterity</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="dex"
                >
                {editDex && (
                  <InputEdit 
                    onHandleBlur={handleBlur} 
                    field="dex"
                    step="1"
                    min="0"
                    max="20"
                    defaultValue={dex} />
                )}
                {!editDex && (
                  <h2 onClick={() => handleClick("dex")} className="stat-base">{dex}</h2>
                )}
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
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "dex_save"), "Dexterity Save")}>
                    Saving Throw
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "acrobatics")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "acrobatics"), "Acrobatics")}>
                    Acrobatics
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "sleight of hand")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "sleight of hand"), "Sleight of Hand")}>
                    Sleight of Hand
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "stealth")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "stealth"), "Stealth")}>
                    Stealth
                  </p>
                </span>
              </div>
              </div>
            </FlexBox>
          </FlexBox>
        </Card>
        
        <Card className="con stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 onClick={() => handleOpen(utils.getBaseMod(con), "Constitution")} className="header">Constitution</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="con"
                >
                {editCon && (
                  <InputEdit 
                    onHandleBlur={() => handleBlur("con")} 
                    field="con"
                    step="1"
                    min="0"
                    max="20"
                    defaultValue={con} />
                )}
                {!editCon && (
                  <h2 onClick={() => handleClick("con")} className="stat-base">{con}</h2>
                )}
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
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "con_save"), "Constitution Save")}>
                    Saving Throw
                  </p>
                </span>
              </div>
            </div>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="int stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 onclick={() => handleOpen(utils.getBaseMod(int), "Intelligence")} className="header">Intelligence</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="int"
                >
                {editInt && (
                  <InputEdit 
                    onHandleBlur={() => handleBlur("int")} 
                    field="int"
                    step="1"
                    min="0"
                    max="20"
                    defaultValue={int} 
                  />
                )}
                {!editInt && (
                  <h2 onClick={() => handleClick("int")} className="stat-base">{int}</h2>
                )}
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
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "int_save"), "Intelligence Save")}>
                    Saving Throw
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "arcana")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "arcana"), "Arcana")}>
                    Arcana
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "history")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "history"), "History")}>
                    History
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "investigation")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "investigation"), "Investigation")}>
                    Investigation
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "nature")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "nature"), "Nature")}>
                    Nature
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "religion")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "religion"), "Religion")}>
                    Religion
                  </p>
                </span>
              </div>
            </div>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="wis stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 onClick={() => handleOpen(utils.getBaseMod(wis), "Wisdom")} className="header">Wisdom</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="wis"
                >
                {editWis && (
                  <InputEdit 
                    onHandleBlur={() => handleBlur("wis")} 
                    field="wis"
                    step="1"
                    min="0"
                    max="20"
                    defaultValue={wis} 
                  />
                )}
                {!editWis && (
                  <h2 onClick={() => handleClick("wis")} className="stat-base">{wis}</h2>
                )}
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
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "wis_save"), "Wisdom Save")}>
                    Saving Throw
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "animal handling")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "animal handling"), "Animal Handling")}>
                    Animal Handling
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "insight")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "insight"), "Insight")}>
                    Insight
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "medicine")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "medicine"), "Medicine")}>
                    Medicine
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "perception")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "perception"), "Perception")}>
                    Perception
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "survival")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "survival"), "Survival")}>
                    Survival
                  </p>
                </span>
              </div>
            </div>
            </FlexBox>
          </FlexBox>
        </Card>
          
          <Card className="cha stats">
          <FlexBox direction="column" justifyContent="space-between">
              <h6 onClick={() => handleOpen(utils.getBaseMod(cha), "Charisma")} className="header">Charisma</h6>
              <div className="stat-header">
                <FlexBox 
                  direction="column" 
                  alignItems="center"
                  className="cha"
                >
                {editCha && (
                  <InputEdit 
                    onHandleBlur={() => handleBlur("cha")} 
                    field="cha"
                    step="1"
                    min="0"
                    max="20"
                    defaultValue={cha} 
                  />
                )}
                {!editCha && (
                  <h2 onClick={() => handleClick("cha")} className="stat-base">{cha}</h2>
                )}
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
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "cha_save"), "Charisma Save")}>
                    Saving Throw
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "deception")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "deception"), "Deception")}>
                    Deception
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "intimidation")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "intimidation"), "Intimdation")}>
                    Intimidation
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "performance")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "performance"), "Performance")}>
                    Performance
                  </p>
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "persuasion")}</h6>
                </span>
                <span className="stat">
                  <p onClick={() => handleOpen(utils.getAbilityMod(character, level, "persuasion"), "Persuasion")}>
                    Persuasion
                  </p>
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
                      <h1 className="roll">{roll}</h1>
                      <h5>({bonus})</h5>

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
