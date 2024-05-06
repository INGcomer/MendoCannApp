// React
import { useEffect, useContext, useState } from 'react';
import { View, StyleSheet, Alert, FlatList, Image } from 'react-native';
import { Text } from '@ui-kitten/components';
// function
import BackEndUrl from '../../funciones/BackEndUrl';
// Axios
import axios from 'axios';
// Context
import { AuthContext } from '../../Context/AuthContext';


const MatchesScreen = () => {
    const { UserToken } = useContext(AuthContext)

    const [UserData, SetUserData] = useState();

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
                UserData.reuniones.length > 0 ?
                    <FlatList
                        style={styles.lista}
                        data={UserData.reuniones}
                        renderItem={({ item }) => <BotonDisertante data={item} />}
                    />
                    :
                    <View style={styles.LoadingContainer}>
                        <Text style={styles.LoadingText}> No hay reuniones programadas </Text>
                    </View>
                :
                <View style={styles.LoadingContainer}>
                    <Text style={styles.LoadingText}> Cargando . . . </Text>
                </View>
            }

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


        </View>
    )
}

const BotonDisertante = (({ data }) => {
    let horarioFin = data.horario.split(':')

    horarioFin = horarioFin[0] + ':' + (parseInt(horarioFin[1]) + 15)
    console.log(horarioFin)

    return (
        <View style={[styles.Disertante]}>

            <Text style={styles.horario}>
                <Text style={[styles.horarioText]}> De: </Text>
                <Text style={[styles.horarioTextBold]}> {data.horario}  </Text>
                <Text style={[styles.horarioText]}> A:  </Text>
                <Text style={[styles.horarioTextBold]}> {horarioFin} </Text>
            </Text>


            <View style={styles.info}>
                <Text style={[styles.titulo, styles.texto]}> Reunion en el sector B2B  </Text>
                <Text style={[styles.titulo, styles.texto]}>Con:  {data.usuario_2.nombre}  </Text>
                <Text style={[styles.titulo, styles.texto]}> En la mesa: {data.mesa} </Text>
            </View>

        </View>
    )
})

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'colum',
        flexWrap: "wrap",
        flex: 1,
        backgroundColor: '#C0EA6A',
    },
    controles: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    controlesBoton: {
        height: 50,
        width: '45%',
        marginTop: 25,
        marginBottom: 25,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A3330',
        shadowColor: "#2A3330",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.23,
        shadowRadius: 11.27,
        elevation: 20
    },
    controlesBotonClicked: {
        elevation: 2,
        backgroundColor: '#FFFFFF',
    },
    lista: {
        width: '100%',
    },
    Disertante: {
        height: 180,
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 30,
        flexDirection: 'colum',
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
        overflow: 'hidden',
        zIndex: 1,
    },
    DisertanteClicked: {
        elevation: 2
    },
    texto: {
        color: 'black',
    },
    nombre: {
        fontSize: 30,
        fontWeight: 800
    },
    horario: {
        width: "100%",
        height: 25,
        backgroundColor: '#2A3330',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    horarioTextBold: {
        fontSize: 20,
        fontWeight: 800,
        color: '#FFFFFF',
    },
    horarioText: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 25,
        fontWeight: 800,
        textAlign: "center",
        marginTop: 15
    },
    descripcion: {
        textAlign: "center",
        margin: 15
    },
    QuienDondeContainer: {
        width: '100%',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    QuienDonde: {
        width: '30%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icons: {
        height: 25,
        width: 25,
        tintColor: "#2A3330",
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
        fontWeight: 700,
        textAlign: 'center'
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
        right: 200,
        top: -20,
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



export default MatchesScreen;