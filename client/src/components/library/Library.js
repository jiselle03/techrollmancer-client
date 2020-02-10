import React from 'react';

import { NavLink } from 'react-router-dom';

export const Library = () => {
    return (
        <div className="ui secondary pointing menu">
            <NavLink exact to="/library/races" className="item">Races</NavLink>
            <NavLink exact to="/library/classes" className="item">Classes</NavLink>
            <NavLink exact to="/library/spells" className="item">Spells</NavLink>
        </div>
    );
};
