import React, {FC} from 'react';

import styles from "./TextArea.module.css";
import {TextAreaProps} from "../../../types/formElement";

const TextArea: FC<TextAreaProps> = (
    {
        title = "",
        onChange,
        id= "",
        placeholder= "",
        value= "",
        className = "",
        name= "",
        disabled= false,
        error= { text: null, error: false }
    }) => {
    return (
        <div className={`${styles.textareaWrapper} ${!!className ? className : ""}`}>
            <label className={`${styles.label}`} htmlFor={id}>
                {title}
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`${styles.textarea} ${error?.error ? styles.error : ""}`}
                />
                {error?.error && <p className={styles.errorMessage}>{error.text}</p>}
            </label>
        </div>
    );
};

export default TextArea;