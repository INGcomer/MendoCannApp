import { createStackNavigator } from '@react-navigation/stack';
// Componentes
import HomeScreen from '../Screens/Home';

const Stack = createStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='Eventos'
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#101426' },
            }}
        >
            <Stack.Screen name="Eventos" component={HomeScreen} />
        </Stack.Navigator>
    );
}