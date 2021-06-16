import React, {useEffect, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [nameDirty, setNameDirty] = useState<boolean>(false)
    const [error, setError] = useState<string>('Имя не может быть пустым') // need to fix any
    const [formValid, setFormValid] = useState<boolean>(false)

    useEffect(() => {
        error
            ? setFormValid(true)
            : setFormValid(false)
    }, [error])

    const blurHandler = (e: any ) => {
        setNameDirty(true)
        // if (e.currentTarget.value === '') {
        //     setError('Имя не может быть пустым')
        // }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(name)
        setName('')
        setFormValid(true)

    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            nameDirty={nameDirty}
            setName={setName}
            setError={setError}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            blurHandler={blurHandler}
            formValid={formValid}
        />
    )
}

export default GreetingContainer
