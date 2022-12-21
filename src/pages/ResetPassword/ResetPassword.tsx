import React, {ChangeEventHandler, FC, useState} from 'react';
import {PageProps} from "../../types/pageProps";
import AuthForm, {AuthFormProps} from "../../components/common/AuthForm/AuthForm";
import {Routes} from "../../routes/routes";
import PageContainer from "../../components/common/PageContainer/PageContainer";

import styles from "./ResetPassword.module.css";

interface ResetPasswordProps {
    newPassword: string
    confirmPassword: string
}

const ResetPassword: FC<PageProps> = ({title= ""}) => {
    const [resetPasswordForm, setResetPasswordForm] = useState<ResetPasswordProps>({
        newPassword: "",
        confirmPassword: ""
    })
    const handleSetNewPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: newPassword}}) => setResetPasswordForm(prevState => ({...prevState, newPassword}));
    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: confirmPassword}}) => setResetPasswordForm(prevState => ({...prevState, confirmPassword}));

    const handleSetPassword = () =>console.log("Set Password");

    const resetPasswordFormConfig: AuthFormProps = {
        inputs: [
            {
                title: "New Password",
                id: "newPassword",
                name: "userNewPassword",
                value: resetPasswordForm.newPassword,
                onChange: handleSetNewPassword,
                placeholder: "Your password"
            },
            {
                title: "Confirm Password",
                id: "confirmPassword",
                name: "userConfirmPassword",
                value: resetPasswordForm.confirmPassword,
                onChange: handleSetConfirmPassword,
                placeholder: "Confirm your password"
            }
        ],
        page: Routes.resetPassword,
        actionButton: {
            onSubmit: handleSetPassword,
            title: "Set password"
        }

    }

    return (
        <PageContainer title={title}>
            <div className={styles.formWrapper}>
                <AuthForm {...resetPasswordFormConfig}/>
            </div>
        </PageContainer>
    );
};

export default ResetPassword;