import React, { createContext, useState } from 'react';

export const LangContext = createContext();

const LangContextProvider = (props) => {
    const [heb, setHeb] = useState(true);

    const changeLang = () => {
        setHeb(!heb);
        console.log("Context Works")
    }

    return (
        <LangContext.Provider value={{heb, changeLang}}>
            {props.children}
        </LangContext.Provider>
    )
}

export default LangContextProvider;