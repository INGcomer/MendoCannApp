// React
import {createContext, useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [IsLoading, SetIsLoading] = useState(true)
    const [UserToken, SetUserToken] = useState(null)

    const Login = (Token) => {
        SetIsLoading(true);

        SetUserToken(Token);
        // AsyncStorage.setItem('UserToken', Token);

        SetIsLoading(false);
    };

    // const Logout = (navigation) => {
    //     SetIsLoading(true);

    //     SetUserToken(null);
    //     AsyncStorage.removeItem('UserToken')

    //     SetIsLoading(false);
    // }

    // const IsLoggedIn = async () => {
    //     try {
    //         SetIsLoading(true);

    //         let userToken = await AsyncStorage.getItem('UserToken');
    //         SetUserToken(userToken);

    //         SetIsLoading(false);
    //     } catch (e) {
    //         console.log('hubo un error', {e})
    //     }
    // };

    // useEffect(() => {
    //     IsLoggedIn();
    // }, [AsyncStorage])

    return (
        <AuthContext.Provider value={{Login, Logout, IsLoading, UserToken}}>
            {children}
        </AuthContext.Provider>
    )
}