import React, {FC} from 'react';
import styles from "./PostList.module.css"

import PostItem, {IPost} from "./PostItem/PostItem";


export interface PostListProps {
    posts: IPost[]
}

const PostList: FC<PostListProps> = ({posts = []}) => {
    const getPostItemSize = (index: number) => {
        if (index <= 4) {
            return "M"
        } else {
            return "S"
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.mediumPosts}>
                    {posts
                        .filter((post, index) => index === 0)
                        .map(
                            (post, index) =>
                                <PostItem key={post.id} {...post} size={"L"}/>
                        )
                    }
                    {posts
                        .filter((post, index) => index >=1 && index <=4)
                        .map(
                            (post, index) =>
                                <PostItem key={post.id} {...post} size={getPostItemSize(index)}/>
                            )
                    }
                </div>
            </div>
            <div className={styles.rightSide}>
                {posts
                    .map(
                        (post, index) =>
                            <PostItem key={post.id} {...post} size={getPostItemSize(index)}/>
                    )
                    .filter((post, index) => index >= 5)
                }
            </div>
        </div>
    );
};

export default PostList;