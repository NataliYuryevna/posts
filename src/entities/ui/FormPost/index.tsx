import './index.css'
import Input from "../../../shared/ui/Input";
import {useState, useRef, useEffect} from "react";
import Textarea from "../../../shared/ui/Textarea";
import {typePosts} from "../../../shared/lib/server";
import Button from "../../../shared/ui/Button";

type typePost = Omit<typePosts,'id'>;

interface propsForm {
    setAddPost: (newPost:typePost)=>void
}

function FormPost(props:propsForm) {
    const [addPost, setAddPost] = useState<boolean|undefined>(undefined);
    const newPost = useRef<typePost>({title: '', content: ''});

    useEffect(()=>{
        if(addPost === false && newPost.current.title.length && newPost.current.content.length) {
            props.setAddPost(newPost.current);
        }
    },[addPost])

    function handleTitle(title:string) {
        newPost.current.title = title;
    }

    function handleContent(content:string) {
        newPost.current.content = content;
    }

    function onSavePostClick() {
        setAddPost(true);
        setTimeout(()=>setAddPost(false), 1000);
    }


    return (
        <form>
            <Input name={'postTitle'} callback={handleTitle} labelText={'Title post'} changeValue={addPost||false}/>
            <Textarea name={'postContent'} callback={handleContent} labelText={'Content post'} changeValue={addPost||false}/>
            <Button text={'Add'} onClick={onSavePostClick}/>
        </form>
    );
}

export default FormPost;
