import React, { useRef, useState } from 'react';

import ReactToPrint from 'react-to-print';
import CharacterStatsPrint from './CharacterStatsPrint';

import Character from '../../api/character';
import Utils from '../../js/utils';
import CharacterProficiencies from './CharacterProficiencies';
import FloatingActionButton from '../other/FloatingActionButton';
import FlexBox from '../styles/FlexBox';
import { Fade, FadeContent } from '../styles/Fade';
import { InputEditStats } from './CharacterInputEdit';
import { TooltipRoll, TooltipEdit } from './CharacterTooltips';
import { Heading } from '../styles/Typography';
import Container, { CharacterSheet } from '../styles/Container';

import { Backdrop, Button, Card, Modal } from '@material-ui/core';
import { Print } from '@material-ui/icons';

const CharacterStats = props => {
  const [edit, setEdit] = useState({
    hp: false, armor_class: false, initiative: false, speed: false, 
    str: false, dex: false, con: false, int: false, wis: false, cha: false
  });
  const [open, setOpen] = useState(false);
  const [roll, setRoll] = useState(0);
  const [modifier, setModifier] = useState(0);
  const [ability, setAbility] = useState(null);

  const { character, handleRefresh } = props;
  const { id, name, hp, armor_class, initiative, speed, str, dex, con, int, wis, cha, proficiency } = props.character;
  const level = Utils.getLevel(character);

  const handleClick = field => {
    return setEdit({...edit, [field]: true});
  };

  const handleBlur = (event, field) => {
    const { value } = event.currentTarget;

    Character.update(id, {[field]: value})
      .then(() => setEdit({ ...edit, [field]: false}))
      .then(() => handleRefresh());
  };

  const handleChange = async event => {
    const { field } = event.target.parentNode.parentNode.dataset;
    const { checked } = event.target;

    await Character.updateProf(id, proficiency.id, field, checked)
      .then(() => props.handleRefresh());
  };

  const handleDelete = async id => {
    await Character.destroy(id)
      .then(() => props.history.push("/characters"));
  };

  const checkBaseMod = stat => {
    const mod = Utils.getBaseMod(stat);
    return mod > 0 ? "+" + mod : mod;
  };

  const checkInitiative = initiative => {
    return initiative > 0 ? "+" + initiative : initiative;
  };

  const checkProfBonus = level => {
    const bonus = Utils.getProfBonus(level);
    return bonus > 0 ? "+" + bonus : bonus;
  };

  const checkRoll = (roll, modifier) => {
    if (roll - modifier === 20) {
      return "nat20 roll";
    } else if (roll - modifier === 1) {
      return "nat1 roll";
    } else {
      return "dice-roll";
    };
  };

  const handleOpen = (modifier, ability) => {
    let mod = 0
    modifier[0] === "+" ? mod = parseInt(modifier.substring(1)) : mod = parseInt(modifier);
    setOpen(true);
    setRoll(Utils.roll(20) + mod);
    setAbility(ability);
    setModifier(modifier);
  };

  const handleClose = () => {
    setRoll(0);
    setModifier(0);
    setAbility(null);
    setOpen(false);
  };

  const componentRef = useRef();
  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, []);

  return (
    <>
      <Heading bottom="0.25em">{name}</Heading>

      <Container textAlign="right" marginRight="1.5em">
        <ReactToPrint
          trigger={() => <Button variant="contained"><Print /></Button>}
          documentTitle={character.name}
          content={reactToPrintContent}
        />
        <Container hidden><CharacterStatsPrint character={character} ref={componentRef} /></Container>
      </Container>

      <CharacterSheet>

        <FloatingActionButton icon="delete" character={character} onHandleDelete={handleDelete}/>

        <Card className="stats">
          <Heading as="h6" className="header">Level</Heading>
          <Container className="stat-header"> 
            <Heading as="h2" className="main-stats">{level}</Heading>
          </Container>

          <Heading as="h6" className="header">Hit Points</Heading>
          <Container onClick={() => handleClick("hp")} className="stat-header">
          {edit.hp && (
            <InputEditStats 
              onHandleBlur={handleBlur}
              field="hp" 
              step="1"
              defaultValue={hp} />
          )}
          {!edit.hp && (
            <TooltipEdit field={hp} />
          )}
          </Container>

          <Heading as="h6" className="header">Armor Class</Heading>
          <Container onClick={() => handleClick("armor_class")} className="stat-header">
          {edit.armor_class && (
            <InputEditStats 
              onHandleBlur={handleBlur} 
              field="armor_class"
              step="1"
              defaultValue={armor_class}
            />
          )}
          {!edit.armor_class && (
            <TooltipEdit field={armor_class} />
          )}
          </Container>
        </Card>

        <Card className="stats">
        <Heading as="h6" className="header">Speed</Heading>
          <Container onClick={() => handleClick("speed")} className="stat-header"> 
          {edit.speed && (
            <InputEditStats 
              onHandleBlur={handleBlur} 
              field="speed"
              step="1"
              min="0"
              defaultValue={speed}
            />
          )}
          {!edit.speed && (
            <TooltipEdit field={speed} />
          )}
          </Container>

          <TooltipRoll 
            modifier={initiative} 
            ability={"initiative"} 
            name={"Initiative"} 
            header
            onHandleOpen={handleOpen} 
          />
          <Container onClick={() => handleClick("initiative")} className="stat-header"> 
            {edit.initiative && (
              <InputEditStats 
                onHandleBlur={handleBlur} 
                field="initiative"
                step="1"
                defaultValue={initiative}
              />
            )}
            {!edit.initiative && (
              <TooltipEdit field={checkInitiative(initiative)} />
            )}
          </Container>

          <Heading as="h6" className="header">Proficiency Bonus</Heading>
            <Container className="stat-header" onClick={() => handleClick("bonus")} >
              <Heading as="h2" className="main-stats">{checkProfBonus(level)}</Heading>
            </Container>
        </Card>

        <Card className="stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={Utils.getBaseMod(str)} 
              ability={"str"} 
              name={"Strength"} 
              header
              onHandleOpen={handleOpen} 
            />
            <Container onClick={() => handleClick("str")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
              >
                {edit.str && (
                  <InputEditStats 
                    onHandleBlur={handleBlur} 
                    field="str"
                    step="1"
                    min="0"
                    max="20"
                    defaultValue={str} 
                  />
                )}
                {!edit.str && (
                  <>
                    <TooltipEdit field={str} />
                    <Heading as="h6" className="stat-mod">{checkBaseMod(str)}</Heading>
                  </>
                )}
              </FlexBox>
            </Container>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <Container className="stat border ability">
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "str_save", "str")}
                  field={"str_save"} 
                  proficiencies={character.proficiency} 
                  onHandleChange={handleChange} 
                />
                <span className="stat">
                  <TooltipRoll 
                  modifier={Utils.getAbilityMod(character, level, "str_save", "str")}
                  ability={"Strength Save"}
                  name={"Saving Throw"}
                  header={false}
                  onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "athletics", "str")}
                  field={"athletics"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "athletics", "str")}
                    ability={"Athletics"}
                    name={"Athletics"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              </Container>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={Utils.getBaseMod(dex)}
              ability={"Dexterity"}
              name={"Dexterity"}
              header
              onHandleOpen={handleOpen} 
            />
            <Container onClick={() => handleClick("dex")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
              >
              {edit.dex && (
                <InputEditStats 
                  onHandleBlur={handleBlur} 
                  field="dex"
                  step="1"
                  min="0"
                  max="20"
                  defaultValue={dex} />
              )}
              {!edit.dex && (
                <>
                  <TooltipEdit field={dex} />
                  <Heading as="h6" className="stat-mod">{checkBaseMod(dex)}</Heading>
                </>
              )}
              </FlexBox>
            </Container>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <Container className="stat border ability">
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "dex_save", "dex")}
                  field={"dex_save"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "dex_save", "dex")}
                    ability={"Dexterity Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "acrobatics", "dex")}
                  field={"acrobatics"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "acrobatics", "dex")}
                    ability={"Acrobatics"}
                    name={"Acrobatics"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "sleight_of_hand", "dex")}
                  field={"sleight_of_hand"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "sleight_of_hand", "dex")}
                    ability={"Sleight of Hand"}
                    name={"Sleight of Hand"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "stealth", "dex")}
                  field={"stealth"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "stealth", "dex")}
                    ability={"Stealth"}
                    name={"Stealth"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              </Container>
            </FlexBox>
          </FlexBox>
        </Card>
        
        <Card className="stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={Utils.getBaseMod(con)}
              ability={"Constitution"}
              name={"Constitution"}
              header
              onHandleOpen={handleOpen} 
            />
            <Container onClick={() => handleClick("con")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
              >
              {edit.con && (
                <InputEditStats 
                  onHandleBlur={handleBlur} 
                  field="con"
                  step="1"
                  min="0"
                  max="20"
                  defaultValue={con} />
              )}
              {!edit.con && (
                <>
                  <TooltipEdit field={con} />
                  <Heading as="h6" className="stat-mod">{checkBaseMod(con)}</Heading>
                </>
              )}
              </FlexBox>
            </Container>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <Container className="stat border ability">
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "con_save", "con")}
                  field={"con_save"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "con_save", "con")}
                    ability={"Constitution Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
            </Container>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={Utils.getBaseMod(int)}
              ability={"Intelligence"}
              name={"Intelligence"}
              header
              onHandleOpen={handleOpen} 
            />
            <Container onClick={() => handleClick("int")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
              >
              {edit.int && (
                <InputEditStats 
                  onHandleBlur={handleBlur} 
                  field="int"
                  step="1"
                  min="0"
                  max="20"
                  defaultValue={int} 
                />
              )}
              {!edit.int && (
                <>
                  <TooltipEdit field={int} />
                  <Heading as="h6" className="stat-mod">{checkBaseMod(int)}</Heading>
                </>
              )}
              </FlexBox>
            </Container>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <Container className="stat border ability">
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "int_save", "int")}
                  field={"int_save"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "int_save", "int")}
                    ability={"Intelligence Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "arcana", "int")}
                  field={"arcana"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "arcana", "int")}
                    ability={"Arcana"}
                    name={"Arcana"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "history", "int")}
                  field={"history"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "history", "int")}
                    ability={"History"}
                    name={"History"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "investigation", "int")}
                  field={"investigation"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "investigation", "int")}
                    ability={"Investigation"}
                    name={"Investigation"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "nature", "int")}
                  field={"nature"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "nature", "int")}
                    ability={"Nature"}
                    name={"Nature"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "religion", "int")}
                  field={"religion"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "religion", "int")}
                    ability={"Religion"}
                    name={"Religion"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
            </Container>
            </FlexBox>
          </FlexBox>
        </Card>

        <Card className="stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={Utils.getBaseMod(wis)}
              ability={"Wisdom"}
              name={"Wisdom"}
              header
              onHandleOpen={handleOpen} 
            />
            <Container onClick={() => handleClick("wis")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
              >
              {edit.wis && (
                <InputEditStats 
                  onHandleBlur={handleBlur} 
                  field="wis"
                  step="1"
                  min="0"
                  max="20"
                  defaultValue={wis} 
                />
              )}
              {!edit.wis && (
                <>
                  <TooltipEdit field={wis} />
                  <Heading as="h6" className="stat-mod">{checkBaseMod(wis)}</Heading>
                </>
              )}
              </FlexBox>
            </Container>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <Container className="stat border ability">
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "wis_save", "wis")}
                  field={"wis_save"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "wis_save", "wis")}
                    ability={"Wisdom Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "animal_handling", "wis")}
                  field={"animal_handling"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "animal_handling", "wis")}
                    ability={"Animal Handling"}
                    name={"Animal Handling"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "insight", "wis")}
                  field={"insight"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "insight", "wis")}
                    ability={"Insight"}
                    name={"Insight"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "medicine", "wis")}
                  field={"medicine"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "medicine", "wis")}
                    ability={"Medicine"}
                    name={"Medicine"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "perception", "wis")}
                  field={"perception"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "perception", "wis")}
                    ability={"Perception"}
                    name={"Perception"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "survival", "wis")}
                  field={"survival"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "survival", "wis")}
                    ability={"Survival"}
                    name={"Survival"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
            </Container>
            </FlexBox>
          </FlexBox>
        </Card>
          
          <Card className="stats">
          <FlexBox direction="column" justifyContent="space-between">
            <TooltipRoll 
              modifier={Utils.getBaseMod(cha)}
              ability={"Charisma"}
              name={"Charisma"}
              header
              onHandleOpen={handleOpen} 
            />
            <Container onClick={() => handleClick("cha")} className="stat-header">
              <FlexBox 
                direction="column" 
                alignItems="center"
              >
              {edit.cha && (
                <InputEditStats 
                  onHandleBlur={handleBlur} 
                  field="cha"
                  step="1"
                  min="0"
                  max="20"
                  defaultValue={cha} 
                />
              )}
              {!edit.cha && (
                <>
                  <TooltipEdit field={cha} />
                  <Heading as="h6" className="stat-mod">{checkBaseMod(cha)}</Heading>
                </>
              )}
              </FlexBox>
            </Container>
              
            <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
            <Container className="stat border ability">
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "cha_save", "cha")}
                  field={"cha_save"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "cha_save", "cha")}
                    ability={"Charisma Save"}
                    name={"Saving Throw"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "deception", "cha")}
                  field={"deception"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "deception", "cha")}
                    ability={"Deception"}
                    name={"Deception"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "intimidation", "cha")}
                  field={"intimidation"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "intimidation", "cha")}
                    ability={"Intimidation"}
                    name={"Intimidation"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "performance", "cha")}
                  field={"performance"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "performance", "cha")}
                    ability={"Performance"}
                    name={"Performance"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
              <Container className="stat-container">
                <CharacterProficiencies 
                  modifier={Utils.getAbilityMod(character, level, "persuasion", "cha")}
                  field={"persuasion"} 
                  proficiencies={character.proficiency} 
                  onHandleOpen={handleOpen} 
                  onHandleChange={handleChange} 
                  />
                <span className="stat">
                  <TooltipRoll 
                    modifier={Utils.getAbilityMod(character, level, "persuasion", "cha")}
                    ability={"Persuasion"}
                    name={"Persuasion"}
                    header={false}
                    onHandleOpen={handleOpen} 
                  />
                </span>
              </Container>
            </Container>
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
          <Fade in={open} margin="25vh 0">
            <FadeContent>
              <Heading as="h2" className="ability">{ability}</Heading>
              <Container className="dice-roll-container">
                <Heading as="h5" className={checkRoll(roll, modifier)}>{roll > 10 ? roll : `\u00A0${roll}`}</Heading>
                <i className="fas fa-dice-d20 fa-10x fa-spin-roll"></i>
              </Container>
              <Heading as="h5">({modifier})</Heading>

              <Button 
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                  className="button"
              >
                  EXIT
              </Button>
            </FadeContent>
          </Fade>
        </Modal>

      </CharacterSheet>
    </>
  );
};

export default CharacterStats;
