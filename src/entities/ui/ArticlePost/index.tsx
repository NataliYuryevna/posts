import {typePosts} from "../../../shared/lib/server";
import './index.css';
import PostAuthor from "./PostAuthor";
import {TimeAgo} from "../../../shared/ui";
import ReactionsButton from "./ReactionsButton";

function ArticlePost(props: typePosts) {

    return (
        <article>
            <h3>{props.title}</h3>
            <p>{props.content?.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={props.userId}/>
                <TimeAgo timestamp={props.date}/>
            </p>
            <ReactionsButton {...props}/>
        </article>
    );
}

export default ArticlePost;
