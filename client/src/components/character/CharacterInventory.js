import React from 'react';

import { FloatingActionButton } from './FloatingActionButton';

import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

export const CharacterInventory = props => {
    const { name } = props.character;

    const handleOpen = () => {
        
    };

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            <div className="character-sheet">
                <Card className="inventory">
                    <h2>
                        Coin Pouch
                    </h2>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>QTY</TableCell>
                                    <TableCell>Item</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <TableRow>
                                        <TableCell>17</TableCell>
                                        <TableCell>Platinum pieces</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>3748</TableCell>
                                        <TableCell>Gold pieces</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>18</TableCell>
                                        <TableCell>Electrum pieces</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>217</TableCell>
                                        <TableCell>Silver pieces</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2</TableCell>
                                        <TableCell>Copper pieces</TableCell>
                                    </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>

                <Card className="inventory">
                    <h2>
                        Equipment
                    </h2>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>QTY</TableCell>
                                    <TableCell>Item</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>Hat of Disguise</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>Windvane</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>Plague Doctor's Mask</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>Spear</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>Clothes, common</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>10</TableCell>
                                        <TableCell>Dart</TableCell>
                                    </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>

                <Card className="inventory">
                    <h2>
                        Carried
                    </h2>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>QTY</TableCell>
                                    <TableCell>Item</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Explorer's Pack</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Potion of Vitality</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Bottled Breath</TableCell>
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Charm of the Giant Slayer</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Clothes, fine</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Potion of Water Breathing</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Skeletal Key</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </div>

        </>
    );
};
