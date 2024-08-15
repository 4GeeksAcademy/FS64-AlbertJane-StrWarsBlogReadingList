import { getAllCharactersDispatcher, getAllPlanetsDispatcher, getAllStarshipsDispatcher } from "./dispatchers/dataDispatcher";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: JSON.parse(localStorage.getItem('characters')) || [],
            planets: JSON.parse(localStorage.getItem('planets')) || [],
            starships: JSON.parse(localStorage.getItem('starships')) || [],
            favourites: JSON.parse(localStorage.getItem('favourites')) || [],
        },
        actions: {
            setStore: (newStore) => {
                setStore(prevStore => ({ ...prevStore, ...newStore }));
            },
            // Use getActions to call a function within a function
            addFavorite: (favorite) => {
                const store = getStore();
                const newFavourites = [...store.favourites, favorite];
                setStore({ ...store, favourites: newFavourites });
                localStorage.setItem('favourites', JSON.stringify(newFavourites));
            },
        
            removeFavorite: (id, type) => {
                const store = getStore();
                const newFavourites = store.favourites.filter(fav => !(fav.id === id && fav.type === type));
                setStore({ ...store, favourites: newFavourites });
                localStorage.setItem('favourites', JSON.stringify(newFavourites));
            },
            getAllCharacters: async () => {
                const store = getStore();

                if (!localStorage.getItem('characters') || JSON.parse(localStorage.getItem('characters')).length === 0) {
                    const response = await getAllCharactersDispatcher();

                    if (response.ok) {
                        localStorage.setItem('characters', JSON.stringify(response.characters));
                        setStore({ ...store, characters: response.characters });
                        return { ok: true };
                    }
                    return { ok: false };
                }
                return { ok: true };
            },

            getAllPlanets: async () => {
                const store = getStore();

                if (!localStorage.getItem('planets') || JSON.parse(localStorage.getItem('planets')).length === 0) {
                    const response = await getAllPlanetsDispatcher();

                    if (response.ok) {
                        localStorage.setItem('planets', JSON.stringify(response.planets));
                        setStore({ ...store, planets: response.planets });
                        return { ok: true };
                    }
                    return { ok: false };
                }
                return { ok: true };
            },

            getAllStarships: async () => {
                const store = getStore();

                if (!localStorage.getItem('starships') || JSON.parse(localStorage.getItem('starships')).length === 0) {
                    const response = await getAllStarshipsDispatcher();

                    if (response.ok) {
                        localStorage.setItem('starships', JSON.stringify(response.starships));
                        setStore({ ...store, starships: response.starships });
                        return { ok: true };
                    }
                    return { ok: false };
                }
                return { ok: true };
            }
        }
    };
};

export default getState;
