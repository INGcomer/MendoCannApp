// React
import { useEffect, useContext, useState } from 'react';
import { Image, View, StyleSheet, Alert, FlatList } from 'react-native';
import { Text } from '@ui-kitten/components';
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
            url: 'http://192.168.0.14:3000/MatchAle/GetPerfil',
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
                <FlatList
                    style={styles.lista}
                    data={UserData.reuniones}
                    renderItem={({ item }) => <BotonDisertante data={item} />}
                />
                :
                <View style={styles.LoadingContainer}>
                    <Text style={styles.LoadingText}> Cargando . . . </Text>
                </View>
            }


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
        // backgroundColor: '#FFFFFF',
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
        // justifyContent: 'center',
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
        overflow: 'hidden'
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
        justifyContent: 'center'
    },
    LoadingText: {
        fontSize: 50,
        fontWeight: 700
    },
});



export default MatchesScreen;