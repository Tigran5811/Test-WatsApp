import { useDispatch, useSelector } from 'react-redux'
import styles from './MassageContainer.module.css'
import { getMassageSelector } from '../../redux/selectors/massage'
import { getMassage } from '../../redux/actions/massage'
import { useEffect, useRef } from 'react'

export const MassageContainer = () => {
    const dispatch = useDispatch()
    const allMassage = useSelector(getMassageSelector)
    const bottom = useRef(null)
    const scrollToBottom = () => {
        bottom.current?.scrollIntoView({ behavior: "auto" })
    }
    
    const updateMassage = () => {
        dispatch(getMassage())
    }

    useEffect(() => {
        scrollToBottom()
        updateMassage()
    }, [allMassage])

    return (
        <div className={styles.massage}>
            <div className={styles.massage_container}>
                <div className={styles.wrap}>
                    {allMassage?.map((item, i) => {
                        if (item.person === "outgoing") {
                            return <div className={styles.right} key={i}><p  >{item.massage}</p></div>
                        }
                        return <div className={styles.left} key={i}><p >{item.massage}</p></div>
                    })}
                    <span ref={bottom}></span>
                </div>
            </div>
        </div>
    )
}


