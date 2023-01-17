import React from 'react'
import { Quote } from '../Quote'
import { Iquote } from '../../components/Quote'

interface ratedListProps {
    ratedList: Array<Iquote>
}

export const RateList = (props: ratedListProps) => {
    return (
        <div>{props.ratedList.map((element, index) => <Quote key={index} series={element.series} character={element.character} quote={element.quote} rate={element.rate} />)}</div>
    )
}
