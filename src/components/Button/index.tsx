import React from 'react'
interface Ibutton {
    text: string
    style: string
    value?: string | number
    action?: (parameter?: any) => void
}

export const Button = (props: Ibutton) => {
    return (
        <button className={props.style} value={props.value} onClick={props.action}>{props.text}</button>
    )
}
