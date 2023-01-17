import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../components/Button'
import { Quote } from '../../components/Quote'
import { RateList } from '../../components/RateList'
import { RatingButtons } from '../../components/RatingButtons'
import { Iquote } from '../../components/Quote'
import './index.scss'


export const Welcome = () => {
    const [isVoting, setIsVoting] = useState(false)
    const [rated, addRated] = useState<Iquote[]>([])
    const [isRated, setIsRated] = useState(false)
    const [rateLevel, setRateLevel] = useState<number>(NaN)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const quote = {
        series: 'série',
        character: 'personagem',
        quote: 'Lorem ipsum dolor sit amet',
        rate: rateLevel
    }
    const startVoting = () => {
        setIsVoting(true)
        /*  titleRef.current == undefined ? null : titleRef.current.style.transform = 'translateY(-10vh)' */
    }
    const rate = (rate: React.ChangeEvent<HTMLButtonElement>) => {
        console.log(rate.target.value)
        setRateLevel(parseInt(rate.target.value))
        setIsRated(true)
    }

    useEffect(() => {
        isRated ? (
            addRated((rated) => {
                let actList = rated
                actList.push(quote)
                setIsRated(!isRated)
                return actList
            })) : null
    }, [rateLevel])

    return (
        <div className='welcome container'>
            <div className='row justify-content-center text-center'>
                <div className="col align-items-center">
                    <h1 ref={titleRef} className='mb-5 mt-3 transition'>Seja bem-vindo</h1>
                    {!isVoting && <Button text='Iniciar votação' style='btn btn-warning' action={startVoting}></Button>}
                    {isVoting && (
                        <>
                            <Quote series={quote.series} character={quote.character} quote={quote.quote} />
                            <RatingButtons action={rate} />
                            <RateList ratedList={rated} />

                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
