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
import { AllUsersContext } from '../../Context/AllUsersContext';
import { AuthContext } from '../../Context/AuthContext';


const TinderScreen = () => {
    const {AllUsersData, SetAllUsersData} = useContext(AllUsersContext);
    const { UserToken } = useContext(AuthContext)

    useEffect(() => {
        if (!AllUsersData) {
            axios({
                method: 'get',
                url: 'http://192.168.0.14:3000/MatchAle/GetAllUsers',
                headers: {
                    "Accept": "application/json"
                },
            }).then(function (response) {
                // console.log(response.data)
        
                SetAllUsersData(response.data)
        
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, []);

    const onSwipeLeft = user => {
        const data = {
            codigo: UserToken,
            like: false,
            codigoLike: user.codigo,
            nombreLike: user.usuario.nombre,
            cargoLike: user.usuario.ron_empresa,
            empresaLike: user.empresa.nombre,
            fotoLike: user.usuario.foto
        }

        console.log(data)

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
        const data = {
            codigo: UserToken,
            codigoLike: user.codigo,
        }

        console.log(data)

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

    return (
        <View style={styles.pageContainer}>
            {AllUsersData ?
                <AnimatedStack
                    data={AllUsersData}
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