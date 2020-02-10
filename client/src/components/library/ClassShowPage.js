import React, { Component } from 'react';
import axios from 'axios';

import { CircularProgress } from '@material-ui/core';

export class ClassShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        oneClass: null,
        isLoading: true
        };
    };

    getClass = async (slug) => {
        const { data: oneClass } = await axios.get(`https://api.open5e.com/classes/${slug}`);
        this.setState({ oneClass, isLoading: false });
    };

    getDesc = description => {
        const desc = description.replace("### ", "").split("### ").join("").split("\n").join("<br>").split("#").join("• ");
        return desc;
    };

    componentDidMount() {
        this.getClass(this.props.match.params.slug);
    };

    render() {
        const { oneClass } = this.state;

        if(!this.state.oneClass) {
            return (
                <CircularProgress variant="determinate" />
            );
        };

        return (
            <div className="Main">
                <h2>{oneClass.name}</h2>
                <h5>Description</h5>
                <p dangerouslySetInnerHTML={{
                    __html: this.getDesc(oneClass.desc)
                }}></p>
                <h5>Proficiencies</h5>
                <p>Armor: {oneClass.prof_armor}</p>
                <p>Weapons: {oneClass.prof_weapons}</p>
                <p>Tools: {oneClass.prof_tools}</p>
                <p>Skills: {oneClass.prof_skills}</p>
                <h5>Equipment</h5>
                <p>{oneClass.equipment}</p>
                <h5>Spellcasting Ability</h5>
                <p>{oneClass.equipment}</p>
            </div>
        );
    };
};
