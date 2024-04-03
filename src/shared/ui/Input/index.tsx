import {ChangeEvent, Fragment, useState} from 'react';
import './index.css'

interface propsInput {
    name: string,
    labelText: string,
}

function Index(props: propsInput) {
    const [valueText, setValue] = useState<string>('');

    const changeHandel = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <Fragment>
            <label htmlFor={props.name}>{props.labelText}</label>
            <input type={'text'} value={valueText} onChange={changeHandel} id={props.name}/>
        </Fragment>
    );
}

export default Index;
