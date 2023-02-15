import React, { useEffect, useState } from 'react'
import { Quote } from '../Quote/Quote'
import { Iquote } from '../Quote/Quote'

interface ratedListProps {
    ratedList: Array<Iquote>
}

export const RateList = (props: ratedListProps) => {
    const [list, setList] = useState(props.ratedList)

    return (
        <>
            {list.sort((a: any, b: any) => b.rate - a.rate).map((element: any, index: any) => <Quote key={index} anime={element.anime} character={element.character} quote={element.quote} rate={element.rate} />)}
        </>
    )
}