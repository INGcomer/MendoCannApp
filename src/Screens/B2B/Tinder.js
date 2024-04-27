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
    const { AllUsersData, SetAllUsersData } = useContext(AllUsersContext);
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


                // busco y guardo lainformacion de usuario
                for (let index = 0; index < response.data.length; index++) {
                    if (response.data[index].codigo == UserToken) {
                        const userData = response.data[index]

                        response.data.splice(index, 1);

                        break
                    }
                }

                for (let index = 0; index < response.data.length; index++) {
                    // busco y elimino el perfil de "DEV"
                    if (response.data[index].codigo == 'DEV') {
                        response.data.splice(index, 1);
                    }

                    // si el perfil actual esta entre los likes del usuario, elimino el perfil
                    if (userData.likes.includes(response.data[index].codigo)) {
                        response.data.splice(index, 1);
                    }

                    // si el perfil actual esta entre los Dislikes del usuario, elimino el perfil
                    if (userData.dislikes.includes(response.data[index].codigo)) {
                        response.data.splice(index, 1);
                    }

                }

                const nuevoOrden = response.data.sort(function (a, b) {
                    if (a.puntaje > b.puntaje) {
                        return 1;
                    }
                    if (a.puntaje < b.puntaje) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                });


                SetAllUsersData(nuevoOrden)

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