import {ChangeEvent, Fragment, useState} from "react";
import './index.css'

interface propsSelect {
    name: string,
    labelText: string,
    options: Array<{
        id: string,
        value: string
    }>
}

function Select(props: propsSelect) {
    const [valueSelect, setValue] = useState<string>('');

    const changeHandel = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value);

    return (
        <Fragment>
            <label htmlFor={props.name}>{props.labelText}</label>
            <select value={valueSelect} onChange={changeHandel} id={props.name}>
                <option value={''}></option>
                {props.options.map(op =>
                    <option key={op.id} value={op.id}>{op.value}</option>
                )}
            </select>
        </Fragment>
    );
}

export default Select;