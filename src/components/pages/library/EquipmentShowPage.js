import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import utils from '../../../js/utils';
import Library from '../../../api/library';
import { BackgroundImage } from '../../styles/Image';
import Container, { Layout } from '../../styles/Container';
import { Heading, Text } from '../../styles/Typography';
import { CircularProgress } from '@material-ui/core';

const EquipmentShowPage = props => {
  const [equipment, setEquipment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Library
      .oneEquipment(props.match.params.slug)
      .then(equipment => {
        setEquipment(equipment);
        setIsLoading(false);
      })
  }, [props.match.params.slug]);

  if (isLoading) return (<CircularProgress variant="determinate" />);

  const { armor_class, str_minimum, stealth_disadvantage, damage, speed, capacity, weight, cost, desc } = equipment;

  const weapon_cat = [
    {
      name: "Damage Dice",
      content: damage && damage.damage_dice
    },
    {
      name: "Damage Bonus",
      content: damage && damage.damage_bonus ? damage.damage_bonus: "No"
    },
    {
      name: "Damage Type",
      content: damage && damage.damage_type_name
    }
  ];

  const armor_cat = [
    {
      name: "Armor Class",
      content: armor_class ? armor_class.base : null
    },
    {
      name: "Dexterity Bonus",
      content: armor_class && armor_class.dex_bonus ? "Yes" : "No"
    },
    {
      name: "Maximum Bonus",
      content: armor_class && armor_class.max_bonus ? "Yes" : "No"
    },
    {
      name: "Strength Minimum",
      content: armor_class && str_minimum ? str_minimum : "No"
    },
    {
      name: "Stealth Disadvantage",
      content: armor_class && stealth_disadvantage ? "Yes" : "No"
    }
  ];

  const mv_cat = [
    {
      name: "Speed",
      content: `${speed ? speed.quantity: null} ${speed ? speed.unit : null}`
    },
    {
      name: "Capacity",
      content: capacity
    }
  ];

  const cats = [{name: "Weapon", content: weapon_cat}, {name: "Armor", content: armor_cat}, {name: "Mounts and Vehicles", content: mv_cat}];

  return (
    <BackgroundImage
      image="https://i.ibb.co/cctCwgk/d20.png"
      light
    >
      <Layout>
        <Container className="equipment-name">
          <Heading>{equipment.name}</Heading>
          <Text className="category"><em>{equipment.equipment_category}, {utils.getCategory(equipment)}</em></Text>
        </Container>

        {cats.map(category => (
          <Container 
            key={category.name} 
            className={equipment.equipment_category === category.name ? null : "hidden"}
          >
            {category.content.map(cat => (
              <Text key={cat.name}><strong>{cat.name}:</strong> {cat.content}</Text>
            ))}
          </Container>
        ))}

        <Container className={equipment.gear_category === "Equipment Pack" ? null : "hidden"}>
          <Heading as="h3">Contents:</Heading>
          {equipment.contents ? equipment.contents.map(item => (
            <Container key={item.slug} className="list-item">• <Link to={`/libraries/equipment/${item.slug}`}>{item.name}</Link></Container>
          )) : null}
        </Container>

        <Text><strong>Weight:</strong> {weight} lb.</Text>
        <Text><strong>Cost:</strong> {cost.quantity} {cost.unit}</Text>

        <Container className={equipment.desc ? null : "hidden"}>
          <Heading as="h3">Description</Heading>
          <Text>{desc}</Text>
        </Container>
      </Layout>
    </BackgroundImage>
  );
};

export default EquipmentShowPage;
