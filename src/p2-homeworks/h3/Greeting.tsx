import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    addUser: () => void
    error: string
    totalUsers: number
    nameDirty: boolean
    blurHandler: (e: any) => void
    formValid: boolean
    setError:(s:string)=>void
    setName:(s:string)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name,setName, nameDirty, setError, addUser, error, totalUsers, blurHandler, formValid} // деструктуризация пропсов
) => {
    const inputClass = `${error? s.error : s.input} ${s.defaultInput}`


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let event = e.currentTarget.value
        setName(event)
        const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
        if (e.currentTarget.value === '') {
            setError('Имя не может быть пустым')
        } else if (!re.test(String(e.currentTarget.value).toLowerCase())) {
            setError('Не корректное имя')
        } else  {
            setError('')
        }
    }


    return (
        <div className={s.wrapper}>

            <input onBlur={e => blurHandler(e)} value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.button} disabled={formValid} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {(error && nameDirty) && <div className={s.prompt} style={{color: 'red'}}>{error}</div>}

        </div>
    )
}

export default Greeting
