import { useState, useEffect, createContext, useContext } from "react";

const LibraryContext = createContext();

export const useLibraryContext = () => useContext(LibraryContext);

export const LibraryProvider = ({ children }) => {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        const storedLib = localStorage.getItem('library');

        if (storedLib) setLibrary(JSON.parse(storedLib));
    }, []);

    useEffect(() => {
        localStorage.setItem('library', JSON.stringify(library));
    }, [library]);

    const addToLibrary = (game) => {
        console.log(game);
        setLibrary(state => [...state, game]);
    };

    const isInLibrary = (gameId) => {
        return library.some(game => game.id === gameId);
    };

    const value = {
        library,
        addToLibrary,
        isInLibrary,
    };

    return (
        <LibraryContext.Provider value={value}>
            { children }
        </LibraryContext.Provider>
    );
};