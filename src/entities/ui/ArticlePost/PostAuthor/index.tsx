import {useUsersSelector, selectAllUsers} from "../../../lib";

function PostAuthor(props: { userId: string }) {

    const users = useUsersSelector(selectAllUsers);

    const author = users.find(user => user.id === props.userId);

    return (
        <span>{'by'} {author ? author.name : 'Unknown author'}</span>
    );
}

export default PostAuthor;
