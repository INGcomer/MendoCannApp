// React
import { StyleSheet, View} from 'react-native';
// Kitten UI
import { Text } from '@ui-kitten/components';

const EventoScreen = () => {
    
    return (
        <View style={styles.pageContainer}>

            <Text category='h1'> EventoScreen </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#222B45',
        padding: "10%",
        gap: 25,
    },
});

export default EventoScreen;