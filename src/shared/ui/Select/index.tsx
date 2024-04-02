import {ChangeEvent, Fragment, useEffect, useState} from "react";
import './index.css'

interface propsSelect {
    name: string,
    callback: (v: string) => void,
    labelText: string,
    changeValue: boolean,
    options: Array<{
        id: string,
        value: string
    }>
}

function Select(props: propsSelect) {
    const [valueSelect, setValue] = useState<string>('');

    const changeHandel = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value);

    useEffect(() => {
        if (props.changeValue) {
            props.callback(valueSelect);
            setValue('');
        }
    }, [props.changeValue])

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