import React, { Component } from "react";
import axios from 'axios';

import { Spinner } from '../Spinner';

export class WeaponIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        simpleMelee: [],
        martialMelee: [],
        simpleRanged: [],
        martialRanged: [],
        isLoading: true
        };
    };

    getWeapons = async () => {
        const { data: {results: weapons}} = await axios.get("https://api.open5e.com/weapons/");
        const simpleMelee = weapons.filter(weapon => weapon.category === "Simple Melee Weapons");
        const martialMelee = weapons.filter(weapon => weapon.category === "Martial Melee Weapons");
        const simpleRanged = weapons.filter(weapon => weapon.category === "Simple Ranged Weapons");
        const martialRanged = weapons.filter(weapon => weapon.category === "Martial Ranged Weapons");
        this.setState({ simpleMelee, martialMelee, simpleRanged, martialRanged, isLoading: false });
    };

    componentDidMount() {
        this.getWeapons();
    };

    render() {
        if(this.state.isLoading) {
            return(
            <Spinner message="Loading weapons..." />
            );
        };

        return (
        <main className="Main">
            <h2 className="ui divider header">Weapons</h2>
            <h4 className="ui horizontal divider header">Simple Melee</h4>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Damage Type</th>
                        <th>Damage Dice</th>
                        <th>Cost</th>
                        <th>Weight</th>
                        <th>Properties</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                {this.state.simpleMelee.map(weapon => (
                    <div key={weapon.slug}>
                        <td data-label="name">{weapon.name}</td>
                        <td data-label="damage-type">{weapon.damage_type}</td>
                        <td data-label="damage-dice">{weapon.damage_dice}</td>
                        <td data-label="cost">{weapon.cost}</td>
                        <td data-label="weight">{weapon.weight}</td>
                        <td data-label="properties">{weapon.properties.join(", ")}</td>
                    </div>
                ))}
                </tr>
                </tbody>
            </table>
        </main>
        );
    };
};
