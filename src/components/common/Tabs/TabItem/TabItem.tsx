import React, {FC} from 'react';

import styles from "./TabItem.module.css";
import {ThemeVariant, useTheme} from "../../../../context/ThemeContext";

export interface ITabItem {
    id: number
    title: string
    disabled?: boolean
}

interface TabItemProps extends ITabItem{
    activeTabItem: number
    onClick: any
}

const TabItem: FC<TabItemProps> = (
        {
            id,
            onClick,
            title = "",
            activeTabItem ,
            disabled = false
        }) => {

    const { theme } = useTheme();

    return (
        <li
            onClick={!disabled ? onClick : () => {}}
            className={`${styles.tabItem} ${theme === ThemeVariant.dark ? styles.tabItemDark : ""} ${activeTabItem === id && theme === ThemeVariant.light ? styles.active : ""}
            ${activeTabItem === id && theme === ThemeVariant.dark ? styles.darkActive : "" } ${disabled ? styles.disabled : styles.tabItem}`}
        >
            {title}
        </li>
    );
};

export default TabItem;