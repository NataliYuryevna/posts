import './index.css'
import {useState, useRef, useEffect} from "react";
import {Textarea, Button, Select, Input} from "../../../shared/ui";
import type {typePosts, typeUsers} from "../../../shared/lib/server";

type typePost = Omit<typePosts,'id'>;

interface propsForm {
    setAddPost: (newPost:typePost)=>void,
    users: Array<typeUsers>
}

function FormPost(props:propsForm) {
    const [addPost, setAddPost] = useState<boolean|undefined>(undefined);
    const newPost = useRef<typePost>({title: '', content: '' , userId: '', date: new Date().toString()});

    useEffect(()=>{
        if(addPost === false && newPost.current.title.length && newPost.current.content.length  && newPost.current.userId.length ) {
            props.setAddPost(newPost.current);
        }
    },[addPost])

    function handleTitle(title:string) {
        newPost.current.title = title;
    }

    function handleContent(content:string) {
        newPost.current.content = content;
    }

    function handleAuthor(user:string) {
        newPost.current.userId = user;
    }

    function onSavePostClick() {
        setAddPost(true);
        setTimeout(()=>setAddPost(false), 1000);
    }


    return (
        <form>
            <Input name={'postTitle'} callback={handleTitle} labelText={'Title post'} changeValue={addPost||false}/>
            <Select callback={handleAuthor} labelText={'Author'} name={'postAuthor'} changeValue={addPost||false} options={props.users.map(user=>({id:user.id, value:user.name}))}/>
            <Textarea name={'postContent'} callback={handleContent} labelText={'Content post'} changeValue={addPost||false}/>
            <Button text={'Add'} onClick={onSavePostClick}/>
        </form>
    );
}

export default FormPost;
