import './index.css'

interface propsButton {
    text: string
    onClick:()=>void
    className?: 'primary'
    type?: "button" | "submit" | "reset"
}

function Button(props:propsButton) {
    return <button type={props.type} onClick={props.onClick} className={props.className || 'primary' }>{props.text}</button>
}

export default Button