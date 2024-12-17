// React
import { useEffect, useContext, useState } from 'react';
import { Image, View, StyleSheet, Alert, Pressable } from 'react-native';
import { Text } from '@ui-kitten/components';
// function
import BackEndUrl from '../../funciones/BackEndUrl';
// Axios
import axios from 'axios';
// Context
import { AuthContext } from '../../Context/AuthContext';


const PerfilScreen = ({navigation}) => {
    const { UserToken, Logout } = useContext(AuthContext)

    const [UserData, SetUserData] = useState();

    console.log(UserToken)

    useEffect(() => {
        axios({
            method: 'post',
            url: BackEndUrl('MatchAle/GetPerfil'),
            data: { codigo: UserToken },
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {

            SetUserData(response.data)

            console.log(response.data)

        }).catch(function (error) {

            Alert.alert('Pucha :(', 'No encontramos el codigo ingresado');

            console.log(error);
        });
    }, []);

    return (
        <View style={styles.pageContainer}>

            {UserData ?
                <DataUsuario data={UserData} Logout={Logout} navigation={navigation}/>
                :
                <View style={styles.LoadingContainer}>
                    <Text style={styles.LoadingText}> Cargando . . . </Text>
                </View>
            }


        </View>
    )
}

const DataUsuario = ({ data, Logout, navigation }) => {
    return (
        <>
            <View style={styles.fotoContainer}>
                <Image
                    source={{ uri: BackEndUrl(`imgs/MatchAle/${data.usuario.foto}.png`) }}
                    style={styles.foto}
                />
            </View>

            <Text category='h1' style={styles.nombre}> {data.usuario.nombre} </Text>

            <Text category='h4' style={styles.nombre}> {data.usuario.ron_empresa} en {data.empresa.nombre} </Text>

            <Pressable
                onPress={() => {Logout(), navigation.navigate('Eventos')}}
                style={({ pressed }) => [
                    styles.HomeButton,
                    pressed && styles.HomeButton2
                ]}
            >

                <Text style={styles.CerrarCecion}> Cerrar sesión </Text>
 
            </Pressable>

            <Image
                style={styles.img1}
                source={require('../../../assets/chala.png')}
            />
            <Image
                style={styles.img2}
                source={require('../../../assets/chala.png')}
            />
            <Image
                style={styles.img3}
                source={require('../../../assets/chala.png')}
            />


        </>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        alignItems: 'center',
        flexDirection: 'colum',
        flex: 1,
        backgroundColor: '#C0EA6A',
    },
    nombre: {
        marginTop: 25,
        paddingLeft: 30,
        paddingRight: 30,
        color: 'black',
        textAlign: "center",
        zIndex: 1,
    },
    CerrarCecion: {
        color: 'black',
        zIndex: 1,
    },
    descripcion: {
        width: "90%",
        marginTop: 25,
        color: 'black',
        textAlign: 'center',
        zIndex: 1,
    },
    fotoContainer: {
        height: 200,
        width: 200,
        marginTop: 30,
        backgroundColor: "#2A3330",
        borderRadius: 100,
        overflow: 'hidden',
        zIndex: 1,
    },
    foto: {
        height: '100%',
        width: "auto"
    },
    Redes: {
        marginTop: 25,
        flexDirection: 'row',
        gap: 50
    },
    icons: {
        height: 50,
        width: 50,
        tintColor: "#2A3330",
    },
    lista: {
        width: '100%',
    },
    Actividad: {
        height: 225,
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 25,
        marginHorizontal: 20,
        borderRadius: 30,
        gap: 25,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: "#2A3330",
    },
    ActividadTitulo: {
        color: 'black'
    },
    ActividadDescripcion: {
        width: "90%",
        color: 'black',
        textAlign: 'center'
    },
    LoadingContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    LoadingText: {
        fontSize: 50,
        fontWeight: 700
    },
    HomeButton: {
        height: 50,
        width: 150,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: "#2A3330",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.23,
        shadowRadius: 11.27,
        elevation: 20,
        position: 'absolute',
        bottom: 50,
        zIndex: 1,
    },
    HomeButton2: {
        elevation: 2
    },
    img1: {
        height: 600,
        width: 600,
        position: 'absolute',
        top: 160,
        left: 60,
        transform: [{rotate: '-10deg'}],
        zIndex: 0,
        opacity: 0.2
    },
    img2: {
        height: 300,
        width: 300,
        position: 'absolute',
        // top: 200,
        right: 200,
        transform: [{rotate: '45deg'}],
        zIndex: 0,
        opacity: 0.2
    },
    img3: {
        height: 300,
        width: 300,
        position: 'absolute',
        top: 650,
        right: 200,
        transform: [{rotate: '45deg'}],
        zIndex: 0,
        opacity: 0.2
    }
});



export default PerfilScreen;