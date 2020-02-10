import React, { Component } from 'react';
import axios from 'axios';

import { CircularProgress } from '@material-ui/core';

export class SpellShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        spell: null,
        isLoading: true
        };
    };

    getSpell = async (slug) => {
        const { data: spell } = await axios.get(`https://api.open5e.com/spells/${slug}`);
        this.setState({ spell, isLoading: false });
    };

    componentDidMount() {
        this.getSpell(this.props.match.params.slug);
    };

    render() {
        const { spell } = this.state;

        if(!this.state.spell) {
            return (
                <CircularProgress variant="determinate" />
            );
        };

        return (
            <div className="Main">
                <h2>{spell.name}</h2>
                <h5 style={{fontSize: "1em"}}>Description</h5>
                <p>{spell.desc}</p>
                <h5 style={{fontSize: "1em"}}>Higher Level</h5>
                <p>{spell.higher_level}</p>
            </div>
        );
    };
};
