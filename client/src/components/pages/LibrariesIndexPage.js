import React from 'react';
import { Link } from 'react-router-dom';

import { BackgroundImage } from '../styles/Image';
import MainStyle from '../styles/MainStyle';

import { List, ListItem, ListItemText } from '@material-ui/core';

const LibrariesIndexPage = () => {
    const categories = [
        {
            name: "Races",
            link: "races"
        },
        {
            name: "Classes",
            link: "classes"
        },
        {
            name: "Spells",
            link: "spells"
        },
        {
            name: "Equipment",
            link: "equipment"
        },
        {
            name: "Conditions",
            link: "conditions"
        }
    ];

    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <MainStyle>
                <h1>
                    Libraries
                </h1>

                <List component="nav">
                    {categories.map(category => (
                        <Link key={category} className="link" exact to={`/libraries/${category.link}`}>
                            <ListItem button>
                                <ListItemText primary={category.name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </MainStyle>
        </BackgroundImage>
    );
};

export default LibrariesIndexPage;
