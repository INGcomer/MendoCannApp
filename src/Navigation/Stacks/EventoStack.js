// React
import { useState, createContext } from 'react';
import { StyleSheet } from 'react-native';
// kitten ui
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
// pantallas
import EventoScreen from '../../Screens/Evento';
import TinderScreen from '../../Screens/B2B/Tinder';
import ListaScreen from '../../Screens/B2B/Lista';
import MatchesScreen from '../../Screens/B2B/Matches';
import PerfilScreen from '../../Screens/B2B/Perfil';

// creo el contexto
export const UsersDataContext = createContext()
// creo el tab navigator
const Tab = createBottomTabNavigator();

const Tinder = (props) => (<Icon {...props} name='home' />);
const Lista = (props) => (<Icon {...props} name='list' />);
const Matchs = (props) => (<Icon {...props} name='star' />);
const Peril = (props) => (<Icon {...props} name='user' />);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}
        style={styles.navigation}
    >
        <BottomNavigationTab title='Home' icon={Tinder} />
        <BottomNavigationTab title='Lista de usuarios' icon={Lista} />
        <BottomNavigationTab title='Mis reuniones' icon={Matchs} />
        <BottomNavigationTab title='Perfil' icon={Peril} />
    </BottomNavigation>
);

export default function EventoStack() {
    const [Usuarios, SetUsuarios] = useState();

    return (
        <UsersDataContext.Provider value={[Usuarios, SetUsuarios]}>
            <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} initialRouteName='TinderScreen'
                screenOptions={{
                    headerShown: false
                }}>

                <Tab.Screen name="TinderScreen" component={TinderScreen} />
                <Tab.Screen name="ListaScreen" component={ListaScreen} />
                <Tab.Screen name="MatchesScreen" component={MatchesScreen} />
                <Tab.Screen name="PerfilScreen" component={PerfilScreen} />

            </Tab.Navigator>
        </UsersDataContext.Provider>
    );
}


const styles = StyleSheet.create({
    navigation: {
        backgroundColor: '#FFFFFF',
    }
})