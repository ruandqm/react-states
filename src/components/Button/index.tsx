import React from 'react'
interface Ibutton {
    text: string
    style: string
    value?: string | number
    type?: "button" | "submit" | "reset"
    action?: (parameter?: any) => void
}

export const Button = (props: Ibutton) => {
    return (
        <button className={props.style} value={props.value} type={props.type} onClick={props.action}>{props.text}</button>
    )
}
