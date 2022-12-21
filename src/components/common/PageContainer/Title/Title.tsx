import React, {FC} from 'react';

import styles from "./Title.module.css";
import {ThemeVariant, useTheme} from "../../../../context/ThemeContext";

interface TitleProps {
    title: string
}

const Title: FC<TitleProps> = ({title = ""}) => {
    const {theme} = useTheme()

    return (
        <h2 className={`${styles.title} ${theme === ThemeVariant.dark ? styles.dark : ""}`}>
            {title}
        </h2>
    );
};

export default Title;