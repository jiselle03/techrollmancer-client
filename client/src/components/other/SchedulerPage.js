import 'date-fns';
import React, { useState, useEffect } from 'react';

import { Game } from '../../api/game';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';
import { ButtonStyle } from '../styles/ButtonStyle';
import { FlexBox } from '../styles/FlexBox';
import { FormContent } from '../styles/FormStyle';

import { Button, Card, FormControl, Grid, Input, InputLabel, useMediaQuery } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const SchedulerPage = props => {
    const [games, setGames] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { currentUser } = props;
    const laptop = useMediaQuery('(min-width:1280px)');

    const formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
      
        return [month, day, year].join('/');
    };

    const currentDate = formatDate(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);

        const newGame = {
            date: fd.get("date"),
            time: fd.get("time"),
            name: fd.get("name"),
            notes: fd.get("notes"),
            user_id: currentUser.id
        };

        Game.create(newGame).then(() => {
            Game.all().then(games => {
                setGames(games);
            });
        });
    };

    useEffect(() => {
        Game.all().then(games => {
            setGames(games);
        });
    }, []);

    return(
        <BackgroundImage 
            image={require('../../assets/d20.png')}
            light={true}
        >
            <MainStyle>
                <h1>
                    Scheduler
                </h1>

                <Card
                    style={{
                        width: laptop ? "60vw" : "70vw",
                        padding: "2em",
                        margin: "1em 0",
                    }}
                >
                    <h2>Future Sessions</h2>
                    {games.map((game, index) => (
                        game.date >= currentDate && (
                        <div key={index}>
                            <h6 className="game">{game.name}</h6>
                            <p>{game.date} at {game.time}</p>
                            <p className="notes"><strong>Notes:</strong></p>
                            <p>{game.notes}</p>
                            <hr />
                        </div>
                    )))}
                </Card>

                <Card
                    style={{
                        width: laptop ? "60vw" : "70vw",
                        padding: "2em",
                        margin: "1em 0",
                    }}
                >
                <h2>Add Session</h2>
                <form onSubmit={handleSubmit}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                name="date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                name="time"
                                label="Time picker"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                        <FormControl style={FormContent.scheduler}>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            />
                        </FormControl>
                        <FormControl style={FormContent.scheduler}>
                            <InputLabel htmlFor="notes">Notes</InputLabel>
                            <Input
                            id="notes"
                            type="text"
                            name="notes"
                            placeholder="Notes"
                            />
                        </FormControl>
                        <FlexBox justifyContent="center">
                            <Button 
                                type="submit"
                                style={ButtonStyle.modalButton}
                            >
                                Schedule
                            </Button>
                        </FlexBox>
                    </MuiPickersUtilsProvider>
                    </form>
                </Card>

                <Card
                    style={{
                        width: laptop ? "60vw" : "70vw",
                        padding: "2em",
                        margin: "1em 0",
                    }}
                >
                    <h2>Past Sessions</h2>
                    {games.map((game, index) => (
                        game.date < currentDate && (
                        <div key={index}>
                            <h6>{game.name}</h6> 
                            <p>{game.date} at {game.time}</p>
                        </div>
                    )))}
                </Card>

            </MainStyle>
        </BackgroundImage>
    );
};
