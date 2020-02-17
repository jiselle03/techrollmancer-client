import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const CharacterNav = props => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { character } = props;
    
    return (
        <Tabs
            value={value}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={handleChange}
            className="tabs"
        >
            <Tab label="STATS" to={`/characters/${character.id}/stats`} component={Link} />
            <Tab label="SPELLS" to={`/characters/${character.id}/spells`} component={Link} />
            <Tab label="INVENTORY" to={`/characters/${character.id}/inventory`} component={Link} />
            <Tab label="FEATURES" to={`/characters/${character.id}/features`} component={Link} />
            <Tab label="TRAITS" to={`/characters/${character.id}/traits`} component={Link} />
            <Tab label="JOURNAL" to={`/characters/${character.id}/journal`} component={Link} />
      </Tabs>
    );
};
