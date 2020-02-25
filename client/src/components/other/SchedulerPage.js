import 'date-fns';
import React, { useState, useEffect } from 'react';
import { Card, Grid, useMediaQuery } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

export const SchedulerPage = () => {
    const laptop = useMediaQuery('(min-width:1280px)');
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return(
        <BackgroundImage 
            image={require('../../assets/d20.png')}
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
                    <h2>Next Session</h2>
                </Card>

                <Card
                    style={{
                        width: laptop ? "60vw" : "70vw",
                        padding: "2em",
                        margin: "1em 0",
                    }}
                >
                <h2>Add Session</h2>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Time picker"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </Card>

                <Card
                    style={{
                        width: laptop ? "60vw" : "70vw",
                        padding: "2em",
                        margin: "1em 0",
                    }}
                >
                    <h2>Past Sessions</h2>
                </Card>

            </MainStyle>
        </BackgroundImage>
    );
};
