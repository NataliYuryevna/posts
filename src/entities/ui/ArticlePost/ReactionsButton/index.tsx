import {useAppDispatch} from "../../../lib/hooks/redux";
import {reactionAdded} from "../../../lib/slice/post";
import {typePosts} from "../../../../shared/lib/server";
import {Fragment} from "react";
import {Button} from "../../../../shared/ui";

type typeKeysPosts = keyof typePosts['reactions'];

const reactionEmoji:{[key in typeKeysPosts]:string} = {
        thumbsUp: '👍',
        wow: '😮',
        heart: '❤️',
        rocket: '🚀',
        coffee: '☕'
    }
function ReactionsButton(props:typePosts) {

    const dispatch = useAppDispatch();

    function clickHandel( reaction: keyof typePosts['reactions']) {
        dispatch(reactionAdded({postId:props.id,reaction}))
    }

    return <Fragment>
        {Object.entries<string>(reactionEmoji).map((v)=>
            <Button text={`${v[1]} ${props.reactions[v[0] as typeKeysPosts]}`} key={v[0]} onClick={()=>clickHandel(v[0] as typeKeysPosts)} type={'button'}/>)}
    </Fragment>;
}

export default ReactionsButton;
