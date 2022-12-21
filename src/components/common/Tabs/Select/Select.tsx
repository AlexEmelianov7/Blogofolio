import React, {FC} from 'react';

import styles from "../Tabs.module.css";

interface SelectProps {
    selectValue: string
    onSelect: any
}

const Select:FC<SelectProps> = ({selectValue, onSelect}) => {
    return (
        <select className={styles.select} value={selectValue} onChange={onSelect}>
            <option disabled={true} value="Order by">Order by</option>
            <option value="All">All</option>
            <option value="Title">Title</option>
            <option value="Author">Author</option>
            <option value="Date">Date</option>
            <option value="Lesson_num">Lesson_num</option>
        </select>
    );
};

export default Select;