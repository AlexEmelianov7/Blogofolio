import React, {FC} from 'react';
import {PageProps} from "../../types/pageProps";
import AuthForm, {AuthFormProps} from "../../components/common/AuthForm/AuthForm";
import {Routes} from "../../routes/routes";
import {useNavigate} from "react-router-dom";
import PageContainer from "../../components/common/PageContainer/PageContainer";

import styles from "./SignUpSuccess.module.css";

const SignUpSuccess: FC<PageProps> = ({title= ""}) => {
    const navigate = useNavigate();
    const handleRedirectToHomePage = () => navigate(Routes.blog);

    const signUpSuccessFormConfig: AuthFormProps = {
        topDescription: `Email confirmed. <br /> Your registration is now completed`,
        page: Routes.signUpSuccess,
        actionButton: {
            onSubmit: handleRedirectToHomePage,
            title: "Go to home"
        }
    }

    return (
        <PageContainer title={title}>
            <div className={styles.formWrapper}>
                <AuthForm {...signUpSuccessFormConfig} />
            </div>
        </PageContainer>
    );
};

export default SignUpSuccess;