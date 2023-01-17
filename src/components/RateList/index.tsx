import React, { useEffect, useState } from 'react'
import { Quote } from '../Quote'
import { Iquote } from '../../components/Quote'

interface ratedListProps {
    ratedList: Array<Iquote>
}

export const RateList = (props: ratedListProps) => {
    const [list, setList] = useState(props.ratedList)

    useEffect(() => {
        const listSort = props.ratedList.sort((a, b) => {
            if (a.rate != undefined && b.rate != undefined) {
                if (a.rate < b.rate)
                    return 1

                else if (a.rate > b.rate)
                    return -1

                else
                    return 0
            }
            else
                return 0
        })
        setList(listSort)
    }, [props])

    return (
        <div>{list.map((element, index) => <Quote key={index} anime={element.anime} character={element.character} quote={element.quote} rate={element.rate} />)}</div>
    )
}
