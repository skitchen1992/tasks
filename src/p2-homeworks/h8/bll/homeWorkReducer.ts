import {UserType} from "../HW8";

type ActionType = {
    type: string,
    payload: "up" | 'down'| 18
}


export const homeWorkReducer = (state: UserType [], action: ActionType): UserType[]=> {
    switch (action.type) {
        case 'sort': {
            const newState = [...state.sort((a,b)=>a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1)]
            return action.payload==="up"?newState:newState.reverse()
        }
        case 'check': {
            return state.filter(el=>el.age > action.payload)
        }
        default:
            return state
    }
}
