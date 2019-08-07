import React from 'react'
import classes from './MenuToggle.module.scss'
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle
    ];

    if (props.isOpen) {
        cls.push(classes.open)
    }

    return (
        <FontAwesomeIcon icon={props.isOpen ? faTimes : faBars}
                         onClick={props.onToggle}
                         className={cls.join(' ')}/>
    )
};

export default MenuToggle
