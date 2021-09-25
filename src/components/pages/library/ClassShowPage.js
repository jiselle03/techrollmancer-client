import React, { Fragment, useState, useEffect } from 'react';
import utils from '../../../js/utils';
import Library from '../../../api/library';
import { BackgroundImage } from '../../styles/Image';
import { Layout } from '../../styles/Container';
import { Heading, Text } from '../../styles/Typography';
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const ClassShowPage = props => {
  const [oneClass, setOneClass] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { getClassImage, getClassSize, getBlurb, getCols } = utils;

  const getColNames = oneClass => {
    const cols = getCols(oneClass);
    let colNames = [];
    for (let i = 0; i < cols; i++) {
      colNames.push(oneClass.table[i]);
    };
    return colNames;
  };

  const getRow = i => {
    const cols = getCols(oneClass);
    const start = i * cols;
    const end = i * cols + cols;
    return oneClass.table.slice(start, end);
  };

  const findNodes = () => {
    const nodes = document.querySelectorAll("em");
    let slug = "";
    nodes.forEach((node) => {
      slug = node.innerText.split(" ").join("-");
      Library.oneSpell(slug).then(spell => {
        return node.outerHTML=`
          <div class="tooltip">${spell.name}
            <span class="tooltiptext">
              <p><strong>${spell.name}</strong> | <em>${spell.school}</em></p>
              <p>${spell.desc}</p>
            </span>
          </div>
        `    
      });
    });
  };

  useEffect(() => {
    Library
      .oneClass(props.match.params.slug)
      .then(oneClass => {
        setOneClass(oneClass);
      })
      .then(() => {
        findNodes();
        setIsLoading(false);
      });
  }, [props.match.params.slug]);

  if (isLoading) return (<CircularProgress variant="determinate" />);

  const { slug, name, hit_dice, hp_at_1st_level, hp_at_higher_levels, 
          prof_armor, prof_weapons, prof_tools, prof_skills, 
          desc, equipment, spellcasting_ability
        } = oneClass;

  const hp_cat = [
    {
      name: "Hit Dice",
      content: `${hit_dice} per ${name} level`
    },
    {
      name: "HP at 1st Level",
      content: hp_at_1st_level
    },
    {
      name: "HP at Higher Levels",
      content: hp_at_higher_levels
    }
  ];

  const prof_cat = [
    {
      name: "Armor",
      content: prof_armor
    },
    {
      name: "Weapons",
      content: prof_weapons
    },
    {
      name: "Tools",
      content: prof_tools
    },
    {
      name: "Skills",
      content: prof_skills
    }
  ];

  const categories = [
    {
      name: "Hit Points",
      content: hp_cat
    },
    {
      name: "Proficiencies",
      content: prof_cat
    }
  ];

  return (
    <BackgroundImage
      image={getClassImage(slug)}
      size={getClassSize(slug)}
    >
      <Layout>
        <Heading>{name.toUpperCase()}</Heading>
        <Text>
          As a {name}, you gain the following class features:
        </Text>
                
        {categories.map(category => (
          <Fragment key={category.name}>
            <Heading as="h2">{category.name}</Heading>

            {category.content.map(cat => (
              <Text key={cat.name}><strong>{cat.name}: </strong>{cat.content}</Text>
            ))}
          </Fragment>
        ))}

        <Text className={spellcasting_ability ? null : "hidden"}>
          <strong>Spellcasting Ability:</strong> {spellcasting_ability}<br />
        </Text>
                
        <Text dangerouslySetInnerHTML={{
          __html: getBlurb(desc)
        }}></Text>
                
        <Heading as="h2">Equipment</Heading>
        <Text dangerouslySetInnerHTML={{
          __html: getBlurb(equipment)
        }}></Text>

        <Heading as="h2">{name} Table</Heading>
        <TableContainer component={Paper}>
          <Table className="table" aria-label="simple table">
            <TableHead>
              <TableRow>
                {oneClass && getColNames(oneClass).map((col, i) => (
                  <TableCell key={i} className="table-header">{col}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({length: 21}, (x,i) => i).map(i => (
                <TableRow key={i + 1}>
                  {oneClass && getRow(i + 1, oneClass).map((row, index) => (
                    <TableCell component="th" scope="row" key={index}>
                      {row}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Layout>
    </BackgroundImage>
  );
};

export default ClassShowPage;
