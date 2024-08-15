import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store } = useContext(Context);
    return (
        <nav className="navbar navbar-light bg-light mb-3 mx-5">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Star Wars Blog</span>
            </Link>
            <div className="ml-auto">
                <div className="dropdown dropstart">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Favourites
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    					{store.favourites.length > 0 &&
        					store.favourites.map((fav, index) => (
            				<li key={index}>
                				<Link className="dropdown-item" to={`/${fav.type}/${fav.id}`}>
                    				{fav.title}
                				</Link>
                				<button onClick={() => actions.removeFavorite(fav.id, fav.type)} className="btn btn-danger btn-sm">
                    			<i className="fa fa-trash"></i>
                				</button>
            				</li>
        					))
    					}
					</ul>
                </div>
            </div>
        </nav>
    );
};