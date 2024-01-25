import React, { useEffect } from "react";
import { useAppDispatch,  useAppSelector } from '../../hooks';
import {description} from '../../utils/constatnts';
import {onClose} from '../../store/catSlice';
import './Popup.css';



    const Popup =() => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(state=>state.cats.isOpen)
    const card = useAppSelector(state=>state.cats.selectedCard)
    const popupClass = `popup  ${isOpen ? 'popup_opened' : ''}`;
    return (
        <div className={popupClass}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" aria-label="закрыть" onClick={() => dispatch(onClose())}>
                </button>
                <figure className="popup__card">
                    <img className="popup__card__image" src={card?card.url:undefined} alt='кот'
                        onClick={(e => e.stopPropagation())} />
                    <figcaption>
                        <h2 className="popup__card__text">{description}</h2>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
    
}

export default Popup;