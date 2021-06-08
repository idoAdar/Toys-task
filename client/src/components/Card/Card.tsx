import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import './Card.css';
import { ToyModel } from '../../store/modules';
import { increment, decrement } from '../../store/actions/actions';

const Card: React.FC<ToyModel> = ({ name, price, id }) => {
    const dispatch = useDispatch();

    const calculator = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            return dispatch(increment(id));
        }
        dispatch(decrement(id));
    }

    return (
        <div className={'Card'}>
            <h4>{name}</h4>
            <small>{price}</small>
            <input type={'checkbox'} onChange={calculator}/>
        </div>
    )
}

export default Card;