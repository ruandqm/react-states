import React from 'react'

export interface Iquote {
    anime?: string,
    character?: string,
    quote?: string
    rate?: number | undefined
}

export const Quote: React.FC<Iquote> = (props) => {
    return (
        <div className='quote fs-3 mb-3'>
            <p data-testid='quote'>{props.quote}</p>
            <span>{props.character}, {props.anime}</span><br></br>
            <span>Nota: {props.rate}</span>
        </div>
    )
}
