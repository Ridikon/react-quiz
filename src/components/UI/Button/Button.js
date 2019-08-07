import React from 'react'
import classes from './Button.module.scss'

const Button = props => {
    const cls = [
        props.useClass,
        classes.Button,
        classes[props.type]
    ];

    if (props.disabled) {
        cls.push(classes.disabled)
    }

    return (
            <button
                className={cls.join(' ')}
                onClick={props.onClick}
                disabled={props.disabled}
            >{props.children}</button>
    )
};

export default Button
