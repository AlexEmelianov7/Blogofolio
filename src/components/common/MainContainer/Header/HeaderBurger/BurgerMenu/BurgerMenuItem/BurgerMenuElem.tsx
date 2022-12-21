import React, {FC} from 'react';

import {WithChildren} from "../../../../../../../types/withChildren";

import styles from "./BurgerMenuElem.module.css";

export enum BurgerMenuElemVariant {
    primary = "primary",
    secondary = "secondary"
}

interface BurgerMenuElemProps {
    onClick: () => void
    variant?: BurgerMenuElemVariant
    className?: string
}

const BurgerMenuElem: FC<BurgerMenuElemProps & WithChildren> = (
    {
        onClick,
        variant= BurgerMenuElemVariant.primary,
        children,
        className
    }) => {
    return (
        <li
            onClick={onClick}
            className={`${styles.burgerMenuElem} ${variant === BurgerMenuElemVariant.secondary ? styles.secondary : styles.primary} ${className}`}
        >
            {children}
        </li>
    );
};

export default BurgerMenuElem;