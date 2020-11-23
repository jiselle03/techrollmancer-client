import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Utils from '../../js/utils';
import Library from '../../api/library';
import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';

import { CircularProgress } from '@material-ui/core';

const EquipmentShowPage = props => {
    const [equipment, setEquipment] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Library.oneEquipment(props.match.params.slug).then(equipment => {
            setEquipment(equipment);
            setIsLoading(false);
        })
    }, [props.match.params.slug]);

    if (isLoading) return (<CircularProgress variant="determinate" />);

    const { armor_class, str_minimum, stealth_disadvantage, damage, speed, capacity, weight, cost, desc } = equipment;

    return (
        <BackgroundImage
            image="https://i.ibb.co/cctCwgk/d20.png"
            light={true}
        >
            <MainStyle>
                <div className="equipment-name">
                    <h1>
                        {equipment.name.toUpperCase()}
                    </h1>
                    <p className="category"><em>{equipment.equipment_category}, {Utils.getCategory(equipment)}</em></p>
                </div>

                <div className={equipment.equipment_category === "Weapon" ? null : "hidden"}>
                    <p><strong>Damage Dice:</strong> {damage && damage.damage_dice}</p>
                    <p><strong>Damage Bonus:</strong> {damage && damage.damage_bonus ? damage.damage_bonus : "No"}</p>
                    <p><strong>Damage Type:</strong> {damage && damage.damage_type.name}</p>
                </div>

                <div className={equipment.equipment_category === "Armor" ? null : "hidden"}>
                    <p><strong>Armor Class:</strong> {armor_class ? armor_class.base : null}</p>
                    <p><strong>Dexterity Bonus:</strong> {armor_class && armor_class.dex_bonus ? "Yes" : "No"} </p>
                    <p><strong>Maximum Bonus:</strong> {armor_class && armor_class.max_bonus ? "Yes" : "No"} </p>
                    <p><strong>Strength Minimum:</strong> {armor_class && str_minimum ? str_minimum : "No"}</p>
                    <p><strong>Stealth Disadvantage:</strong> {armor_class && stealth_disadvantage ? "Yes" : "No"}</p>
                </div>

                <div className={equipment.equipment_category === "Mounts and Vehicles" ? null : "hidden"}>
                    <p><strong>Speed:</strong> {speed ? speed.quantity : null} {speed ? speed.unit : null}</p>
                    <p><strong>Capacity:</strong> {capacity && capacity}</p>
                </div>

                <div className={equipment.gear_category === "Equipment Pack" ? null : "hidden"}>
                    <h3>Contents:</h3>
                    {equipment.contents ? equipment.contents.map(item => (
                        <div class='list-item'>• <Link to={`/libraries/equipment/${item.slug}`}>{item.name}</Link></div>
                    )) : null}
                </div>

                    <p><strong>Weight:</strong> {weight} lb.</p>
                    <p><strong>Cost:</strong> {cost.quantity} {cost.unit}</p>

                <div className={equipment.desc ? null : "hidden"}>
                    <h3>Description</h3>
                    <p>{desc}</p>
                </div>

            </MainStyle>
        </BackgroundImage>
    );
};

export default EquipmentShowPage;
