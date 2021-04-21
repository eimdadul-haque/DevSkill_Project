import { ActionType } from '../ActionType';

export const loginReducer = (state = {
    status: {
        token: 0
    }
}, action) => {
    switch (action.type) {
        case ActionType.LOGIN:
            return { ...state, status: action.payload }

        default:
            return state;
    }
}

export const signupReducer = (state = { status: {} }, action) => {
    switch (action.type) {
        case ActionType.SIGNUP:
            return { ...state, status: action.payload }

        default:
            return state;
    }
}