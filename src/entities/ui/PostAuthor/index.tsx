import {useUsersSelector} from "../../lib/hooks/redux";
import {selectAllUsers} from "../../lib/slice/user";
function ArticlePost(props:{userId: string}) {

    const users = useUsersSelector(selectAllUsers);

    const author = users.find(user=> user.id === props.userId);

    return (
        <span>{author ? author.name : 'Unknown author' }</span>
    );
}

export default ArticlePost;
