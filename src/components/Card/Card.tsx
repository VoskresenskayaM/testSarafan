import React from 'react';
import './Card.css';
import like from '../../images/like.png';
import notLike from '../../images/notLike.png';
import del from '../../images/delete.png';
import {deleteCat, likeCats, cardClik} from '../../store/catSlice';
import { useAppDispatch } from '../../hooks';
import {description} from '../../utils/constatnts'

interface TodoItemProps {
    breeds: string[];
    id: string;
    url: string;
    width: number;
    height: number;
    isLike?: boolean;
  }

const Card: React.FC<TodoItemProps>=({url, id, isLike}) => {
  
    const dispatch = useAppDispatch();
    console.log('test')

  return (
    <div className='card'>
      <button className='card__like' onClick={() => dispatch(likeCats(id))}><img className='card__like-img' src={!isLike? notLike: like } alt='лайк' /></button>
      <button className='card__delete' onClick={() => dispatch(deleteCat(id))}><img className='card__delete-img' src={del} alt='корзина' onClick={() => dispatch(deleteCat(id))}/></button>
      <img className='card__img' src={url} alt='кот' onClick={()=>dispatch(cardClik(id))}/>
      <p className='card__text'>{description}</p>
    </div>
  );
}

export default Card;
