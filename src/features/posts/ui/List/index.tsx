import './index.css';
import ArticlePost from "../../../../entities/ui/ArticlePost";
import {selectAllPost} from "../../../../entities/lib/slice/post";
import {usePostsSelector} from "../../../../entities/lib/hooks/redux";

function PostsList() {
    const posts = usePostsSelector(selectAllPost);

    return (
        <section>
            <h2>Posts</h2>
            {
                posts.map(post => <ArticlePost key={post.id} {...post}/>)
            }
        </section>
    );
}

export default PostsList;
