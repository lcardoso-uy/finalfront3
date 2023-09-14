import { useReducer, useEffect, createContext } from "react";

export const themes = {
    light: {
        font: "black",
        background: "white"
    },
    dark: {
        font: "white",
        background: "black"
    }
}

const ThemeContext = createContext(themes.light);

export default ThemeContext;

const favoritesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return { ...state, favorites: [...state.favorites, action.payload] };
        case "REMOVE_FAVORITE":
            return { ...state, favorites: state.favorites.filter(id => id !== action.payload) };
        default:
            return state;
    }
};


export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const initialState = {
        favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    };

    const [state, dispatch] = useReducer(favoritesReducer, initialState);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }, [state.favorites]);

    return (
        <FavoritesContext.Provider value={{ state, dispatch }}>
            {children}
        </FavoritesContext.Provider>
    );
};

