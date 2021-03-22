import React, { useState, useEffect } from 'react';

import utils from '../../js/stats';
import { raceBonus } from '../../js/generator';
import { Heading } from '../styles/Typography';

import { FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const PointBuyCalculator = () => {
    const [race, setRace] = useState("default");
    const [bonus, setBonus] = useState(raceBonus.default);
    const [stats, setStats] = useState({ str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 });
    let [remainingPoints, setRemainingPoints] = useState(27);

    const handleChange = event => setRace(event.target.value);

    const handleInputChange = (event, field) => {
        const value = parseInt(event.target.value);

        const setPoints = (stat, value) => {
            if (stat > value) { // decreasing
                if (remainingPoints < 0) return;
                value >= 8 && value <= 12 ? setRemainingPoints(++remainingPoints) : setRemainingPoints(remainingPoints + 2);
            } else { // increasing
                if (remainingPoints > 27) return;
                value >= 8 && value <= 13 ? setRemainingPoints(--remainingPoints) : setRemainingPoints(remainingPoints - 2);
            };
        };

        switch(field) {
            case "str":
                setPoints(stats.str, value);
                setStats({...stats, str: value});
                break;
            case "dex":
                setPoints(stats.dex, value);
                setStats({...stats, dex: value});
                break;
            case "con":
                setPoints(stats.con, value);
                setStats({...stats, con: value});
                break;
            case "int":
                setPoints(stats.int, value);
                setStats({...stats, int: value});
                break;
            case "wis":
                setPoints(stats.wis, value);
                setStats({...stats, wis: value});
                break;
            case "cha":
                setPoints(stats.cha, value);
                setStats({...stats, cha: value});
                break;
            default:
                return;
        };
    };

    const checkBaseMod = stat => {
        const mod = utils.getBaseMod(stat);
        return mod > 0 ? "+" + mod : mod;
    };

    const getTotal = (stat, field) => {
        switch(field) {
            case "str":
                return stat + bonus.str;
            case "dex":
                return stat + bonus.dex;
            case "con":
                return stat + bonus.con;
            case "int":
                return stat + bonus.int;
            case "wis":
                return stat + bonus.wis;
            case "cha":
                return stat + bonus.cha;
            default:
                return;
        };
    };

    const getPointCost = stat => {
        switch(stat) {
            case 8:
                return 0;
            case 9:
                return 1;
            case 10:
                return 2;
            case 11:
                return 3;
            case 12:
                return 4;
            case 13:
                return 5;
            case 14:
                return 7;
            case 15:
                return 9;
            default:
                return;
        };
    };

    useEffect(() => {
        setBonus(raceBonus[race]);
    }, [race, remainingPoints]);

    return(
        <>
            <FormControl className="race-option">
                <InputLabel>Race</InputLabel>
                <Select
                    value={race}
                    onChange={handleChange}
                >
                    <MenuItem value="dragonborn">Dragonborn</MenuItem>
                    <MenuItem value="dwarf">Dwarf</MenuItem>
                    <MenuItem value="elf">Elf</MenuItem>
                    <MenuItem value="gnome">Gnome</MenuItem>
                    <MenuItem value="halfOrc">Half-Orc</MenuItem>
                    <MenuItem value="halfElf">Half-Elf</MenuItem>
                    <MenuItem value="halfling">Halfling</MenuItem>
                    <MenuItem value="human">Human</MenuItem>
                    <MenuItem value="tiefling">Tiefling</MenuItem>
                </Select>
            </FormControl>

            <Heading as="h6">Remaining Points: {remainingPoints}</Heading>
        
            <TableContainer component={Paper}>
                <Table aria-label="point buy calculator">
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Attribute</TableCell>
                            <TableCell className="table-header">Ability Score</TableCell>
                            <TableCell className="table-header">Racial Bonus</TableCell>
                            <TableCell className="table-header">Total Score</TableCell>
                            <TableCell className="table-header">Modifier</TableCell>
                            <TableCell className="table-header">Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key="8">
                            <TableCell>Strength</TableCell>
                            <TableCell>
                                <input 
                                    type="number" 
                                    value={stats.str}
                                    step="1" 
                                    min="8"
                                    max={remainingPoints === 0 ? stats.str : "15"}
                                    onChange={event => handleInputChange(event, "str")}
                                    onKeyDown={event => event.preventDefault()}
                                />
                            </TableCell>
                            <TableCell>{bonus.str}</TableCell>
                            <TableCell>{getTotal(stats.str, "str")}</TableCell>
                            <TableCell>{checkBaseMod(getTotal(stats.str, "str"))}</TableCell>
                            <TableCell>{getPointCost(stats.str) || 0}</TableCell>
                        </TableRow>
                        <TableRow key="9">
                            <TableCell>Dexterity</TableCell>
                            <TableCell>
                                <input 
                                    type="number" 
                                    value={stats.dex}
                                    step="1" 
                                    min="8"
                                    max={remainingPoints === 0 ? stats.dex : "15"}
                                    onChange={event => handleInputChange(event, "dex")}
                                    onKeyDown={event => event.preventDefault()}
                                />
                            </TableCell>
                            <TableCell>{bonus.dex}</TableCell>
                            <TableCell>{getTotal(stats.dex, "dex")}</TableCell>
                            <TableCell>{checkBaseMod(getTotal(stats.dex, "dex"))}</TableCell>
                            <TableCell>{getPointCost(stats.dex)}</TableCell>
                        </TableRow>
                        <TableRow key="10">
                            <TableCell>Constitution</TableCell>
                            <TableCell>
                                <input 
                                    type="number" 
                                    value={stats.con}
                                    step="1" 
                                    min="8"
                                    max={remainingPoints === 0 ? stats.con : "15"}
                                    onChange={event => handleInputChange(event, "con")}
                                    onKeyDown={event => event.preventDefault()}
                                />
                            </TableCell>
                            <TableCell>{bonus.con}</TableCell>
                            <TableCell>{getTotal(stats.con, "con")}</TableCell>
                            <TableCell>{checkBaseMod(getTotal(stats.con, "con"))}</TableCell>
                            <TableCell>{getPointCost(stats.con)}</TableCell>
                        </TableRow>
                        <TableRow key="11">
                            <TableCell>Intelligence</TableCell>
                            <TableCell>
                                <input 
                                    type="number" 
                                    value={stats.int}
                                    step="1" 
                                    min="8"
                                    max={remainingPoints === 0 ? stats.int : "15"}
                                    onChange={event => handleInputChange(event, "int")}
                                    onKeyDown={event => event.preventDefault()}
                                />
                            </TableCell>
                            <TableCell>{bonus.int}</TableCell>
                            <TableCell>{getTotal(stats.int, "int")}</TableCell>
                            <TableCell>{checkBaseMod(getTotal(stats.int, "int"))}</TableCell>
                            <TableCell>{getPointCost(stats.int)}</TableCell>
                        </TableRow>
                        <TableRow key="12">
                            <TableCell>Wisdom</TableCell>
                            <TableCell>
                                <input 
                                    type="number" 
                                    value={stats.wis}
                                    step="1" 
                                    min="8"
                                    max={remainingPoints === 0 ? stats.wis : "15"}
                                    onChange={event => handleInputChange(event, "wis")}
                                    onKeyDown={event => event.preventDefault()}
                                />
                            </TableCell>
                            <TableCell>{bonus.wis}</TableCell>
                            <TableCell>{getTotal(stats.wis, "wis")}</TableCell>
                            <TableCell>{checkBaseMod(getTotal(stats.wis, "wis"))}</TableCell>
                            <TableCell>{getPointCost(stats.wis)}</TableCell>
                        </TableRow>
                        <TableRow key="13">
                            <TableCell>Charisma</TableCell>
                            <TableCell>
                                <input 
                                    type="number" 
                                    value={stats.cha}
                                    step="1" 
                                    min="8"
                                    max={remainingPoints === 0 ? stats.cha : "15"}
                                    onChange={event => handleInputChange(event, "cha")}
                                    onKeyDown={event => event.preventDefault()}
                                />
                            </TableCell>
                            <TableCell>{bonus.cha}</TableCell>
                            <TableCell>{getTotal(stats.cha, "cha")}</TableCell>
                            <TableCell>{checkBaseMod(getTotal(stats.cha, "cha"))}</TableCell>
                            <TableCell>{getPointCost(stats.cha)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default PointBuyCalculator;
