import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair  // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}

        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.wrapper}>
            {mappedAffairs}
            <div className={s.buttons}>
                <button className={s.button} onClick={setAll}>All</button>
                <button className={s.button} onClick={setHigh}>High</button>
                <button className={s.button} onClick={setMiddle}>Middle</button>
                <button className={s.button} onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
