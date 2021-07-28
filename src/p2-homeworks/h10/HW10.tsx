import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {selectors} from "./bll/selectors";
import {Dispatch} from "redux";
import {ActionsType, loadingAC} from "./bll/loadingReducer";
import loader from "../h10/bll/Ajux_loader.gif"
import s from "./HW10.module.css"


function HW10() {


    const {loading} = useSelector(selectors)
    const dispatch = useDispatch<Dispatch<ActionsType>>()


    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => {
            dispatch(loadingAC())
        }, 2000)
        console.log('loading...')
    };

    return (
        <div className={s.wrapper}>
            <hr/>
            Loader
            {loading
                ? (
                    <div><img className={s.img} src={loader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
