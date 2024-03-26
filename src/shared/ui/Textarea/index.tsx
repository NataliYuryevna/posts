import {ChangeEvent, Fragment, useEffect, useState} from 'react';

interface propsTextarea {
    name: string,
    callback: (v:string)=>void,
    labelText: string,
    changeValue: boolean
}
function Textarea(props:propsTextarea) {
    const [valueText, setValue] = useState<string>('');

    const changeHandel = (e:ChangeEvent<HTMLTextAreaElement>)=>setValue(e.target.value);

    useEffect(()=>{
        if(props.changeValue) {
            props.callback(valueText);
            setValue('');
        }
    },[props.changeValue])

    return (
        <Fragment>
            <label htmlFor={props.name}>{props.labelText}</label>
            <textarea value={valueText} onChange={changeHandel} id={props.name}/>
        </Fragment>
    );
}

export default Textarea;
