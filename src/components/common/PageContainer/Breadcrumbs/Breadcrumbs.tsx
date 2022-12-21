import React, {FC, useMemo} from 'react';
import styles from "./Breadcrumbs.module.css";
import {Link, matchPath, PathMatch, useLocation, useParams} from "react-router-dom";
import {IRoute, PUBLIC_ROUTES, Routes} from "../../../../routes/routes";
import {ThemeVariant, useTheme} from "../../../../context/ThemeContext";

const Breadcrumbs: FC = () => {
    const { theme } = useTheme();
    const { pathname } = useLocation();
    const params = useParams();
    function matchRouteDefinition(definitions: IRoute[]): PathMatch[] {
        const crumbs: PathMatch[] = [];

        definitions.forEach((definition) => {
            const match = matchPath(
                { path: definition.path, end: false },
                pathname
            );
            if (match) {
                crumbs.push(match);
            }
        });

        return crumbs;
    }

    const matches = useMemo(() => matchRouteDefinition(PUBLIC_ROUTES), [pathname]);

    const isAuthPage = useMemo(() => {
        switch (pathname) {
            case Routes["signUpSuccess"]:
            case Routes["signUp"]:
            case Routes["signIn"]:
            case Routes["signUpConfirmation"]:
            case Routes["resetPassword"]:
            case Routes["resetPasswordEmail"]:
                return true

            default:
                return false
        }
    }, [pathname]);

    const isPostPage = useMemo(() => matches[1]?.pattern.path === Routes.post, [pathname]);

    return (
        <div className={styles.breadcrumbs}>
            {isAuthPage
                ?
                <Link
                    className={`${styles.authLink} ${theme === ThemeVariant.dark ? styles.dark : ""}`}
                    to={Routes.blog}
                >
                    Back to home
                </Link>
                :
                <>
                    <Link
                        className={`${styles.homeLink} ${theme === ThemeVariant.dark ? styles.dark : ""}`}
                        to={Routes.blog}
                    >
                        Home
                    </Link>
                    <span className={styles.currentPost}>{isPostPage ? `Post ${params?.id}` : "Add post"}</span>
                </>
            }
        </div>
    );
};

export default Breadcrumbs;