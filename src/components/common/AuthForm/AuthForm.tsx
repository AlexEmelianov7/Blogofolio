import React, {FC, useMemo} from 'react';
import {Routes} from "../../../routes/routes";
import Input from "../Input/Input";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

import styles from "./AuthForm.module.css";
import {ThemeVariant, useTheme} from "../../../context/ThemeContext";
import {InputProps} from "../../../types/formElement";

export interface AuthFormProps {
    page: Routes
    actionButton: {
        title: string,
        onSubmit: () => void
    }
    inputs?: InputProps[]
    topDescription?: string
}

const AuthForm: FC<AuthFormProps> = (
    {
        page,
        actionButton,
        inputs = [],
        topDescription
    }) => {

    const { theme } = useTheme();

    const isSignInPage = useMemo(() => page === Routes.signIn, [page])
    const isSignUpPage = useMemo(() => page === Routes.signUp, [page])

    return (
        <form className={`${styles.form} ${theme === ThemeVariant.dark ? styles.formDark : ""}`}>
            {!! topDescription &&
                <p
                    className={`${styles.topDescription} ${theme === ThemeVariant.dark ? styles.topDescriptionDark : ""}`}
                    dangerouslySetInnerHTML={{__html: topDescription}}
                >
                </p>
            }
            {inputs.map(input => <Input className={styles.formInput} key={input.id} {...input}/>)}
            {isSignInPage &&
                <Link
                    to={Routes.resetPasswordEmail}
                    className={`${styles.forgotPassword} ${theme === ThemeVariant.dark ? styles.forgotPasswordDark : ""}`}
                >
                    Forgot Password?
                </Link>
            }
            <Button onClick={actionButton.onSubmit} className={styles.submitBtn}>
                {actionButton.title}
            </Button>
            {(isSignInPage || isSignUpPage) && (
                <div className={styles.description}>
                    <p className={`${styles.linkDescription} ${theme === ThemeVariant.dark ? styles.linkDescriptionDark : ""}`}>
                        {isSignInPage ? "Don’t have an account?" : "Already have an account?"}
                        <Link
                            className={`${styles.link} ${theme === ThemeVariant.dark ? styles.linkDark : ""}`}
                            to={isSignInPage ? Routes.signUp : Routes.signIn}
                        >
                            {isSignInPage ? "Sign Up" : "Sign In" }
                        </Link>
                    </p>
                </div>
            )}
        </form>
    );
};

export default AuthForm;