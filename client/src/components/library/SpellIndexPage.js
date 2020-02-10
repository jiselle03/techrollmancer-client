import React, { Component } from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { CircularProgress } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import PaginationItem from '@material-ui/lab/PaginationItem';

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
        const { data: {next: page}} = await axios.get("https://api.open5e.com/spells/");
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
            <h2>Spells</h2>
            {this.state.spells.map(spell => (
                <div key={spell.slug}>
                <Link 
                    to={`/library/spells/${spell.slug}`} 
                    href=""
                    style={{textDecoration: "none", color: "black"}}
                >
                    {spell.name}
                </Link>
                </div>
            ))}
            <br />
            <Router>
                <Pagination 
                    count={7} 
                    color="primary" 
                    renderItem={item => (
                        <PaginationItem
                          component={Link}
                          to={`/spells${item.page === 1 ? '' : `?page=${item.page}`}`}
                          {...item}
                        />
                    )}
                />
            </Router>
        </main>
        );
    };
};
