import React, {FC, useMemo} from 'react';
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import {WithChildren} from "../../../types/withChildren";
import {PageProps} from "../../../types/pageProps";
import Title from "./Title/Title";
import {useLocation} from "react-router-dom";
import {Routes} from "../../../routes/routes";

const PageContainer: FC<PageProps & WithChildren> = ({children, title = ""}) => {
    const {pathname} = useLocation();

    const hideBreadcrumbs = useMemo(() => {
        switch (pathname) {
            case Routes["blog"]:
            case Routes["search"]:
                return true

            default:
                return false
        }
    }, [pathname])

    return (
        <>
            {!hideBreadcrumbs && <Breadcrumbs/>}
            {!!title && <Title title={title}/>}
            {children}
        </>
    );
};

export default PageContainer;