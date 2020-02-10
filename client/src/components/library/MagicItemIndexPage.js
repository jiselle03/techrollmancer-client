import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { CircularProgress } from '@material-ui/core';

export class MagicItemIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        magicItems: [],
        isLoading: true
        };
    };

    getSpells = async () => {
        const { data: {results: magicItems}} = await axios.get("https://api.open5e.com/magicitems/");
        this.setState({ magicItems, isLoading: false });
    };

    componentDidMount() {
        this.getSpells();
    };

    render() {
        if(this.state.isLoading) {
            return(
                <CircularProgress variant="determinate" />
            );
        };

        return (
        <main className="Main">
            <h2>Magic Items</h2>
            <ul>
            {this.state.magicItems.map(magicItem => (
                <div key={magicItem.slug}>
                <Link 
                    to={`/library/magic-items/${magicItem.slug}`} 
                    href=""
                    style={{textDecoration: "none", color: "black"}}
                >
                    {magicItem.name}
                </Link>
                </div>
            ))}
            </ul>
        </main>
        );
    };
};
