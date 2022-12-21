import React, {FC} from 'react';

import styles from "./DropdownMenu.module.css";
import BurgerMenuElem, {
    BurgerMenuElemVariant
} from "../../../MainContainer/Header/HeaderBurger/BurgerMenu/BurgerMenuItem/BurgerMenuElem";
import {IMenuElem} from "../../../MainContainer/Header/HeaderBurger/BurgerMenu/AuthorizedMenu/AuthorizedMenu";

interface DropdownMenuProps {
    menuElements: IMenuElem[]
    className?: string
}

const DropdownMenu: FC<DropdownMenuProps> = ({menuElements, className}) => {

    return (
        <div className={`${styles.dropdownMenu} ${className}`}>
            {menuElements.map(elem => <BurgerMenuElem key={elem.description} onClick={elem.action} variant={BurgerMenuElemVariant.primary}>{elem.description}</BurgerMenuElem>)}
        </div>
    );
};

export default DropdownMenu;