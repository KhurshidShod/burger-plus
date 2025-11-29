import styles from './Loader.module.scss'
import Loader from '../../assets/images/loader.png'
import { useEffect, useState } from 'react'

const LoaderPage = () => {
    const [dots, setDots] = useState('')
    useEffect(() => {
        setInterval(() => {
            if(dots === '...'){
                setDots('')
            } else {
                setDots(dots + '.')
            }
        }, 500)
    }, [dots])
  return (
    <div className={styles.loader__wrapper}>
        <img src={Loader} alt="" />
        <h1>Loading{dots}</h1>
    </div>
  )
}

export default LoaderPage;