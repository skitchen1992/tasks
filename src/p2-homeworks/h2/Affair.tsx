import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"



type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType  // need to fix any
    // need to fix any
    deleteAffairCallback: (id:number)=> void

}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={s.priority}> {props.affair.priority}</div>
            <button className={s.button} onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
