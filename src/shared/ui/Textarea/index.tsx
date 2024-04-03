import {ChangeEvent, Fragment, useState} from 'react';
import './index.css'

interface propsTextarea {
    name: string,
    labelText: string,
}

function Textarea(props: propsTextarea) {
    const [valueText, setValue] = useState<string>('');

    const changeHandel = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);

    return (
        <Fragment>
            <label htmlFor={props.name}>{props.labelText}</label>
            <textarea value={valueText} onChange={changeHandel} id={props.name}/>
        </Fragment>
    );
}

export default Textarea;
