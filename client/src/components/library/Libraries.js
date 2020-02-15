import React from 'react';

import { NavLink } from 'react-router-dom';

export const Libraries = () => {
    return (
        <div className="ui secondary pointing menu">
            <NavLink exact to="/libraries/races" className="item">Races</NavLink>
            <NavLink exact to="/libraries/classes" className="item">Classes</NavLink>
            <NavLink exact to="/libraries/spells" className="item">Spells</NavLink>
            <NavLink exact to="/libraries/equipment" className="item">Equipment</NavLink>
            <NavLink exact to="/libraries/conditions" className="item">Conditions</NavLink>
        </div>
    );
};
