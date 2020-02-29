import React, { useState } from 'react';

import { Character } from '../../api/character';
import { utils } from '../js/utils';
import { FlexBox } from '../styles/FlexBox';
import { ButtonStyle } from '../styles/ButtonStyle';
import { Fade, FadeStyle } from '../styles/FadeStyle';
import { InputEditStats } from './InputEdit';
import { TooltipRoll } from './CharacterTooltips';

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
  const [bonus, setBonus] = useState(0);
  const [ability, setAbility] = useState(null);

  const { character, handleRefresh } = props;
  const { id, name, hp, armor_class, initiative, speed, str, dex, con, int, wis, cha } = character;
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
    };
  };

  const handleBlur = (event, field) => {
    const { currentTarget } = event;

    switch(field) {
      case "hp":
        Character.update(id, {hp: currentTarget.value})
          .then(() => {
              setEditHP(false);
            }).then(() => {
              handleRefresh();
            });
        break;
      case "armor_class":
        Character.update(id, {armor_class: currentTarget.value})
          .then(() => {
              setEditAC(false);
            }).then(() => {
              handleRefresh()
            });
        break;
      case "initiative":
        Character.update(id, {initiative: currentTarget.value})
          .then(() => {
            setEditInitiative(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "speed":
        Character.update(id, {speed: currentTarget.value})
          .then(() => {
            setEditSpeed(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "str":
        Character.update(id, {str: currentTarget.value})
          .then(() => {
            setEditStr(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "dex":
        Character.update(id, {dex: currentTarget.value})
          .then(() => {
            setEditDex(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "con":
        Character.update(id, {con: currentTarget.value})
          .then(() => {
            setEditCon(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "int":
        Character.update(id, {int: currentTarget.value})
          .then(() => {
            setEditInt(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "wis":
        Character.update(id, {wis: currentTarget.value})
          .then(() => {
            setEditWis(false);
          }).then(() => {
            handleRefresh();
          });
        break;
      case "cha":
        Character.update(id, {cha: currentTarget.value})
          .then(() => {
            setEditCha(false);
          }).then(() => {
            handleRefresh();
          });
        break;
    };
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
      </div>

      <div className="character-sheet">
        <Card className="stats">
        <h6 className="header">Level</h6>
          <div className="stat-header"> 
            <h2 className=" main-stats">{level}</h2>
          </div>

          <h6 className="header">Hit Points</h6>
          <div className="stat-header">
          {editHP && (
            <InputEditStats 
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
            <InputEditStats 
              onHandleBlur={handleBlur} 
              field="armor_class"
              step="1"
              defaultValue={armor_class}
            />
          )}
          {!editAC && (
            <h2 onClick={() => handleClick("armor_class")} className=" main-stats">{armor_class}</h2>
          )}
          </div>
        </Card>

        <Card className="stats">
        <h6 className="header">Speed</h6>
          <div className="stat-header"> 
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
            <h2 onClick={() => handleClick("speed")} className=" main-stats">{speed}</h2>
          )}
          </div>

          <TooltipRoll 
            bonus={initiative} 
            ability={"initiative"} 
            name={"Initiative"} 
            header
            onHandleOpen={handleOpen} 
          />
          <div className="stat-header"> 
            {editInitiative && (
              <InputEditStats 
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
        </Card>

        <Card className="str stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              bonus={str} 
              ability={"str"} 
              name={"Strength"} 
              header
              onHandleOpen={handleOpen} 
            />
            <div className="stat-header">
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
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "str_save")}
                    ability={"Strength Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "athletics")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "athletics")}
                    ability={"athletics"}
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
              bonus={utils.getBaseMod(dex)}
              ability={"Dexterity"}
              name={"Dexterity"}
              header
              onHandleOpen={handleOpen} 
            />
            <div className="stat-header">
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
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "dex_save")}
                    ability={"Dexterity Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "acrobatics")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "acrobatics")}
                    ability={"Acrobatics"}
                    name={"Acrobatics"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "sleight of hand")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "sleight of hand")}
                    ability={"Sleight of Hand"}
                    name={"Sleight of Hand"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "stealth")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "stealth")}
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
              bonus={utils.getBaseMod(con)}
              ability={"Constitution"}
              name={"Constitution"}
              header
              onHandleOpen={handleOpen} 
            />
            <div className="stat-header">
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
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "con_save")}
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
              bonus={utils.getBaseMod(int)}
              ability={"Intelligence"}
              name={"Intelligence"}
              header
              onHandleOpen={handleOpen} 
            />
            <div className="stat-header">
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
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "int_save")}
                    ability={"Intelligence Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "arcana")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "arcana")}
                    ability={"Arcana"}
                    name={"Arcana"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "history")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "history")}
                    ability={"History"}
                    name={"History"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "investigation")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "investigation")}
                    ability={"Investigation"}
                    name={"Investigation"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "nature")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "nature")}
                    ability={"Nature"}
                    name={"Nature"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "religion")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "religion")}
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
              bonus={utils.getBaseMod(wis)}
              ability={"Wisdom"}
              name={"Wisdom"}
              header
              onHandleOpen={handleOpen} 
            />
            <div className="stat-header">
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
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "wis_save")}
                    ability={"Wisdom Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "animal handling")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "animal handling")}
                    ability={"Animal Handling"}
                    name={"Animal Handling"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "insight")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "insight")}
                    ability={"Insight"}
                    name={"Insight"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "medicine")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "medicine")}
                    ability={"Medicine"}
                    name={"Medicine"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "perception")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "perception")}
                    ability={"Perception"}
                    name={"Perception"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "survival")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "survival")}
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
              bonus={utils.getBaseMod(cha)}
              ability={"Charisma"}
              name={"Charisma"}
              header
              onHandleOpen={handleOpen} 
            />
            <div className="stat-header">
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
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "cha_save")}
                    ability={"Charisma Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "deception")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "deception")}
                    ability={"Deception"}
                    name={"Deception"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "intimidation")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "intimidation")}
                    ability={"Intimidation"}
                    name={"Intimidation"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "performance")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "performance")}
                    ability={"Performance"}
                    name={"Performance"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </div>
              <div className="stat-container">
                <span className="stat">
                  <h6>{checkAbilityMod(character, level, "persuasion")}</h6>
                </span>
                <span className="stat">
                  <TooltipRoll 
                    bonus={utils.getAbilityMod(character, level, "persuasion")}
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
