import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon, IconElement } from '@ui-kitten/components';

import EventoScreen from '../../Screens/Evento';
import TinderScreen from '../../Screens/B2B/Tinder';
import ListaScreen from '../../Screens/B2B/Lista';
import MatchesScreen from '../../Screens/B2B/Matches';
import PerfilScreen from '../../Screens/B2B/Perfil';

const Tab = createBottomTabNavigator();

const Home = (props) => ( <Icon {...props} name='home-outline' />);
const Tinder = (props) => ( <Icon {...props} name='globe-outline' />);
const Lista = (props) => ( <Icon {...props} name='list-outline' />);
const Matchs = (props) => ( <Icon {...props} name='star-outline' />);
const Peril = (props) => ( <Icon {...props} name='person-outline' />);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='EventoScreen' icon={Home}/>
      <BottomNavigationTab title='TinderScreen' icon={Tinder}/>
      <BottomNavigationTab title='ListaScreen' icon={Lista}/>
      <BottomNavigationTab title='MatchesScreen' icon={Matchs}/>
      <BottomNavigationTab title='PerfilScreen' icon={Peril}/>
    </BottomNavigation>
);

export default function EventoStack() {
    return (
        <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} initialRouteName='EventoScreen'
        screenOptions={{
            headerShown: false
        }}>
        {/* <Tab.Navigator 
            initialRouteName='EventoScreen'
            screenOptions={{
                headerShown: false
            }}
        > */}
            <Tab.Screen name="EventoScreen" component={EventoScreen} />
            <Tab.Screen name="TinderScreen" component={TinderScreen} />
            <Tab.Screen name="ListaScreen" component={ListaScreen} />
            <Tab.Screen name="MatchesScreen" component={MatchesScreen} />
            <Tab.Screen name="PerfilScreen" component={PerfilScreen} />
        </Tab.Navigator>
    );
}