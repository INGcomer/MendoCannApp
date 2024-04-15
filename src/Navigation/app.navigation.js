import { StyleSheet, View } from 'react-native'
import { Header, createStackNavigator } from '@react-navigation/stack';
// Componentes
import HomeScreen from '../Screens/Home';
// import EventoScreen from '../Screens/Home';
import PerfilScreen from '../Screens/B2B/Perfil';

import { Icon, IconElement, TopNavigation, TopNavigationAction, Text } from '@ui-kitten/components';

const BackIcon = (props) => (
    <Icon
        {...props}
        name='arrow-back'
    />
);


const MyHeader = ({ title, leftButton }) => {
    return (
        <View style={styles.container}>
            <Text> {title} </Text>
            {leftButton}
        </View>
    )
}

const Stack = createStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='Eventos'
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                // headerStyle: { backgroundColor: '#202B47' },
                headerStyle: { backgroundColor: '#101426' },
            }}
        >
            <Stack.Screen name="Eventos" component={HomeScreen} />
            {/* <Stack.Screen name="EventoStack" options={{ title: '', }} component={EventoStack} /> */}
            <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        // marginTop: '12%'
        height: 80
    },
});