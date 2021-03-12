import React, { Component, Fragment } from 'react';

import Utils from '../../js/utils';
import { Card, CardContent } from '@material-ui/core';
import Container from '../styles/Container';
import FlexBox from '../styles/FlexBox';
import { Heading, Text } from '../styles/Typography';

class CharacterStatsPrint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: props.character,
            stats: props.stats,
        };
    };

    render() {
        const level = Utils.getLevel(this.state.character);
        const basic = [
            {label: "HP", val: this.state.character.hp},
            {label: "Armor Class", val: this.state.character.armor_class},
            {label: "Initiative", val: this.state.character.initiative},
            {label: "Speed", val: this.state.character.speed},
        ];
        const stats = [
            {
                label: "STR",
                val: this.state.character.str,
                mod: Utils.getBaseMod(this.state.character.str),
                abilities: [],
            },           
            {
                label: "DEX",
                val: this.state.character.dex,
                mod: Utils.getBaseMod(this.state.character.dex),
                abilities: [],
            },           
            {
                label: "CON",
                val: this.state.character.con,
                mod: Utils.getBaseMod(this.state.character.con),
                abilities: [],
            },            
            {
                label: "INT",
                val: this.state.character.int,
                mod: Utils.getBaseMod(this.state.character.int),
                abilities: [],
            },            
            {
                label: "WIS",
                val: this.state.character.wis,
                mod: Utils.getBaseMod(this.state.character.wis),
                abilities: [],
            },            
            {
                label: "CHA",
                val: this.state.character.cha,
                mod: Utils.getBaseMod(this.state.character.cha),
                abilities: [],
            },            
        ];
        
        return (
            <Container>
                <Heading>{this.state.character.name}</Heading>
                <Text>Level {level} {this.state.character.class_1} {this.state.character.race}</Text>

                <FlexBox flexWrap>
                    <Card variant="outlined" style={{width: "calc(50% - 3rem)", height: "13rem", margin: "1rem"}}>
                        <CardContent>
                            <Heading as="h6">Profile</Heading>
                            {basic.map(field => (
                                <Text key={field.label}>{field.label}: {field.val}</Text> 
                            ))}
                        </CardContent>
                    </Card>

                    <Card variant="outlined" style={{width: "calc(50% - 3rem)", height: "13rem", margin: "1rem"}}>
                        <CardContent>
                            <Heading as="h6">Basic</Heading>
                            {stats.map(stat => (
                                <Fragment key={stat.label}>
                                    <Text>{stat.label}: {stat.val} ({stat.mod > 0? `+${stat.mod}` : stat.mod})</Text>
                                </Fragment>
                            ))}
                        </CardContent>
                    </Card>
                </FlexBox>
            </Container>
        );
    }
  }

export default CharacterStatsPrint;
