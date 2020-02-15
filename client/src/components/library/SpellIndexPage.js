import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { CircularProgress } from '@material-ui/core';

const getSpells = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/spells");
};


export const SpellIndexPage = () => {
    const [spells, setSpells] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getSpells().then(spells => { 
            setSpells(spells.data);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) {
        return(
            <CircularProgress variant="determinate" />
        );
    };

    return (
    <main className="Main">
        <h2>Spells</h2>
        {spells.map(spell => (
            <div key={spell.slug}>
            <Link 
                to={`/libraries/spells/${spell.slug}`} 
                className="link"
            >
                {spell.name}
            </Link>
            </div>
        ))}
    </main>
    );
};
