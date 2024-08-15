import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = ({ title, text, type, id }) => {
    const { store, actions } = useContext(Context);

    const handleFav = () => {
        const isFavorite = store.favourites.some(fav => fav.id === id && fav.type === type);
        if (isFavorite) {
            actions.removeFavorite(id, type);
        } else {
            actions.addFavorite({ id, title, type });
        }
    };

    return (
        <div className="card">
            <img src="https://picsum.photos/200" className="card-img-top" alt="image of starwars" />
            <div className="card-body">
                <h5 className="card-title"><a href={`/${type}/${id}`}> {title} </a></h5>
                <p className="card-text">{text}</p>
                <a href={`/${type}/${id}`} className="btn btn-primary me-5">Learn More</a>
                <a href="#" onClick={handleFav} className="btn btn-warning">
                    <i className={`fa-regular fa-star ${store.favourites.some(fav => fav.id === id && fav.type === type) ? 'fa-solid' : ''}`}></i>
                </a>
            </div>
        </div>
    );
};