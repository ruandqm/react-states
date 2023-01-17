import React, { MouseEventHandler, useState } from 'react'
import { Button } from '../Button'

interface ratingProps {
    action?: (parameter?: any) => void
}

export const RatingButtons = (props: ratingProps) => {
    let buttons = []

    for (let i = 1; i <= 10; i++) {
        let value: string = JSON.stringify(i)
        buttons.push(<Button key={i} text={value} style='btn btn-warning' value={i} action={props.action} />)
    }

    return (
        <div className='d-flex flex-wrap justify-content-center gap-2 mt-5 mb-3'>
            {buttons.map(button => button)}
        </div>
    )
}
