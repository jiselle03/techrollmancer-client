import React, { useState, useEffect } from 'react';

import Character from '../../api/character';
import CharacterStats from '../character/CharacterStats';
import CharacterSpells from '../character/CharacterSpells';
import CharacterInventory from '../character/CharacterInventory';
import CharacterFeatures from '../character/CharacterFeatures';
import CharacterTraits from '../character/CharacterTraits';
import CharacterJournal from '../character/CharacterJournal';
import { BackgroundImage } from '../styles/Image';
import Container from '../styles/Container';

import { Box, CircularProgress, Typography, Tab, Tabs, useMediaQuery } from '@material-ui/core';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

const CharacterShowPage = props => {
    const [value, setValue] = useState(0);
    const [character, setCharacter] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const ipad = useMediaQuery('(min-width: 768px)');
    const laptop = useMediaQuery('(min-width:1280px)');

    const tabs = ["STATS", "SPELLS", "INVENTORY", "FEATURES", "TRAITS", "JOURNAL"];

    const getScreenSize = () => {
      switch(true) {
        case laptop:
            return "auto auto auto 24vw";
        case ipad:
            return "auto auto auto 5vw";
        default: 
            return "auto auto auto 15vw";
      };
    };
  
    const handleRefresh = () => {
      Character.one(props.match.params.id).then(character => { 
        setCharacter(character);
      }); 
    };

    useEffect(() => {
        Character.one(props.match.params.id).then(character => { 
          setCharacter(character);
          setIsLoading(false);
        });
    }, [props.match.params.id]);
  
    if (isLoading) return(<CircularProgress variant="determinate" />);

    const handleChange = (event, newValue) => setValue(newValue);
    
    return (
      <BackgroundImage
        image="https://i.ibb.co/cctCwgk/d20.png" 
        light
      >
        <Container
          style={{
            margin: getScreenSize(),
            width: laptop ? "75vw" : "92.5vw",
          }}
          >
          <Tabs
              className="tabs"
              value={value}
              indicatorColor="secondary"
              textColor="secondary"
              onChange={handleChange}
              variant={!laptop ? "scrollable" : null}
              scrollButtons={!laptop ? "auto" : null}
          >
              {tabs.map((tab, i) => (<Tab key={i} label={tab} value={i} />))}
          </Tabs>

          <Container style={{margin: "auto 2em"}}>
            <TabPanel value={value} index={0}>
                <CharacterStats character={character} handleRefresh={handleRefresh} {...props} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CharacterSpells character={character} handleRefresh={handleRefresh} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CharacterInventory character={character} handleRefresh={handleRefresh} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <CharacterFeatures character={character} handleRefresh={handleRefresh} />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <CharacterTraits character={character} handleRefresh={handleRefresh} />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <CharacterJournal character={character} handleRefresh={handleRefresh} />
            </TabPanel>
          </Container>
        </Container>
      </BackgroundImage>
    );
};

export default CharacterShowPage;
