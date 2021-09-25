import React, { useRef, useState } from 'react';

import ReactToPrint from 'react-to-print';
import CharacterStatsPrint from './CharacterStatsPrint';

import Character from '../../api/character';
import { statFields } from '../../data/characterFields';
import stats from '../../js/stats';
import dice from '../../js/dice';
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

const BaseMod = ({ stat }) => {
  const mod = stats.getBaseMod(stat);

  return (
    <Heading as="h6" className="stat-mod">{mod > 0 ? `+${mod}` : mod}</Heading>
  );
};

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
  const level = stats.getLevel(character);

  const fields = statFields(str, dex, con, int, wis, cha);
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

  const checkInitiative = initiative => {
    return initiative > 0 ? "+" + initiative : initiative;
  };

  const checkProfBonus = level => {
    const bonus = stats.getProfBonus(level);
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
    setOpen(true);
    setRoll(dice.roll(20) + modifier);
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

        {fields.map(field => (
          <Card
            key={field.stat}
            className="stats"
          >
            <FlexBox direction="column" justifyContent="space-between">
              <TooltipRoll 
                modifier={stats.getBaseMod(field.stat)} 
                ability={field.stat} 
                name={field.label} 
                header
                onHandleOpen={handleOpen} 
              />

              <Container onClick={() => handleClick(field.name)} className="stat-header">
                <FlexBox direction="column" alignItems="center">
                  {edit[field.name] && (
                    <InputEditStats 
                      onHandleBlur={handleBlur} 
                      field={field.name}
                      step="1"
                      min="0"
                      max="20"
                      defaultValue={field.stat} 
                    />
                  )}
                  {!edit[field.name] && (
                    <>
                      <TooltipEdit field={field.stat} />
                      <BaseMod stat={field.stat} />
                    </>
                  )}
                </FlexBox>
              </Container>

              <FlexBox direction="column" style={{width: "60%", height: "5em"}}>
                <Container className="stat border ability">
                  {field?.abilities?.map(ability => (
                    <Container
                      key={ability.stat}
                      className="stat-container"
                    >
                      <CharacterProficiencies 
                        modifier={stats.getAbilityMod(character, level, ability.stat, field.name)}
                        field={ability.stat} 
                        proficiencies={character.proficiency} 
                        onHandleChange={handleChange} 
                      />
                      <span className="stat">
                        <TooltipRoll 
                        modifier={stats.getAbilityMod(character, level, ability.stat, field.name)}
                        ability={ability.name}
                        name={ability.label}
                        header={false}
                        onHandleOpen={handleOpen} 
                        />
                      </span>
                    </Container>
                  ))}
                  </Container>
                </FlexBox>
            </FlexBox>
          </Card>
        ))}
    
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
