import React, {FC, MouseEventHandler} from 'react';
import {InputProps} from "../../../../types/formElement";
import styles from "./FileInput.module.css";
import IconSelector from "../../IconSelector/IconSelector";

export interface FileInputProps extends InputProps{
    file: string
}

const FileInput: FC<FileInputProps> = (
    {
        title = "",
        file = "",
        id= "",
        name = "",
        type= "text",
        placeholder = "",
        value= "",
        disabled = false,
        error = {text: null, error: false},
        onFileReset,
        onChange
    }) => {

    return (
        <div className={`${styles.fileInputWrapper}`}>
            {title}
            <label className={`${error?.error ? styles.error :  ""} ${styles.inputFile}`} htmlFor={id}>
                <span className={`${file === "File" ? styles.placeholder : ""} ${styles.inputFileText}`}>
                    {file}
                </span>
                {
                    file !== "File" &&
                    <IconSelector
                        id={"delete"}
                        onClick={onFileReset}
                        className={styles.delete}
                        svgClassName={styles.svg}
                    />
                }
                <input
                    className={styles.input}
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    placeholder={placeholder}
                    accept=".jpg, .jpeg, .png"
                />
                <span className={styles.inputFileBtn}>
                    Upload new
                </span>
            </label>
            {error?.error && <p className={styles.errorMessage}>{error.text}</p>}
        </div>
    );
};

export default FileInput;