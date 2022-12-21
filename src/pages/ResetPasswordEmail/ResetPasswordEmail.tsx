import React, {ChangeEventHandler, FC, useState} from 'react';
import {PageProps} from "../../types/pageProps";
import PageContainer from "../../components/common/PageContainer/PageContainer";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../routes/routes";
import AuthForm, {AuthFormProps} from "../../components/common/AuthForm/AuthForm";

import styles from "./ResetPasswordEmail.module.css";

const ResetPasswordEmail: FC<PageProps> = ({title = ""}) => {
    const navigate = useNavigate();
    const handleRedirectToHomePage = () => navigate(Routes.blog);

    const [email, setEmail] = useState<string>("");
    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: { value: email }}) => setEmail(email);

    const resetPasswordEmailFormConfig: AuthFormProps = {
        topDescription: `You will receive an email <b>example@gmail.com</b> with a link to reset your password!`,
        inputs: [{
            title: "Email",
            id: "email",
            name: "userEmail",
            value: email,
            onChange: handleSetEmail,
            placeholder: "example@gmail.com"
        }],
        page: Routes.resetPasswordEmail,
        actionButton: {
            onSubmit: handleRedirectToHomePage,
            title: "Go to home"
        }
    }

    return (
        <PageContainer title={title}>
            <div className={styles.formWrapper}>
                <AuthForm {...resetPasswordEmailFormConfig}/>
            </div>
        </PageContainer>
    );
};

export default ResetPasswordEmail;