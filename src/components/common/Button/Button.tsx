import React, {FC, MouseEventHandler} from 'react';
import {WithChildren} from "../../../types/withChildren";
import styles from "./Button.module.css";

export enum ButtonVariant {
    primary = "primary",
    secondary = "secondary"
}

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
    type?: ButtonType
    variant?: ButtonVariant
    onClick?: MouseEventHandler
    className?: string
}

const Button: FC<ButtonProps & WithChildren> = (
    {
        variant= ButtonVariant.primary,
        type= "button",
        children,
        onClick = () => {},
        className= ""
    }) => {
    return (
        <button
            onClick={onClick}
            className={`
                ${styles.btn}
                ${className} 
                ${variant === ButtonVariant.primary ? styles.primary : styles.secondary}
            `}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;