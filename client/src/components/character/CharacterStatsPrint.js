import React, { Component } from 'react';

import Utils from '../../js/utils';
import { statFields } from '../../data/characterFields';
import { Card, CardContent } from '@material-ui/core';
import Container from '../styles/Container';
import FlexBox from '../styles/FlexBox';
import { Heading, Text } from '../styles/Typography';

class CharacterStatsPrint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: props.character,
            str: props.character.str,
            dex: props.character.dex,
            con: props.character.con,
            int: props.character.int,
            wis: props.character.wis,
            cha: props.character.cha,
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
        const fields = statFields(this.state.str, this.state.dex, this.state.con, this.state.int, this.state.wis, this.state.cha)
        
        return (
            <Container>
                <Heading>{this.state.character.name}</Heading>
                <Text>Level {level} {this.state.character.class_1} {this.state.character.race}</Text>

                <Card variant="outlined" style={{height: "10rem", margin: "0.75rem 1rem"}}>
                    <CardContent>
                        <Heading as="h6">Profile</Heading>
                        {basic.map(field => (
                            <Text key={field.label}>{field.label}: {field.val}</Text> 
                        ))}
                    </CardContent>
                </Card>
                <FlexBox flexWrap>

                    {fields.map(field => (
                        <Card
                            key={field.name}
                            variant="outlined"
                            style={{width: "calc(50% - 3rem)",
                            height: "14rem", margin: "0.75rem 1rem"}}
                        >
                            <CardContent>
                                <Heading as="h6" align="center">{field.label}</Heading>
                                <Heading as="h6" align="center">{field.stat} <Text as="small">({Utils.getBaseMod(field.stat)})</Text></Heading>
                                
                                {field && field.abilities && field.abilities.map(ability => (
                                    <Text><Text as="small">({Utils.getAbilityMod(this.state.character, level, ability.stat, field.name)})</Text>&nbsp;
                                    {ability.label}</Text>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </FlexBox>
            </Container>
        );
    }
  }

export default CharacterStatsPrint;
