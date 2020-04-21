import React from 'react';

import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const SpellDetails = props => {
    const { name, desc, higher_level, range, components, material,
            ritual, duration, concentration, casting_time, school } = props.spell;

    return(
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <h5>{name}</h5>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div style={{display: "block"}}>
                    <h6>Description</h6>
                    <p>{desc}</p>

                    <div className={higher_level ? null : "hidden"}>
                        <h6>Higher Level</h6>
                        <p>{higher_level}</p>
                    </div>

                    <h6>Range</h6>
                    <p>{range}</p>

                    <h6>Components</h6>
                    <p>{components}</p>

                    <div className={material ? null : "hidden"}>
                    <h6>Material</h6>
                    <p>{material}</p>
                    </div>

                    <h6>Ritual</h6>
                    <p>{ritual}</p>

                    <h6>Duration</h6>
                    <p>{duration}</p>

                    <h6>Concentration</h6>
                    <p>{concentration}</p>

                    <h6>Casting Time</h6>
                    <p>{casting_time}</p>

                    <h6>School</h6>
                    <p>{school}</p>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default SpellDetails;
