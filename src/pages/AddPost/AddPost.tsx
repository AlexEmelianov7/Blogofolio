import React, {FC} from 'react';
import {PageProps} from "../../types/pageProps";
import PageContainer from "../../components/common/PageContainer/PageContainer";
import AddPostForm from "./AddPostForm/AddPostForm";


const AddPost: FC<PageProps> = ({title = ""}) => {

    return (
        <PageContainer title={title}>
            <AddPostForm />
        </PageContainer>
    );
};

export default AddPost;