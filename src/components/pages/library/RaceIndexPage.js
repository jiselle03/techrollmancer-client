import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import utils from '../../../js/utils';
import urls from '../../../data/urls.json';
import Library from '../../../api/library';
import { BackgroundImage } from '../../styles/Image';
import { Layout } from '../../styles/Container';
import { Card, CardContent } from '../../styles/Card';
import { Heading } from '../../styles/Typography';
import { CircularProgress, Grid } from '@material-ui/core';

const RaceIndexPage = () => {
  const [races, setRaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImageSize = race => {
    switch(race) {
      case "gnome":
        return "125%";
      case "half-elf":
        return "80%";
      case "half-orc":
        return "115%";
      case "halfling":
        return "120%";
      case "human":
        return "80%";  
      case "tiefling":
        return "110%";
      default:
        return "100%";
    };
  };

  useEffect(() => {
    Library
      .allRaces()
      .then(races => { 
        setRaces(races);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return (<CircularProgress variant="determinate" />);

  return (
    <BackgroundImage 
      image="https://i.ibb.co/cctCwgk/d20.png"
      light
    >
      <Layout>
        <Heading left="0.2em">RACES</Heading>

        <Grid container>
          {races.map(race => (
            <Link 
              key={race.slug}
              to={urls.libraries.races.show.replace(':slug', race.slug)} 
            >
              <Card
                image={utils.getRaceImage(race.slug)}
                imageSize={getImageSize(race.slug)}
              >
                <CardContent>
                  <Heading as="h5" alt="true">{race.name}</Heading>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
      </Layout>
    </BackgroundImage>
  );
};

export default RaceIndexPage;
