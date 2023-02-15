import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Quote } from '../../components/Quote/Quote'
import { RateList } from '../../components/RateList/RateList'
import { RatingButtons } from '../../components/RatingButtons'
import { Iquote } from '../../components/Quote/Quote'
import './index.scss'
import axios from 'axios'


const Welcome = () => {

    const [quote, setQuote] = useState<Iquote>({})
    const [isVoting, setIsVoting] = useState(false)
    const [rated, addRated] = useState<Iquote[]>([])
    const [isRated, setIsRated] = useState(false)
    const [rateLevel, setRateLevel] = useState<number>(NaN)
    const titleRef = useRef<HTMLHeadingElement>(null)

    const getQuote = async () => {
        const response = await axios.get('https://animechan.vercel.app/api/random')
        const quote = response.data
        setQuote(quote)
    }

    const startVoting = () => {
        setIsVoting(true)
    }
    const rate = (rate: React.ChangeEvent<HTMLButtonElement>) => {
        console.log(rate.target.value)
        setRateLevel(parseInt(rate.target.value))
        setIsRated(true)
    }

    useEffect(() => {
        getQuote()
    }, [])

    useEffect(() => {
        isRated ? (
            addRated((rated) => {
                quote.rate = rateLevel
                let actList = rated
                actList.push(quote)
                setIsRated(!isRated)
                getQuote()
                return actList
            })) : null
    }, [rateLevel])

    return (
        <div className='welcome container'>
            <div className='row justify-content-center text-center'>
                <div className="col align-items-center">
                    <h1 ref={titleRef} className='mb-5 mt-3 transition'>Seja bem-vindo</h1>
                    {!isVoting && <Button text='Iniciar votação' style='btn btn-warning' action={startVoting}></Button>}
                    {!isVoting && <a href='/login'> <Button text='Login' style='btn btn-primary' action={startVoting}></Button> </a>}
                    {isVoting && (
                        <>
                            <Quote anime={quote.anime} character={quote.character} quote={quote.quote} />
                            <RatingButtons action={rate} />
                            <RateList ratedList={rated} />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Welcome
