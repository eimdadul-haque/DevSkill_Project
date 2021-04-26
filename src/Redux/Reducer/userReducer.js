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