import FormPost from "../../../../entities/ui/FormPost";
import {typePosts} from "../../../../shared/lib/server";
import {useAppDispatch} from "../../../../entities/lib/hooks/redux";
import {postAdded} from "../../../../entities/lib/slice";

function AddPostForm() {
    const dispatch = useAppDispatch();
    function setAddPost( newPost:Omit<typePosts,'id'> ) {
        dispatch(
            postAdded(newPost.title, newPost.content)
        )
    }

    return <FormPost setAddPost={setAddPost}/>
}

export default AddPostForm;