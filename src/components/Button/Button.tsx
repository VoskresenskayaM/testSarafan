import React from 'react';
import './Button.css';
import { useAppDispatch} from '../../hooks';
import {showLikeCard} from '../../store/catSlice'

function Button() {

    const dispatch = useAppDispatch();

    return (
      <button className='button' onClick={()=>{dispatch(showLikeCard())}}>
       Кто понравился?
      </button>
    );
  }
  
  export default Button;