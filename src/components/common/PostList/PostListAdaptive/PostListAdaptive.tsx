import React, {FC} from 'react';
import {PostListProps} from "../PostList";

import styles from "../PostList.module.css";
import PostItem from "../PostItem/PostItem";
const PostListAdaptive: FC<PostListProps> = ({posts}) => {
    return (
        <div className={styles.adaptive}>
            {posts
                .filter((post, index) => index <= 9)
                .map(
                    (post, index) =>
                        <PostItem key={post.id} {...post} size={"M"}/>
                )
            }
        </div>
    );
};

export default PostListAdaptive;