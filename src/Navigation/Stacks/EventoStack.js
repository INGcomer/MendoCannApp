import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon, IconElement } from '@ui-kitten/components';

import EventoScreen from '../../Screens/Evento';
import TinderScreen from '../../Screens/B2B/Tinder';
import ListaScreen from '../../Screens/B2B/Lista';
import MatchesScreen from '../../Screens/B2B/Matches';
import PerfilScreen from '../../Screens/B2B/Perfil';

const Tab = createBottomTabNavigator();

// const Home = (props) => ( <Icon {...props} name='home-outline' />);
// const Home = (props) => (  <Icon {...props} name='globe'/>);
const Tinder = (props) => ( <Icon {...props} name='home' />);
const Lista = (props) => ( <Icon {...props} name='list' />);
const Matchs = (props) => ( <Icon {...props} name='star' />);
const Peril = (props) => ( <Icon {...props} name='user' />);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      {/* <BottomNavigationTab title='EventoScreen' icon={Home}/> */}
      <BottomNavigationTab title='Home' icon={Tinder}/>
      <BottomNavigationTab title='Lista de usuarios' icon={Lista}/>
      <BottomNavigationTab title='Mis reuniones' icon={Matchs}/>
      <BottomNavigationTab title='Perfil' icon={Peril}/>
    </BottomNavigation>
);

export default function EventoStack() {
    return (
        <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} initialRouteName='TinderScreen'
        screenOptions={{
            headerShown: false
        }}>
        {/* <Tab.Navigator 
            initialRouteName='EventoScreen'
            screenOptions={{
                headerShown: false
            }}
        > */}
            {/* <Tab.Screen name="EventoScreen" component={EventoScreen} /> */}
            <Tab.Screen name="TinderScreen" component={TinderScreen} />
            <Tab.Screen name="ListaScreen" component={ListaScreen} />
            <Tab.Screen name="MatchesScreen" component={MatchesScreen} />
            <Tab.Screen name="PerfilScreen" component={PerfilScreen} />
        </Tab.Navigator>
    );
}