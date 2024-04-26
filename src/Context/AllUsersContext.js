// React
import {createContext, useState, useEffect} from "react";

export const AllUsersContext = createContext();

export const AllUsersProvider = ({children}) => {
    const [AllUsersData, SetAllUsersData] = useState(null)

    return (
        <AllUsersContext.Provider value={{AllUsersData, SetAllUsersData}}>
            {children}
        </AllUsersContext.Provider>
    )
}