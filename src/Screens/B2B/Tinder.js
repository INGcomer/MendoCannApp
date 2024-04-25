// React
import { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
// components
import Card from '../../Components/Card';
import AnimatedStack from '../../Components/AnimatedStack';
// Axios
import axios from 'axios';
// context
import { UsersDataContext } from '../../Navigation/Stacks/EventoStack';


const TinderScreen = () => {

    const [Usuarios, SetUsuarios] = useContext(UsersDataContext);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://192.168.0.14:3000/MatchAle/GetAllUsers',
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {
            console.log(response.data)
    
            SetUsuarios(response.data)
    
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    const onSwipeLeft = user => {
        console.warn('swipe left', user.Usuario.name);

        const data = {
            codigo: 'kk',
            like: false,
            codigoLike: 'kk2'
        }

        axios({
            method: 'post',
            url: 'http://192.168.0.14:3000/MatchAle/saveLike',
            data: data,
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {

            console.log(response.data)

        }).catch(function (error) {

            Alert.alert('Pucha :(', 'No encontramos el codigo ingresado');

            console.log(error);
        });
    };

    const onSwipeRight = user => {
        console.warn('swipe right: ', user.Usuario.name);
    };

    return (
        <View style={styles.pageContainer}>
            {Usuarios ?
                <AnimatedStack
                    data={Usuarios}
                    renderItem={({ item }) => <Card user={item} />}
                    onSwipeLeft={onSwipeLeft}
                    onSwipeRight={onSwipeRight}
                />
                :
                <View style={styles.LoadingContainer}>
                    <Text style={styles.LoadingText}> Cargando . . . </Text>
                </View>
            }
        </View>
    );
};


const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#C0EA6A',
        height: '100%',
    },
    LoadingContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    LoadingText: {
        fontSize: 50,
        fontWeight: 700
    }
});

export default TinderScreen;