import React, {FC} from 'react';

import styles from "./MainContainer.module.css";
import Header from "./Header/Header";
import {WithChildren} from "../../../types/withChildren";
import Footer from "./Footer/Footer";
import {ThemeVariant, useTheme} from "../../../context/ThemeContext";

const MainWrapper: FC<WithChildren> = ({ children }) => {
    const { theme } = useTheme();

    return (
        <div className={`${styles.mainContainer} ${theme === ThemeVariant.dark ? styles.dark : ""}`}>
            <Header />
            <main className={styles.wrapper}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainWrapper;