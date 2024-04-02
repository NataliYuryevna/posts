import {FormPost} from "../../../../entities/ui";
import type {typePosts} from "../../../../shared/lib/server";
import {useAppDispatch, useUsersSelector, postAdded, selectAllUsers} from "../../../../entities/lib";

function AddPostForm() {
    const dispatch = useAppDispatch();
    const users = useUsersSelector(selectAllUsers);
    function setAddPost( newPost:Omit<typePosts,'id'> ) {
        dispatch(
            postAdded(newPost.title, newPost.content, newPost.userId)
        )
    }

    return <FormPost setAddPost={setAddPost} users={users}/>
}

export default AddPostForm;