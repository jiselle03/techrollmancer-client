import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { CircularProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const getClasses = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/classes");
};

export const ClassIndexPage = () => {
    const [classes, setClasses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getClasses().then(classes => { 
            setClasses(classes.data);
            setIsLoading(false);
          });
    }, []);

    if(isLoading) {
        return(
        <CircularProgress variant="determinate" />
        );
    };

    return (
        <div className="class index-background">
            <main className="Main">
                <h1>CLASSES</h1>
                <div id="grid-container">
                {classes.map(charClass => (
                    <div key={charClass.slug}>
                        <Link 
                            to={`/libraries/classes/${charClass.slug}`} 
                            className="link" 
                            href=""
                        >
                            <Card className={`${charClass.name} card`}>
                                <CardContent className="content">
                                    <h5 className="class name">{charClass.name}</h5>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                ))}
                </div>
            </main>
        </div>
    );
};
