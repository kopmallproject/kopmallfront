import { Apple, Lamp, Laptop, Smartphone } from 'lucide-react'
import React, {useState, useEffect} from 'react'
import { listCategories } from '../actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import {Link, useParams } from 'react-router-dom'

const Timer = ({duration}) => {
    const [time, setTime] = useState(duration);
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [hr, setHr] = useState(0)
    const [dy, setDy] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
            getFormattedTime(time);
        }, 1000)
    }, [time])

    const getFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000))
        let total_minutes = parseInt(Math.floor(total_seconds / 60))
        let total_hours = parseInt(Math.floor(total_minutes / 60));
        let days = parseInt(Math.floor(total_hours / 24))

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        setSec(seconds);
        setMin(minutes);
        setHr(hours);
        setDy(days);

        // return `${days}: ${hours}: ${minutes}: ${seconds}`;
    }

  return (
    <>
        
        <div className='text-[#00000]'>{time} - {dy}: {hr}: {min}: {sec}</div>
        
    </>
  )
}

export default Timer