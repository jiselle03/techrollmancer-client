import React from 'react';
import ReactToPrint from 'react-to-print';

import { utils } from '../js/utils';
import { CharacterProficiencies } from './CharacterProficiencies';
import { FlexBox } from '../styles/FlexBox';

import { Card } from '@material-ui/core';

export class ComponentToPrint extends React.Component {
    constructor(props) {
        super(props);
    };

    checkBaseMod = stat => {
        const mod = utils.getBaseMod(stat);
        return mod > 0 ? "+" + mod : mod;
    };
    
    checkAbilityMod = (character, level, ability) => {
        const mod = utils.getAbilityMod(character, level, ability);
        return mod > 0 ? "+" + mod : mod;
    };
    
    checkInitiative = initiative => {
        return initiative > 0 ? "+" + initiative : initiative;
    };
    
    checkProfBonus = level => {
        const bonus = utils.getProfBonus(level);
        return bonus > 0 ? "+" + bonus : bonus;
    };
    
    render() {

        const { character } = this.props;
        const level = utils.getLevel(character);
        const { name, hp, armor_class, initiative, speed, str, dex, con, int, wis, cha } = character;

        return(
            <div>
                <h1>
                    {name.toUpperCase()}
                </h1>
    
                <div className="character-sheet">
    
                    <Card className="stats">
                        <h6 className="header">Level</h6>
                        <div className="stat-header"> 
                            <h2 className="main-stats">{level}</h2>
                        </div>
    
                        <h6 className="header">Hit Points</h6>
                        <div className="stat-header">
                            <h2 className="main-stats">{hp}</h2>
                        </div>
    
                        <h6 className="header">Armor Class</h6>
                        <div className="stat-header"> 
                            <h2 className="main-stats">{armor_class}</h2>
                        </div>
                    </Card>
    
                    <Card className="stats">
                        <h6 className="header">Speed</h6>
                        <div className="stat-header"> 
                            <h2 className="main-stats">{speed}</h2>
                        </div>
    
                        <h6 className="header">Deception</h6>
                        <div className="stat-header"> 
                            <h2 className="main-stats">{this.checkInitiative(initiative)}</h2>
                        </div>
    
                        <h6 className="header">Proficiency Bonus</h6>
                        <div className="stat-header" >
                            <h2 className="main-stats">{this.checkProfBonus(level)}</h2>
                        </div>
                    </Card>
    
                <Card className="str stats">
                    <FlexBox direction="column" justifyContent="space-between">
                        <h6 className="header">Strength</h6>
                        <div className="stat-header">
                        <FlexBox 
                            direction="column" 
                            alignItems="center"
                            className="str"
                        >
                            <h2 className="main-stats">{str}</h2>
                            <h6 className="stat-mod">{this.checkBaseMod(str)}</h6>
                        </FlexBox>
                        </div>
                        
                        <FlexBox direction="column" style={{width: "60%"}}>
                        <div className="stat border ability">
                        <div className="stat-container">
                            <CharacterProficiencies 
                            modifier={this.checkAbilityMod(character, level, "str_save")}
                            field={"str_save"} 
                            proficiencies={character.proficiency} 
                            />
                            <span className="stat">
                                <p>Saving Throw</p>
                            </span>
                        </div>
                        <div className="stat-container">
                            <CharacterProficiencies 
                            modifier={this.checkAbilityMod(character, level, "athletics")}
                            field={"athletics"} 
                            proficiencies={character.proficiency} 
                            />
                            <span className="stat">
                                <p>Athletics</p>
                            </span>
                        </div>
                        </div>
                        </FlexBox>
                    </FlexBox>
                </Card>
    
                <Card className="dex stats">
                    <FlexBox direction="column" justifyContent="space-between">
                        <h6 className="header">Dexterity</h6>
                        <div className="stat-header">
                        <FlexBox 
                            direction="column" 
                            alignItems="center"
                            className="dex"
                        >
                            <h2 className="main-stats">{dex}</h2>
                            <h6 className="stat-mod">{this.checkBaseMod(dex)}</h6>
                        </FlexBox>
                        </div>
                        
                        <FlexBox direction="column" style={{width: "60%"}}>
                        <div className="stat border ability">
                        <div className="stat-container">
                            <CharacterProficiencies 
                            modifier={this.checkAbilityMod(character, level, "dex_save")}
                            field={"dex_save"} 
                            proficiencies={character.proficiency} 
                            />
                            <span className="stat">
                                <p>Saving Throw</p>
                            </span>
                        </div>
                        <div className="stat-container">
                            <CharacterProficiencies 
                            modifier={this.checkAbilityMod(character, level, "acrobatics")}
                            field={"acrobatics"} 
                            proficiencies={character.proficiency}  
                            />
                            <span className="stat">
                                <p>Acrobatics</p>
                            </span>
                        </div>
                        <div className="stat-container">
                            <CharacterProficiencies 
                            modifier={this.checkAbilityMod(character, level, "sleight of hand")}
                            field={"sleight_of_hand"} 
                            proficiencies={character.proficiency} 
                            />
                            <span className="stat">
                                <p>Sleight of Hand</p>
                            </span>
                        </div>
                        <div className="stat-container">
                            <CharacterProficiencies 
                            modifier={this.checkAbilityMod(character, level, "stealth")}
                            field={"stealth"} 
                            proficiencies={character.proficiency} 
                            />
                            <span className="stat">
                                <p>Stealth</p>
                            </span>
                        </div>
                        </div>
                        </FlexBox>
                    </FlexBox>
                </Card>
                
                <Card className="con stats">
                <FlexBox direction="column" justifyContent="space-between">
                    <h6 className="header">Constitution</h6>
                    <div className="stat-header">
                    <FlexBox 
                        direction="column" 
                        alignItems="center"
                        className="con"
                    >
                        <h2 className="main-stats">{con}</h2>
                        <h6 className="stat-mod">{this.checkBaseMod(con)}</h6>
                    </FlexBox>
                    </div>
                    
                    <FlexBox direction="column" style={{width: "60%"}}>
                    <div className="stat border ability">
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "con_save")}
                        field={"con_save"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Saving Throw</p>
                        </span>
                    </div>
                    </div>
                    </FlexBox>
                </FlexBox>
                </Card>
    
                <Card className="int stats">
                <FlexBox direction="column" justifyContent="space-between">
                    <h6 className="header">Intelligence</h6>
                    <div className="stat-header">
                    <FlexBox 
                        direction="column" 
                        alignItems="center"
                        className="int"
                    >
                        <h2 className="main-stats">{int}</h2>
                        <h6 className="stat-mod">{this.checkBaseMod(int)}</h6>
                    </FlexBox>
                    </div>
                    
                    <FlexBox direction="column" style={{width: "60%"}}>
                    <div className="stat border ability">
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "int_save")}
                        field={"int_save"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Saving Throw</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "arcana")}
                        field={"arcana"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Arcana</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "history")}
                        field={"history"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>History</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "investigation")}
                        field={"investigation"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Investigation</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "nature")}
                        field={"nature"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Nature</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "religion")}
                        field={"religion"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Religion</p>
                        </span>
                    </div>
                    </div>
                    </FlexBox>
                </FlexBox>
                </Card>
    
                <Card className="wis stats">
                <FlexBox direction="column" justifyContent="space-between">
                    <h6 className="header">Wisdom</h6>
                    <div className="stat-header">
                    <FlexBox 
                        direction="column" 
                        alignItems="center"
                        className="wis"
                    >
                        <h2 className="main-stats">{wis}</h2>
                        <h6 className="stat-mod">{this.checkBaseMod(wis)}</h6>
                    </FlexBox>
                    </div>
                    
                    <FlexBox direction="column" style={{width: "60%"}}>
                    <div className="stat border ability">
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "wis_save")}
                        field={"wis_save"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Saving Throw</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "animal handling")}
                        field={"animal_handling"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Animal Handling</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "insight")}
                        field={"insight"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Insight</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "medicine")}
                        field={"medicine"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Medicine</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "perception")}
                        field={"perception"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Perception</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "survival")}
                        field={"survival"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Survival</p>
                        </span>
                    </div>
                    </div>
                    </FlexBox>
                </FlexBox>
                </Card>
                
                <Card className="cha stats">
                <FlexBox direction="column" justifyContent="space-between">
                    <h6 className="header">Charisma</h6>
                    <div className="stat-header">
                    <FlexBox 
                        direction="column" 
                        alignItems="center"
                        className="cha"
                    >
                        <h2 className="main-stats">{cha}</h2>
                        <h6 className="stat-mod">{this.checkBaseMod(cha)}</h6>
                    </FlexBox>
                    </div>
                    
                    <FlexBox direction="column" style={{width: "60%"}}>
                    <div className="stat border ability">
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "cha_save")}
                        field={"cha_save"} 
                        proficiencies={character.proficiency}  
                        />
                        <span className="stat">
                            <p>Saving Throw</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "deception")}
                        field={"deception"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Deception</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "intimidation")}
                        field={"intimidation"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Intimidation</p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "performance")}
                        field={"performance"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>
                                Performance
                            </p>
                        </span>
                    </div>
                    <div className="stat-container">
                        <CharacterProficiencies 
                        modifier={this.checkAbilityMod(character, level, "persuasion")}
                        field={"persuasion"} 
                        proficiencies={character.proficiency} 
                        />
                        <span className="stat">
                            <p>Persuasion</p>
                        </span>
                    </div>
                    </div>
                    </FlexBox>
                </FlexBox>
                </Card>
    
            </div>
        </div>
        );
    };
};
