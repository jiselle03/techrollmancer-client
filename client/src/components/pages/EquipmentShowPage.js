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

    const weapon_cat = [
        {
            name: "Damage Dice",
            content: damage && damage.damage_dice
        },
        {
            name: "Damage Bonus",
            content: damage && damage.damage_bonus ? damage.damage_bonus: "No"
        },
        {
            name: "Damage Type",
            content: damage && damage.damage_type_name
        }
    ];

    const armor_cat = [
        {
            name: "Armor Class",
            content: armor_class ? armor_class.base : null
        },
        {
            name: "Dexterity Bonus",
            content: armor_class && armor_class.dex_bonus ? "Yes" : "No"
        },
        {
            name: "Maximum Bonus",
            content: armor_class && armor_class.max_bonus ? "Yes" : "No"
        },
        {
            name: "Strength Minimum",
            content: armor_class && str_minimum ? str_minimum : "No"
        },
        {
            name: "Stealth Disadvantage",
            content: armor_class && stealth_disadvantage ? "Yes" : "No"
        }
    ];

    const mv_cat = [
        {
            name: "Speed",
            content: `${speed ? speed.quantity: null} ${speed ? speed.unit : null}`
        },
        {
            name: "Capacity",
            content: capacity
        }
    ];

    const cats = [{name: "Weapon", content: weapon_cat}, {name: "Armor", content: armor_cat}, {name: "Mounts and Vehicles", content: mv_cat}];

    return (
        <BackgroundImage
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <MainStyle>
                <div className="equipment-name">
                    <h1>
                        {equipment.name.toUpperCase()}
                    </h1>
                    <p className="category"><em>{equipment.equipment_category}, {Utils.getCategory(equipment)}</em></p>
                </div>

                {cats.map(category => (
                    <div 
                        key={category.name} 
                        className={equipment.equipment_category === category.name ? null : "hidden"}
                    >
                        {category.content.map(cat => (
                            <p key={cat.name}><strong>{cat.name}:</strong> {cat.content}</p>
                        ))}
                    </div>
                ))}

                <div className={equipment.gear_category === "Equipment Pack" ? null : "hidden"}>
                    <h3>Contents:</h3>
                    {equipment.contents ? equipment.contents.map(item => (
                        <div key={item.slug} className="list-item">• <Link to={`/libraries/equipment/${item.slug}`}>{item.name}</Link></div>
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
