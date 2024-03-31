"use client"
import Countdown from 'react-countdown';
import { useEffect, useState } from 'react';
const CountDown = () => {
    const [time, setTime] = useState(0)
    useEffect(() => {
        setTime(new Date('2024-04-04').getTime() - Date.now())
    }, [])

    console.log(time)
    return (
        <Countdown
            date={Date.now() + time}
        />

    )
}

export default CountDown