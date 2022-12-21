import React, {FC, MouseEventHandler} from 'react';
import IconSelector from "../../IconSelector/IconSelector";

import styles from "./SelectedPostPagination.module.css";
import {ThemeVariant, useTheme} from "../../../../context/ThemeContext";

interface SelectedPostPaginationProps {
    nextTitle?: string | null
    prevTitle?: string | null
    onClickNext?: MouseEventHandler<HTMLButtonElement>
    onClickPrev?: MouseEventHandler<HTMLButtonElement>
}

const SelectedPostPagination: FC<SelectedPostPaginationProps> = (
    {
        nextTitle,
        prevTitle,
        onClickNext,
        onClickPrev
    }) => {
    const { theme } = useTheme();

    return (
        <div className={styles.pagination}>
            <IconSelector
                id={"arrowPrev"}
                disabled={!prevTitle}
                onClick={onClickPrev}
                className={`${styles.arrow} ${theme === ThemeVariant.dark ? styles.dark : ""}`}
                svgClassName={`${styles.svg} ${theme === ThemeVariant.dark ? styles.dark : ""}`}
            >
                <div className={styles.btnContentLeft}>
                    <p>Prev</p>
                    {!!prevTitle && <p className={`${styles.title} ${theme === ThemeVariant.dark ? styles.dark : ""}`}>{prevTitle}</p>}
                </div>
            </IconSelector>
            <IconSelector
                id={"arrowNext"}
                disabled={!nextTitle}
                onClick={onClickNext}
                className={`${styles.arrow} ${theme === ThemeVariant.dark ? styles.dark : ""}`}
                svgClassName={`${styles.svg} ${theme === ThemeVariant.dark ? styles.dark : ""}`}
            >
                <div className={styles.btnContentRight}>
                    <p>Next</p>
                    {!!nextTitle && <p className={`${styles.title} ${theme === ThemeVariant.dark ? styles.dark : ""}`}>{nextTitle}</p>}
                </div>
            </IconSelector>
        </div>
    );
};

export default SelectedPostPagination;