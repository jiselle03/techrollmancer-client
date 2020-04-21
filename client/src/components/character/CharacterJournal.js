import React from 'react';

import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const CharacterJournal = props => {
    const { name } = props.character;

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            <div className="character-sheet">
                <Card className="journal">
                    <h2>
                        Notes
                    </h2>
                </Card>

                <Card className="journal">
                    <h2>
                        Experience
                    </h2>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Session</TableCell>
                                    <TableCell>XP</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>The Harrowing</TableCell>
                                    <TableCell>3300</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Temple Run</TableCell>
                                    <TableCell>4500</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Catch-Up</TableCell>
                                    <TableCell>3000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Catch-Up</TableCell>
                                    <TableCell>1700</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>The Final Temple</TableCell>
                                    <TableCell>2000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Feast of the Moon</TableCell>
                                    <TableCell>350</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Dark Dealings in Yartar</TableCell>
                                    <TableCell>1750</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Heroism Pays</TableCell>
                                    <TableCell>700</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Great Balls of Fire</TableCell>
                                    <TableCell>1650</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Bomb Squad</TableCell>
                                    <TableCell>2050</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Curse of the Fire Witch</TableCell>
                                    <TableCell>1500</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Weird Tanks</TableCell>
                                    <TableCell>3600</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>With a Bang</TableCell>
                                    <TableCell>2100</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Into the Depth</TableCell>
                                    <TableCell>950</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Dire Tidings</TableCell>
                                    <TableCell>850</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Cryptology and Contracts</TableCell>
                                    <TableCell>290</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Rescue and Regroup</TableCell>
                                    <TableCell>2300</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>For Whom the Bell Tolls</TableCell>
                                    <TableCell>2510</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Hallways to Hell</TableCell>
                                    <TableCell>850</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Waterdhavian Nights</TableCell>
                                    <TableCell>650</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>A Souprising Sojourn</TableCell>
                                    <TableCell>200</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>The Long Way Up</TableCell>
                                    <TableCell>2800</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Pack Tactics</TableCell>
                                    <TableCell>1000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Yeeting to Yartar</TableCell>
                                    <TableCell>2500</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Rubbish 2: Back with a Vengeance</TableCell>
                                    <TableCell>200</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Decompression</TableCell>
                                    <TableCell>200</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Feywild Horses</TableCell>
                                    <TableCell>1500</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Curses and Crypts</TableCell>
                                    <TableCell>2250</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Optimism and Fumes</TableCell>
                                    <TableCell>1150</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Fatalism Never Pays</TableCell>
                                    <TableCell>1150</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Third Time's the Charm</TableCell>
                                    <TableCell>200</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Favors and Follow-Ups</TableCell>
                                    <TableCell>500</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>No Place Like Home</TableCell>
                                    <TableCell>750</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Two Down, Next</TableCell>
                                    <TableCell>1600</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Crossfire at the Spire</TableCell>
                                    <TableCell>1300</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Just Culty Things</TableCell>
                                    <TableCell>2500</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Storming the Keep</TableCell>
                                    <TableCell>1750</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Exodus 7:20</TableCell>
                                    <TableCell>750</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Threads of Halcyon Days</TableCell>
                                    <TableCell>700</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Into the Belly of the (Flying) Beast</TableCell>
                                    <TableCell>700</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Rumors in Red Larch</TableCell>
                                    <TableCell>700</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Highharvestide</TableCell>
                                    <TableCell>500</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Assault on Neverwinter (Part 2)</TableCell>
                                    <TableCell>2000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Assault on Neverwinter (Part 1)</TableCell>
                                    <TableCell>1250</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </div>

        </>
    );
};

export default CharacterJournal;
