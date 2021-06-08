import { Dispatch } from 'redux';
import axios from 'axios';
import { ActionType } from '../actionType';
const database = 'http://localhost:5000';

export const getAllToys = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${database}/toys`);
        dispatch({
            type: ActionType.GET_TOYS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ActionType.ERROR,
            payload: error.message
        })
    }
}

export const increment = (id: number) => (dispatch: Dispatch) => {
    dispatch({
        type: ActionType.INCREMENT,
        toyId: id
    })
}

export const decrement = (id: number) => (dispatch: Dispatch) => {
    dispatch({
        type: ActionType.DECREMENT,
        toyId: id
    })
}

export const userToys = () => (dispatch: Dispatch) => {
    dispatch({
        type: ActionType.USER_TOYS
    })
}

export const barbieQuery = (state: string) => async (dispatch: Dispatch) => {
    const search = state.split(" ").join("");
    let response: any;
    if (search.includes('>')) {
        const limit = search.split('>')[1];
        response = await axios.get(`${database}/toys/more-then/${limit}`);
    }
    else if (search.includes('<')) {
        const limit = search.split('<')[1];    
        response = await axios.get(`${database}/toys/less-then/${limit}`);
    }
    else if (search.includes('showall')) {
        response = await axios.get(`${database}/toys`);
    }
    else if (search.includes('#')) {
        const id = search.split('#')[1];    
        response = await axios.get(`${database}/toys/get-one/${id}`);
    }
    else return;

    
    dispatch({
        type: ActionType.GET_TOYS,
        payload: response.data
    })
}