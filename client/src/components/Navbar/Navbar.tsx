import React, { useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { userToys, barbieQuery, getAllToys } from '../../store/actions/actions';
import './Navbar.css';

const Navbar = () => {
    const [state, setState] = useState('');
    const messageError = useSelector((state: RootStateOrAny) => state.toysReducer.msg);
    const dispatch = useDispatch();

    const send = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(barbieQuery(state));
    }

    const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(getAllToys());
    }

    return (
        <div className={'main-navbar'}>
            <div>
                <i className="fab fa-steam-symbol fa-3x"></i>
                <p>{messageError}</p>
            </div>
            <form>
                <input className={'checkbox'} type={'checkbox'} onChange={() => dispatch(userToys())}/>
                <input type={'text'} onChange={(e) => setState(e.target.value)}/>
                <button onClick={send}>Click</button>
                <button onClick={reset}>Reset</button>
            </form>
        </div>
    )
}

export default Navbar;