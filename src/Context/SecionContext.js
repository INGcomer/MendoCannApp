// React
import {createContext, useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SecionContext = createContext();

export const SecionProvider = ({children}) => {
    const [IsLoading, SetIsLoading] = useState(true)
    const [UserData, SetUserData] = useState(null)

    const Login = (data) => {
        SetIsLoading(true);

        SetUserData(data);
        AsyncStorage.setItem('UserData', data);

        SetIsLoading(false);
    };

    const Logout = () => {
        SetIsLoading(true);

        SetUserData(null);
        AsyncStorage.removeItem('UserData')

        SetIsLoading(false);
    }

    const IsLoggedIn = async () => {
        try {
            SetIsLoading(true);

            let userToken = await AsyncStorage.getItem('UserData');
            SetUserData(userToken);

            SetIsLoading(false);
        } catch (e) {
            console.log('hubo un error', {e})
        }
    };

    useEffect(() => {
        IsLoggedIn();
    }, [AsyncStorage])

    return (
        <SecionContext.Provider value={{Login, Logout, IsLoading, UserData}}>
            {children}
        </SecionContext.Provider>
    )
}