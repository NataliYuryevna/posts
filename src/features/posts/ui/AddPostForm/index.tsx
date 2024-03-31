import FormPost from "../../../../entities/ui/FormPost";
import type {typePosts} from "../../../../shared/lib/server";
import {useAppDispatch, useUsersSelector} from "../../../../entities/lib/hooks/redux";
import {postAdded} from "../../../../entities/lib/slice/post";
import {selectAllUsers} from "../../../../entities/lib/slice/user";

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