import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "./Api";

export const Context = createContext();
export const AppContext = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory])

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            // console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };

    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            selectedCategory,
            setSelectedCategory
        }}
        >
            {children}
        </Context.Provider>
    );
}