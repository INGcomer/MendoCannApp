// React
import { StyleSheet, View, Image} from 'react-native';

const Sponsors = () => {
    return (
        <View style={styles.pageContainer}>

            <Image
                style={styles.img}
                source={require('../../assets/splash.png')}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#C0EA6A',
    },
    img: {
        width: '100%',
        resizeMode: 'contain'
    }
});

export default Sponsors;