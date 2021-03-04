import 'date-fns';
import React, { useState, useEffect } from 'react';

import Utils from '../../js/utils';
import Game from '../../api/game';
import { BackgroundImage } from '../styles/Image';
import Container from '../styles/Container';
import FlexBox from '../styles/FlexBox';
import { Form, FormContent } from '../styles/Form';
import { Heading, Text } from '../styles/Typography';

import { Button, Card, FormControl, Input, InputLabel, useMediaQuery } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const SchedulerPage = props => {
    const [games, setGames] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { currentUser } = props;
    const { formatDate } = Utils;
    const laptop = useMediaQuery('(min-width:1280px)');

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

    const handleDelete = id => {
        Game.destroy(id).then(() => {
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
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <Container as="main" page>
                <Heading>Scheduler</Heading>

                <Card
                    style={{
                        width: laptop ? "60vw" : "70vw",
                        padding: "2em",
                        margin: "1em 0",
                    }}
                >
                    <Heading as="h2">Future Sessions</Heading>
                    {games.map((game, index) => (
                        game.date >= currentDate && (
                        <Container key={index} className="game">
                            <span className="name">
                            <Heading as="h6">{game.name}</Heading>
                            </span>
                            <span className="button">
                            <Button onClick={() => handleDelete(game.id)}>Cancel</Button>
                            </span>
                            <Text>{game.date} at {game.time}</Text>
                            <Text className="notes"><strong>Notes:</strong></Text>
                            <Text>{game.notes}</Text>
                            <hr />
                        </Container>
                    )))}
                </Card>

                <Card
                    style={{
                        width: laptop ? "60vw" : "70vw",
                        padding: "2em",
                        margin: "1em 0",
                    }}
                >
                <Heading as="h2">Add Session</Heading>
                <Form onSubmit={handleSubmit}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Container className="datetime">
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
                                style={FormContent.datetime}
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
                                style={FormContent.datetime}
                            />
                        </Container>
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
                                variant="contained"
                                color="secondary"
                                type="submit"
                                className="button"
                            >
                                Schedule
                            </Button>
                        </FlexBox>
                    </MuiPickersUtilsProvider>
                    </Form>
                </Card>

                <Card
                    style={{
                        width: laptop ? "60vw" : "70vw",
                        padding: "2em",
                        margin: "1em 0",
                    }}
                >
                    <Heading as="h2">Past Sessions</Heading>
                    {games.map((game, index) => (
                        game.date < currentDate && (
                        <Container key={index}>
                            <Container className="game">
                                <span className="name">
                            <Heading as="h6">{game.name}</Heading> 
                            </span>
                                <span className="button">
                            <Button onClick={() => handleDelete(game.id)}>Delete</Button>
                            </span>
                            </Container>
                            <Text>{game.date} at {game.time}</Text>
                        </Container>
                    )))}
                </Card>

            </Container>
        </BackgroundImage>
    );
};

export default SchedulerPage;
