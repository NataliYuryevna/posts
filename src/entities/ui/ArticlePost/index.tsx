import {typePosts} from "../../../shared/lib/server";
import './index.css';
import PostAuthor from "./PostAuthor";
import {TimeAgo} from "../../../shared/ui";

type propsArticle = Omit<typePosts,'id'>;
function ArticlePost(props:propsArticle) {

    return (
        <article>
            <h3>{props.title}</h3>
            <p>{props.content?.substring(0,100)}</p>
            <p>
                <PostAuthor userId={props.userId}/>
                <TimeAgo timestamp={props.date}/>
            </p>
        </article>
    );
}

export default ArticlePost;
