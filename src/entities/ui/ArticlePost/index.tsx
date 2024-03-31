import {typePosts} from "../../../shared/lib/server";
import './index.css';
import PostAuthor from "../PostAuthor";

type propsArticle = Omit<typePosts,'id'>;
function ArticlePost(props:propsArticle) {

    return (
        <article>
            <h3>{props.title}</h3>
            <PostAuthor userId={props.userId}/>
            <p>{props.content?.substring(0,100)}</p>
        </article>
    );
}

export default ArticlePost;
