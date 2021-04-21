import { ActionType } from '../ActionType';

export const catagoryReducer = (state = { catagory: [] }, action) => {
    switch (action.type) {
        case ActionType.ADD_CATAGORY:
            return { ...state, catagory: action.payload }

        default:
            return state;
    }
}

export const catagorDetailsyReducer = (state = { catagoryDetails: [] }, action) => {
    switch (action.type) {
        case ActionType.ADD_CATAGORY_DETAILS:
            return { ...state, catagoryDetails: action.payload }

        default:
            return state;
    }
}