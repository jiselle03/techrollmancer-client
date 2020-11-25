import React, { useState, useEffect } from 'react';

import Utils from '../../js/utils';
import Library from '../../api/library';
import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';
import TableStyle from '../styles/TableStyle';

import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const ClassShowPage = props => {
    const [oneClass, setOneClass] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { getClassImage, getClassSize, getBlurb, getCols } = Utils;

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
        Library.oneClass(props.match.params.slug).then(oneClass => {
            setOneClass(oneClass);
        }).then(() => {
            findNodes();
            setIsLoading(false);
        });
    }, [props.match.params.slug]);

    if (isLoading) return (<CircularProgress variant="determinate" />);

    const { slug, name, hit_dice, hp_at_1st_level, hp_at_higher_levels, 
        prof_armor, prof_weapons, prof_tools, prof_skills, 
        desc, equipment, spellcasting_ability } = oneClass;

    return (
        <BackgroundImage
            image={getClassImage(slug)}
            size={getClassSize(slug)}
            // light={false}
        >
            <MainStyle>
                <h1>
                    {name.toUpperCase()}
                </h1>

                <p>
                    As a {name}, you gain the following class features:
                </p>
                
                <h2>
                    Hit Points
                </h2>
                <strong>Hit Dice:</strong> {hit_dice} per {name} level<br />
                <strong>HP at 1st Level:</strong> {hp_at_1st_level}<br />
                <strong>HP at Higher Levels:</strong> {hp_at_higher_levels}<br />
                
                <h2>
                    Proficiencies
                </h2>
                <p>
                    <strong>Armor:</strong> {prof_armor}<br />
                    <strong>Weapons:</strong> {prof_weapons}<br />
                    <strong>Tools:</strong> {prof_tools}<br />
                    <strong>Skills:</strong> {prof_skills}
                </p>

                <div className={spellcasting_ability ? null : "hidden"}>
                    <p>
                        <strong>Spellcasting Ability:</strong> {spellcasting_ability}<br />
                    </p>
                </div>
                
                <p dangerouslySetInnerHTML={{
                    __html: getBlurb(desc)
                }}></p>
                
                <h2>
                    Equipment
                </h2>
                <p dangerouslySetInnerHTML={{
                    __html: getBlurb(equipment)
                }}></p>

                <h2>{name} Table</h2>
                <TableStyle
                    width = "100%"
                >
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
                </TableStyle>
            </MainStyle>
        </BackgroundImage>
    );
};

export default ClassShowPage;
