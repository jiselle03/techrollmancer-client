import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import urls from '../../../data/urls.json';
import Library from '../../../api/library';
import { BackgroundImage } from '../../styles/Image';
import { Layout } from '../../styles/Container';
import { Heading } from '../../styles/Typography';
import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const SpellIndexPage = () => {
  const [spells, setSpells] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const types = [
    {
      int: 0,
      name: "Cantrips"
    },
    {
      int: 1,
      name: "1st Level"
    },
    {
      int: 2,
      name: "2nd Level"
    },
    {
      int: 3,
      name: "3rd Level"
    },
    {
      int: 4,
      name: "4th Level"
    },
    {
      int: 5,
      name: "5th Level"
    },
    {
      int: 6,
      name: "6th Level"
    },
    {
      int: 7,
      name: "7th Level"
    },
    {
      int: 8,
      name: "8th Level"
    },
    {
      int: 9,
      name: "9th Level"
    }
  ];

  useEffect(() => {
    Library
      .allSpells()
      .then(spells => { 
        setSpells(spells);
        setIsLoading(false);
    });
  }, []);

  if (isLoading) return (<CircularProgress variant="determinate" />);

  return (
    <BackgroundImage 
      image="https://i.ibb.co/cctCwgk/d20.png"
      light
    >
      <Layout>
        <Heading>Spells</Heading>

        {types.map(type => (
          <Fragment key={type.name}>
            <Heading as="h2">{type.name}</Heading>
            <List component="nav" className="list"> 
              {spells.filter(spell => {
                return spell.level_int === type.int
              }).map(spell => (
                <Link 
                  key={spell.slug}
                  to={urls.libraries.spells.show.replace(':slug', spell.slug)} 
                  className="link"
                >
                  <ListItem button>
                    <ListItemText primary={spell.name} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Fragment>
        ))}
      </Layout>
    </BackgroundImage>
  );
};

export default SpellIndexPage;
