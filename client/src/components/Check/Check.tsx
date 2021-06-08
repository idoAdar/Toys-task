import { useSelector, RootStateOrAny } from 'react-redux';
import { ToyModel } from '../../store/modules';
import './Check.css';

const Check = () => {
    const toys = useSelector((state: RootStateOrAny) => state.toysReducer.toys);
    const repository = useSelector((state: RootStateOrAny) => state.toysReducer.repository);
    const filter = useSelector((state: RootStateOrAny) => state.toysReducer.filter);
    let change;

    let check = 0;
    filter ? (change = repository) : (change = toys);
    change.forEach((toy: ToyModel) => check+= +toy.price);

    return (
        <div className={'total-price-box'}>
            <p>Total Price: {check.toFixed(2)}</p>
        </div>
    )
}

export default Check;