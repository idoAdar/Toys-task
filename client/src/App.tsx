import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { getAllToys } from './store/actions/actions';
import { ToyModel } from './store/modules';

import Navbar from './components/Navbar/Navbar';
import Check from './components/Check/Check';
import Card from './components/Card/Card';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const toys = useSelector((state: RootStateOrAny) => state.toysReducer.toys);
  const userToys = useSelector((state: RootStateOrAny) => state.toysReducer.repository);
  const filter = useSelector((state: RootStateOrAny) => state.toysReducer.filter);
  let changeToys = !filter ? toys : userToys;

  useEffect(() => {
    dispatch(getAllToys());
  }, []);
  
  return (
    <Fragment>
      <Navbar />
      <Check />
      <div className={'toys-grid'}>
        {changeToys.map((toy: ToyModel) => {
          return <Card key={toy.id} id={toy.id} name={toy.name} price={toy.price}/>
        })}
      </div>
    </Fragment>
  );
}

export default App;