import React, {FC, useEffect, useState} from 'react';

import styles from "./Pagination.module.css";
import {usePagination} from "../../../context/PaginationContext";
import {IPost} from "../PostList/PostItem/PostItem";
import IconSelector from "../IconSelector/IconSelector";
import {ThemeVariant, useTheme} from "../../../context/ThemeContext";

interface PaginationProps {
    items?: IPost[]
}

const Pagination: FC<PaginationProps> = ({items= []}) => {
    const { theme } = useTheme();

    const {paginationData: {
        previous,
        next
    },
        activePage,
        pageResults,
        pageNumbers,
        handleChangePage,
        handleSetActivePage
    } = usePagination();

    const [paginationItems, setPaginationItems] = useState<number[]>([]);

    const getPaginationItems = () => {
        const result = pageNumbers.slice(activePage >= 3 ? activePage - 3 : activePage - activePage, activePage < pageNumbers.length ? activePage + 2 : activePage);

        if (!result.includes(pageNumbers[pageNumbers.length - 1])) {
            result.push(pageNumbers.at(-1) || 1)
        }

        if (!result.includes(pageNumbers[0])) {
            result.unshift(pageNumbers[0])
        }

        return result
    }

    useEffect(() => {
        setPaginationItems(getPaginationItems())
    }, [pageNumbers, activePage])

    return (
        !!items?.length && !!pageResults.length
            ?
            <div className={styles.pagination}>
                <IconSelector
                    id={"arrowPrev"}
                    dataRoute={"prev"}
                    disabled={!previous}
                    onClick={handleChangePage}
                    description={"Prev"}
                    className={`${styles.arrow} ${theme === ThemeVariant.dark ? styles.dark : ""}`}
                    svgClassName={`${styles.svg} ${theme === ThemeVariant.dark ? styles.dark : ""}`}
                />
                <nav className={`${styles.paginationNumbers} ${theme === ThemeVariant.dark ? styles.dark : ""}`}>
                    {paginationItems.map((num, index) => {
                        if ((num + 1) !== paginationItems[index + 1] && num !== paginationItems.at(-1)) {
                            return (
                                <>
                                    <span
                                        key={num}
                                        data-id={num - 1}
                                        onClick={handleSetActivePage}
                                        className={activePage === num ? styles.active : ""}
                                    >
                                        {num}
                                    </span>
                                    <span key={`smt${num}`}>...</span>
                                </>
                            )
                        } else {
                            return (
                                <span
                                    key={num}
                                    data-id={num - 1}
                                    onClick={handleSetActivePage}
                                    className={activePage === num ? styles.active : ""}
                                >
                                    {num}
                                </span>
                            )
                        }}
                    )}
                </nav>
                <IconSelector
                    id={"arrowNext"}
                    dataRoute={"next"}
                    disabled={!next}
                    onClick={handleChangePage}
                    description={"Next"}
                    className={`${styles.arrow} ${theme === ThemeVariant.dark ? styles.dark : ""}`}
                    svgClassName={`${styles.svg} ${theme === ThemeVariant.dark ? styles.dark : ""}`}
                />
            </div>
            :
            null
    );
};

export default Pagination;