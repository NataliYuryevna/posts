import './index.css'
import {useRef} from "react";
import {Textarea, Button, Select, Input} from "../../../shared/ui";
import type {typePosts, typeUsers} from "../../../shared/lib/server";

type typePost = Omit<typePosts, 'id' | 'reactions' | 'date'>;

interface propsForm {
    setAddPost: (newPost: typePost) => void,
    users: Array<typeUsers>
}

function FormPost(props: propsForm) {
    const refForm = useRef<HTMLFormElement>(null);

    function onSavePostClick() {
        if (refForm.current)
            props.setAddPost({
                title: refForm.current.postTitle.value,
                content: refForm.current.postContent.value,
                userId: refForm.current.postAuthor.value
            });
    }


    return (
        <form ref={refForm}>
            <Input name={'postTitle'} labelText={'Title post'}/>
            <Select labelText={'Author'} name={'postAuthor'}
                    options={props.users.map(user => ({id: user.id, value: user.name}))}/>
            <Textarea name={'postContent'} labelText={'Content post'}/>
            <Button text={'Add'} onClick={onSavePostClick}/>
        </form>
    );
}

export default FormPost;
