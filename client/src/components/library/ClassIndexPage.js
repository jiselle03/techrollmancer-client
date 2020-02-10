import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/ClassIndex.css';
import { CircularProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export class ClassIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        classes: [],
        isLoading: true
        };
    };

    getClasses = async () => {
        const { data: {results: classes}} = await axios.get("https://api.open5e.com/classes/");
        this.setState({ classes, isLoading: false });
    };

    componentDidMount() {
        this.getClasses();
    };

    render() {
        if(this.state.isLoading) {
            return(
            <CircularProgress variant="determinate" />
            );
        };

        return (
            <main className="Main">
                <h2>Classes</h2>
                <div id="grid-container">
                {this.state.classes.map(charClass => (
                    <div key={charClass.slug}>
                        <Card style={{minWidth: "220px", margin: "0.5em"}}>
                            <CardContent>
                                <h5 style={{fontSize: "1em"}}>{charClass.name}</h5>
                            </CardContent>
                            <CardActions>
                                <Button size="small">
                                <Link 
                                    to={`/library/classes/${charClass.slug}`} 
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
