import { createStackNavigator } from '@react-navigation/stack';

// Componentes
import LogInScreen from '../../Screens/LogIn';
import DatosPersonales from '../../Screens/SingIn/DatosPersonales';
import DatosEmpresa from '../../Screens/SingIn/DatosEmpresa';
import Preferencias from '../../Screens/SingIn/Preferencias';

const Stack = createStackNavigator();

export default function LogInStack() {
  return (
    <Stack.Navigator initialRouteName='LogIn'>
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SingIn/Datospersonales" component={DatosPersonales} />
      <Stack.Screen name="SingIn/DatosEmpresa" component={DatosEmpresa} />
      <Stack.Screen name="SingIn/Preferencias" component={Preferencias} />
    </Stack.Navigator>
  );
}

