import {useSelector} from "react-redux";
import ArticlePost from "../../../../entities/ui/ArticlePost";
import {selectAllPost} from "../../model/slice";
import './index.css';

function PostsList() {
    const posts = useSelector(selectAllPost)

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
