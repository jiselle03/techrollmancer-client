import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Utils from '../js/utils';
import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';
import TableStyle from '../styles/TableStyle';

import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const getClass = slug => {
    return axios.get(`http://localhost:3000/api/v1/libraries/classes/${slug}`);
};

const ClassShowPage = props => {
    const [oneClass, setOneClass] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getCols = oneClass => {
        switch(oneClass.slug) {
            case "barbarian":
                return 5;
            case "bard":
                return 14;
            case "fighter":
                return 3;
            case "monk":
                return 6;
            case "paladin" || "warlock":
                return 8;
            case "ranger":
                return 9;
            case "rogue":
                return 4;
            case "sorcerer":
                return 15;
            default:
                return 13;
        };
    };

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

    const getSize = charClass => {
        switch(charClass) {
            case "barbarian":
                return "50vh";
            case "bard":
                return "50vh";
            case "druid":
                return "60vh";
            case "fighter":
                return "80vh";
            case "monk":
                return "60vh";
            case "paladin":
                return "75vh";
            case "ranger":
                return "90vh";
            default:
                return "70vh";
        };
    };

    const findNodes = () => {
        const nodes = document.querySelectorAll("em");
        let slug = "";
        nodes.forEach((node) => {
            slug = node.innerText.split(" ").join("-");
            axios.get(`http://localhost:3000/api/v1/libraries/spells/${slug}`).then(spell => {
                return node.outerHTML=`
                    <div class="tooltip">${spell.data.name}
                        <span class="tooltiptext">
                            <p><strong>${spell.data.name}</strong> | <em>${spell.data.school}</em></p>
                            <p>${spell.data.desc}</p>
                        </span>
                    </div>
                `    
            });
        });
    };

    useEffect(() => {
        getClass(props.match.params.slug).then(oneClass => {
            setOneClass(oneClass.data);
            setIsLoading(false);
        }).then(data => {
            findNodes();
        })
    }, [props.match.params.slug]);

    if (isLoading) {
        return (
            <CircularProgress variant="determinate" />
        );
    };

    const { slug, name, hit_dice, hp_at_1st_level, hp_at_higher_levels, 
        prof_armor, prof_weapons, prof_tools, prof_skills, 
        desc, equipment, spellcasting_ability } = oneClass;

    return (
        <BackgroundImage
            image={require(`../../assets/classes/${slug}.png`)}
            size={getSize(slug)}
            light={false}
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
                    __html: Utils.getBlurb(desc)
                }}></p>
                
                <h2>
                    Equipment
                </h2>
                <p dangerouslySetInnerHTML={{
                    __html: Utils.getBlurb(equipment)
                }}></p>

                <h2>{name} Table</h2>
                <TableStyle
                    width = "100%"
                >
                    <TableContainer component={Paper}>
                        <Table className="table" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                {getColNames(oneClass).map((col, index) => (
                                    <TableCell key={index} className="table-header">{col}</TableCell>
                                ))}
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.from({length: 21}, (x,i) => i).map(i => (
                                <TableRow key={i + 1}>
                                    {getRow(i + 1).map((row, index) => (
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
