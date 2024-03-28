import './index.css';
import ArticlePost from "../../../../entities/ui/ArticlePost";
import {selectAllPost} from "../../../../entities/lib/slice";
import {useAppSelector} from "../../../../entities/lib/hooks/redux";

function PostsList() {
    const posts = useAppSelector(selectAllPost);

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
