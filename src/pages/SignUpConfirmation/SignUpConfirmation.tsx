import React, {FC, useEffect} from 'react';
import {PageProps} from "../../types/pageProps";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Routes} from "../../routes/routes";
import AuthForm, {AuthFormProps} from "../../components/common/AuthForm/AuthForm";
import PageContainer from "../../components/common/PageContainer/PageContainer";

import styles from "./SignUpConfirmation.module.css";
import UserService from "../../services/userService";

const SignUpConfirmation: FC<PageProps> = ({title = ""}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleRedirectToHomePage = () => navigate(Routes.blog);

    const { uid, token } = useParams();

    const signUpConfirmationConfig: AuthFormProps = {
        topDescription: `Please activate your account with the activation link in the email <b>${location.search.split("email=")[1]}</b> <br />Please, check your email`,
        page: Routes.signUpConfirmation,
        actionButton: {
            onSubmit: handleRedirectToHomePage,
            title: "Go to home"
        }
    }

    useEffect(() => {
        if (uid && token) {
            UserService.activateUser({uid, token});
        }
    }, [])

    return (
        <PageContainer title={title}>
            <div className={styles.formWrapper}>
                <AuthForm {...signUpConfirmationConfig}/>
            </div>
        </PageContainer>
    );
};

export default SignUpConfirmation;