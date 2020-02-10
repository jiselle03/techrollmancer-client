import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import { Spinner } from '../Spinner';

export class SpellIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        spells: [],
        isLoading: true
        };
    };

    getSpells = async () => {
        const { data: {results: spells}} = await axios.get("https://api.open5e.com/spells/");
        this.setState({ spells, isLoading: false });
    };

    componentDidMount() {
        this.getSpells();
    };

    render() {
        if(this.state.isLoading) {
            return(
            <Spinner message="Loading spells..." />
            );
        };

        return (
        <main className="Main">
            <h2>Equipment</h2>
            <ul>
            {this.state.spells.map(spell => (
                <div key={spell.slug}>
                <Link to={`/spells/${spell.slug}`} href="">
                    {spell.name}
                </Link>
                </div>
            ))}
            </ul>
        </main>
        );
    };
};
