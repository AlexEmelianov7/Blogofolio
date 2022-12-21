import React, {FC} from 'react';

import styles from "./Footer.module.css";
import {ThemeVariant, useTheme} from "../../../../context/ThemeContext";

interface FooterProps {
    className?: string
}

const Footer: FC<FooterProps> = ({className = ""}) => {
    const {theme} = useTheme();

    return (
        <footer className={`${styles.footer} ${theme === ThemeVariant.dark ? styles.dark : ""}`}>
            <p className={styles.description}>©2022 Blogfolio</p>
            <p className={styles.description}>All rights reserved</p>
        </footer>
    );
};

export default Footer;