import React from 'react';
import './App.css';
import Card from '../Card/Card';
import {useEffect} from 'react';
import {fetchCats} from  '../../store/catSlice';
import { useAppDispatch,  useAppSelector } from '../../hooks';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';

function App() {

  const dispatch = useAppDispatch();
  const cats = useAppSelector(state=>state.cats.list)
  const selectedCard = useAppSelector(state=>state.cats.selectedCard)
  useEffect(()=>{dispatch(fetchCats())
  },[dispatch])

  return (
    <div className='app'>
      <Button/>
      <ul className='app__container'>
      {cats.map((el, index)=>
        <li key={el.id}><Card {...el}/></li>
      )}
      </ul>
      <Popup  />
    </div>
  );
}

export default App;
