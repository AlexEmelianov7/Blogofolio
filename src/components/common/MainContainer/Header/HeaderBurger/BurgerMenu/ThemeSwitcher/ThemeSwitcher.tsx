import React, {FC} from 'react';
import {ThemeVariant, useTheme} from "../../../../../../../context/ThemeContext";
import ThemeSwitcherBtn from "./ThemeSwitcherBtn/ThemeSwitcherBtn";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher: FC = () => {

    const{theme, setTheme} = useTheme();

    const handleSetLightTheme = () => {
        setTheme(ThemeVariant.light);
        localStorage.setItem("theme", ThemeVariant.light);
    }

    const handleSetDarkTheme = () => {
        setTheme(ThemeVariant.dark);
        localStorage.setItem("theme", ThemeVariant.dark);
    }

    return (
        <div className={styles.themeButtons}>
            <ThemeSwitcherBtn theme={ThemeVariant.light} activeTheme={theme} onClick={handleSetLightTheme} />
            <ThemeSwitcherBtn theme={ThemeVariant.dark} activeTheme={theme} onClick={handleSetDarkTheme} />
        </div>
    );
};

export default ThemeSwitcher;