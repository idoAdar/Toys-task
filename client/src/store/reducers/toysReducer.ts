import { Action, ActionType } from '../actionType';
import { StateType } from '../modules';

const initState: StateType = {
    toys: [],
    repository: [],
    filter: false,
    msg: ''
};

const reducer = (state = initState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_TOYS:
            return { 
                ...state,
                toys: action.payload
            }
        case ActionType.INCREMENT:
            const newToy = state.toys.find(toy => toy.id === action.toyId);
            return {
                ...state,
                repository: [...state.repository, newToy]
            }
        case ActionType.DECREMENT:            
            return {
                ...state,
                repository: state.repository.filter(toy => toy.id !== action.toyId)
            }
        case ActionType.USER_TOYS:
            return {
                ...state,
                filter: !state.filter
            }
        case ActionType.ERROR:
            return {
                ...state,
                msg: action.payload
            }
        default: return state;
    }
}

export default reducer;