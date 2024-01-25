import React from 'react';
import './Button.css';
import { useAppDispatch} from '../../hooks';
import {showLikeCard, showAllCard} from '../../store/catSlice'

function Button() {

    const dispatch = useAppDispatch();

    return (
      <button className='button' onMouseDown={()=>{dispatch(showLikeCard())}}  onMouseUp={()=>{dispatch(showAllCard())}} >
       Кто понравился?
      </button>
    );
  }
  
  export default Button;