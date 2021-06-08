import { ToyModel } from './modules';

// Interfaces for ACTION-TYPES:
export enum ActionType {
    GET_TOYS = "GET_TOYS",
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    USER_TOYS = "USER_TOYS",
    ERROR = 'ERROR'
}

// Interfaces for ACTIONS:
interface GET_TOYS {
    type: ActionType.GET_TOYS,
    payload: ToyModel[]
}

interface INCREMENT {
    type: ActionType.INCREMENT,
    toyId: number
}

interface DECREMENT {
    type: ActionType.DECREMENT,
    toyId: number
}

interface USER_TOYS {
    type: ActionType.USER_TOYS
}

interface ERROR {
    type: ActionType.ERROR,
    payload: string
}

export type Action = GET_TOYS | INCREMENT | DECREMENT | USER_TOYS | ERROR;