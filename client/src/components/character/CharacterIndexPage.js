import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { CircularProgress } from "@material-ui/core";

export class CharacterIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        characters: [],
        isLoading: true
        };
    };

    getCharacters = async () => {
        const characters = [{name: "Ja'el"}]
        this.setState({ characters, isLoading: false });
    };

    componentDidMount() {
        this.getCharacters();
    };

    render() {
        if(this.state.isLoading) {
            return(
            <CircularProgress variant="determinate" />
            );
        };

        return (
            <main className="Main">
                <h2 className="ui horizontal divider header">Characters</h2>
                {this.state.characters.map(character => (
                    <div key={character.id}>
                        <Link 
                            to={`/characters/${character.id}`} 
                            className="link" 
                            href=""
                            style={{textDecoration: "none", color: "black"}}    
                        >
                            {character.name}
                        </Link>
                    </div>
                ))}
                <Link 
                    exact to={`/characters/new`} 
                    className="link" 
                    href=""  
                    style={{color: "white"}}
                >
                    <Fab 
                        color="primary" 
                        aria-label="add"
                        style={{
                            position: "fixed",
                            bottom: "40px",
                            right: "40px",
                            width: "5em",
                            height: "5em"
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </Link>
            </main>
        );
    };
};
