import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { CircularProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export class RaceIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        races: [],
        isLoading: true
        };
    };

    getRaces = async () => {
        const { data: {results: races}} = await axios.get("https://api.open5e.com/races/");
        this.setState({ races, isLoading: false });
    };

    componentDidMount() {
        this.getRaces();
    };

    render() {
        if(this.state.isLoading) {
            return(
            <CircularProgress variant="determinate" />
            );
        };

        return (
            <main className="Main">
                <h2>Races</h2>
                <div id="grid-container">
                {this.state.races.map(race => (
                    <div key={race.slug}>
                        <Card style={{minWidth: "220px", margin: "0.5em"}}>
                            <CardContent>
                                <h5 style={{fontSize: "1em"}}>{race.name}</h5>
                            </CardContent>
                            <CardActions>
                                <Button size="small">
                                <Link 
                                    to={`/library/races/${race.slug}`} 
                                    className="link" 
                                    href=""
                                    style={{textDecoration: "none", color: "black"}}    
                                >
                                    Read More
                                </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
                </div>
            </main>
        );
    };
};
