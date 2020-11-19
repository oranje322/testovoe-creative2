import React from "react";
import flatImg from '../assets/img/flat.png'
import {useDispatch} from "react-redux";
import {toggleLike} from "../redux/reducers/rootReducer";


const FlatCard = ( {flat}) => {

    const {id, isLiked} = flat
    const {address, area, rooms, title} = flat.attributes
    const {city, street, house, room} = address
    const {first_name, last_name, middle_name} = flat.relationships.attributes

    const dispatch = useDispatch()

    const onBtnClick = () => {
        dispatch(toggleLike(id))
    }

    return (
        <div className={'card'}>
            <div className="img-block">
                <img className={'img'} src={flatImg} alt="flat"/>
            </div>
            <div className="text-block">
                <h2 className="title">{title}</h2>
                <div className="description-block">
                    <div className="left-block">
                        <p className="text">Кол-во комнат: {rooms}</p>
                        <p className="text">{`${city}, ${street}, ${house}, ${room}`}</p>
                        <p className="text">{area + " кв.м."} </p>
                    </div>
                    <div className="right-block">
                        <p className="text-title">Продавец:</p>
                        <p className="text">{last_name}</p>
                        <p className="text">{first_name}</p>
                        <p className="text">{middle_name}</p>
                    </div>
                </div>
            </div>
            <button onClick={onBtnClick} className={`like-btn ${isLiked ? 'liked' : ''}`}>Like</button>

        </div>
    )
}

export default FlatCard