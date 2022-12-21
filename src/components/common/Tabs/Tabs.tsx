import React, {FC, useState} from 'react';

import styles from "./Tabs.module.css";
import TabItem, {ITabItem} from "./TabItem/TabItem";
import {ThemeVariant, useTheme} from "../../../context/ThemeContext";
import {useLocation, useNavigate} from "react-router-dom";
import {Routes} from "../../../routes/routes";
import Select from "./Select/Select";

interface TabsProps {
    config: ITabItem[]
    activeTabItem: number
    onClick: any
}

const Tabs: FC<TabsProps> = ({ config = [], activeTabItem= 1, onClick = () => {} }) => {
    const { theme } = useTheme();

    const [selectValue, setSelectValue] = useState("Order by");
    const navigate = useNavigate();
    const location = useLocation();

    const handleSetSelectValue = async (event: any) => {
        if (event.target.value === "All") {
            setSelectValue(event.target.value);
            navigate(Routes.blog)
        } else {
            setSelectValue(event.target.value);
            location.search = `?search=${event.target.value}`;
            navigate(`${Routes.blog}?ordering=${event.target.value.toLowerCase()}`);
        }
    }

    return (
        <nav className={`${styles.tabs} ${theme === ThemeVariant.dark ? styles.dark : ""}`}>
            {config.map(tab => (
                <TabItem
                    key={tab.id}
                    id={tab.id}
                    title={tab.title}
                    activeTabItem={activeTabItem}
                    disabled={tab.disabled}
                    onClick={() => onClick(tab.id)}
                />
            ))}
            <Select selectValue={selectValue} onSelect={handleSetSelectValue}/>
        </nav>
    );
};

export default Tabs;