import {StyleSheet, View} from 'react-native'
import { Header, createStackNavigator } from '@react-navigation/stack';
// Stacks
import EventoStack from './EventoStack';
// Componentes
import EventosScreen from '../../Screens/Home';
import LogInScreen from '../../Screens/LogIn';
import PerfilScreen from '../../Screens/B2B/Perfil';

import DisertantesScreen from '../../Screens/Disertantes/Disertantes';
import InfoDisertantesScreen from '../../Screens/Disertantes/InfoDisertantes';

import ExpocitoresScreen from '../../Screens/Expocitores/Expocitores';

import CronogramaScreen from '../../Screens/Cronograma';

import { Icon, IconElement, TopNavigation, TopNavigationAction, Text } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon
    {...props}
    name='arrow-back'
  />
);

// const BackAction = () => (
//   <TopNavigationAction icon={BackIcon} style={styles.container}/>
// );

// const Title = () => {
//   return (
//     <Text> kk </Text>
//   )
// }

// const TopNavigationSimpleUsageShowcase = ({navigation}) => (
//   <TopNavigation
//     accessoryLeft={BackAction}
//     // title={Title}
//     ViewProps={styles.container}
//     onPress={navigation.goBack}
//   />
// );

const MyHeader = ({title, leftButton}) => {
  return(
    <View style={styles.container}> 
      <Text> {title} </Text>
      {leftButton}
    </View>
  )
}

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator 
      initialRouteName='Eventos' 
      screenOptions={{
        headerShown: true,
        headerMode: 'screen',
        // headerTintColor: 'white',
        headerStyle: { backgroundColor: '#C0EA6A' },
      }}
    >
      <Stack.Screen 
        name="Eventos" 
        options={{headerShown: false}} 
        component={EventosScreen} 
      />

      <Stack.Screen name="EventoStack" component={EventoStack} />
      <Stack.Screen name="login" component={LogInScreen} />


      <Stack.Screen name="Cronograma" component={CronogramaScreen} />
      <Stack.Screen name="Mapa" component={PerfilScreen} />

      <Stack.Screen name="Expocitores" component={ExpocitoresScreen} />


      <Stack.Screen name="Disertantes" component={DisertantesScreen} />
      <Stack.Screen 
        name="InfoDisertantes" 
        component={InfoDisertantesScreen} 
        options={({route}) => ({title: route.params.nombre})}
      />


      <Stack.Screen name="Sponsors" component={PerfilScreen} />

      <Stack.Screen name="B2B" component={EventoStack} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    // marginTop: '12%'
    height: 80
  },
});
