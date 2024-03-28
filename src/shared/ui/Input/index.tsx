import {ChangeEvent, Fragment, useEffect, useState} from 'react';
import './index.css'

interface propsInput {
    name: string,
    callback: (v:string)=>void,
    labelText: string,
    changeValue: boolean
}
function Index(props:propsInput) {
    const [valueText, setValue] = useState<string>('');

    const changeHandel = (e:ChangeEvent<HTMLInputElement>)=>setValue(e.target.value);

    useEffect(()=>{
        if(props.changeValue) {
            props.callback(valueText);
            setValue('');
        }
    },[props.changeValue])

    return (
        <Fragment>
            <label htmlFor={props.name}>{props.labelText}</label>
            <input type={'text'} value={valueText} onChange={changeHandel} id={props.name}/>
        </Fragment>
    );
}

export default Index;
