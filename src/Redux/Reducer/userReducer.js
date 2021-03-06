import { ActionType } from '../../Redux/ActionType'

export const userIdReducer = (state = { id: 0 }, action) => {
    switch (action.type) {
        case ActionType.USE_ID:
            return {
                ...state,
                id: action.payload
            }
        default:
            return state;
    }
}

export const getAllUserReducer = (state = { allUser: [] }, action) => {
    switch (action.type) {
        case ActionType.GET_ALL_USER:
            return {
                ...state,
                allUser: action.payload
            }
        default:
            return state;
    }
}