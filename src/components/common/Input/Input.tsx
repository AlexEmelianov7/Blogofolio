import React, {FC} from 'react';

import styles from "./Input.module.css";
import {ThemeVariant, useTheme} from "../../../context/ThemeContext";
import {InputProps} from "../../../types/formElement";

const Input: FC<InputProps> = (
    {
        id= "",
        title = "",
        type= "text",
        value= "",
        onChange,
        name = "",
        disabled = false,
        placeholder = "",
        error = {text: null, error: false},
        className = "",
    }) => {

    const {theme} = useTheme();

    return (
        <div className={`${styles.inputWrapper} ${!!className ? className : ""}`}>
            <label className={`${styles.label} ${theme === ThemeVariant.dark ? styles.dark : ""}`} htmlFor={id}>
                {title}
                <input
                    className={`${styles.input} ${error?.error ? styles.error : ""} `}
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    placeholder={placeholder}
                />
            </label>
            {error?.error && <p className={styles.errorMessage}>{error.text} </p>}
        </div>
    );
};

export default Input;