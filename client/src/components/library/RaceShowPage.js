import React, { Component } from 'react';
import axios from 'axios';

import { CircularProgress } from '@material-ui/core';

export class RaceShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        race: null,
        isLoading: true
        };
    };

    getClass = async (slug) => {
        const { data: race } = await axios.get(`https://api.open5e.com/races/${slug}`);
        this.setState({ race, isLoading: false });
    };

    getDesc = description => {
        const desc = description.replace("### ", "").split("### ").join("").split("\n").join("<br>").split("#").join("• ");
        return desc;
    };

    componentDidMount() {
        this.getClass(this.props.match.params.slug);
    };

    render() {
        const { race } = this.state;

        if(!this.state.race) {
            return (
                <CircularProgress variant="determinate" />
            );
        };

        return (
            <div className="Main">
                <h2>{race.name}</h2>
                <h5>Description</h5>
                <p dangerouslySetInnerHTML={{
                    __html: this.getDesc(race.desc)
                }}></p>
                <h5>Proficiencies</h5>
            </div>
        );
    };
};
