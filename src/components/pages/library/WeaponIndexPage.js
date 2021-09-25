import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import urls from '../../../data/urls.json';
import Library from '../../../api/library';
import { BackgroundImage } from '../../styles/Image';
import { Layout } from '../../styles/Container';
import { Heading } from '../../styles/Typography';
import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const WeaponIndexPage = () => {
  const [equipments, setEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const types = ["Simple Melee", "Simple Ranged", "Martial Melee", "Martial Ranged"];

  useEffect(() => {
    Library
      .allEquipments()
      .then(equipments => { 
        setEquipments(equipments);
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
        <Heading>Weapons</Heading>

        {types.map(type => (
          <Fragment key={type}>
            <Heading as="h2">{type}</Heading>

            <List component="nav" className="list">
              {equipments.filter(equipment => {
                return equipment.equipment_category === "Weapon" && equipment.category_range === type
              }).map(weapon => (
                <Link
                 key={weapon.slug}
                 className="link"
                 to={urls.libraries.equipment.show.replace(':slug', weapon.slug)}
                >
                  <ListItem button>
                    <ListItemText primary={weapon.name} />
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

export default WeaponIndexPage;
