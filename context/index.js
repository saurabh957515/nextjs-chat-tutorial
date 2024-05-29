import React, { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvide = () => {
    const [username, setUsername] = useState("");
    const [secret, setSecret] = useState("");
    const value = {
        username,
        setUsername,
        secret,
        setSecret
    }
    return <Context.Provider value={value}>
        {props.children}
    </Context.Provider>
}