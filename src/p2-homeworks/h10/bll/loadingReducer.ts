export enum ACTIONS_TYPES {
    IS_LOADING = "IS_LOADING",
}

export type InitStateType = {
    loading: boolean
}

const initState: InitStateType = {
    loading: false
}

export const loadingReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case ACTIONS_TYPES.IS_LOADING: {
            return {...state, loading: !state.loading}
        }

    }
    return state
}
type LoadingACType = {
    type: ACTIONS_TYPES.IS_LOADING
}

export const loadingAC = (): LoadingACType => {
    return {type: ACTIONS_TYPES.IS_LOADING}
}

export type ActionsType = LoadingACType