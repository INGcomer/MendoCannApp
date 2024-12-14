// React
import { useEffect, useContext, useState } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { Text } from '@ui-kitten/components';
// function
import BackEndUrl from '../../funciones/BackEndUrl';
// Axios
import axios from 'axios';
// context
import { AuthContext } from '../../Context/AuthContext';

const ListaScreen = ({ navigation }) => {
    const { UserToken } = useContext(AuthContext)

    const [AllUsersDataLocal, SetAllUsersDataLocal] = useState();

    useEffect(() => {
        axios({
            method: 'get',
            url: BackEndUrl('MatchAle/GetAllUsers'),
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {

            let userData = null

            let likes = []
            let Dislikes = []

            // busco y guardo lainformacion de usuario
            for (let index = 0; index < response.data.length; index++) {
                if (response.data[index].codigo == UserToken) {
                    userData = response.data[index]
                    // SetUserInfo(response.data[index])
                    response.data.splice(index, 1);

                    break
                }
            }

            for (let index = 0; index < response.data.length; index++) {
                // busco y elimino el perfil de "DEV"
                if (response.data[index].codigo == 'DEV') {
                    // response.data.splice(index, 1);
                    response.data[index] = null

                    continue
                }

                // Reviso si el usuario ha dado Likes
                if (userData.likes.length > 0) {
                    // si el perfil actual esta entre los likes del usuario, elimino el perfil
                    if (userData.likes.includes(response.data[index].codigo)) {
                        response.data[index].like = true
                        likes.push(response.data[index])
                        response.data[index] = null

                        continue
                    }
                }

                // Reviso si el usuario ha dado DisLikes
                if (userData.dislikes.length > 0) {
                    // si el perfil actual esta entre los Dislikes del usuario, elimino el perfil
                    if (userData.dislikes.includes(response.data[index].codigo)) {
                        response.data[index].like = false
                        Dislikes.push(response.data[index])
                        response.data[index] = null

                        continue
                    }
                }

                response.data[index].like = 'indefinido'
                response.data[index].tipo = 'indefinido'
            }

            const dataLimpia = response.data.filter(usuario => usuario != null)

            let nuevoOrden = dataLimpia.sort(function (a, b) {
                if (a.puntaje < b.puntaje) {
                    return 1;
                }
                if (a.puntaje > b.puntaje) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });

            nuevoOrden.unshift({
                tipo: 'titulo',
                texto: `Usuarios sin valorar ${nuevoOrden.length} de ${nuevoOrden.length + likes.length + Dislikes.length}`
            })

            nuevoOrden.push({
                tipo: 'titulo',
                texto: "Mis me gusta"
            })

            const sinValorar_Likes = nuevoOrden.concat(likes)

            sinValorar_Likes.push({
                tipo: 'titulo',
                texto: "Mis no me gusta"
            })

            const sinValorar_Likes_Dislikes = sinValorar_Likes.concat(Dislikes)

            SetAllUsersDataLocal(sinValorar_Likes_Dislikes)

        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <View style={styles.pageContainer}>
            {AllUsersDataLocal ?
                <FlatList
                    style={styles.lista}
                    data={AllUsersDataLocal}
                    renderItem={({ item }) => <BotonDisertante data={item} navigation={navigation} />}
                />
                :
                <View style={styles.coertura}>
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

const BotonDisertante = (({ data, navigation }) => {
    return (
        <View style={[
            styles.Disertante,
            data.like == true ? styles.DisertanteLike : null,
            data.like == false ? styles.DisertanteDisLike : null,
        ]}
        >
            {data.tipo == 'titulo' ?
                <Text style={[styles.texto, styles.nombre]}> {data.texto} </Text>
                :
                <>
                    <View style={styles.container}>
                        <View style={styles.fotoContainer}>
                            <Image
                                source={{ uri: BackEndUrl(`imgs/MatchAle/${data.usuario.foto}.png`) }}
                                style={styles.foto}
                            />
                        </View>

                        <View style={styles.textoBox}>
                            <Text style={[styles.texto, styles.nombre]}>
                                {data.usuario.nombre}
                            </Text>
                            <Text>
                                <Text style={[styles.texto, styles.conferencia]}>
                                    Cargo:
                                </Text>
                                <Text style={[styles.texto, styles.titulo]}>
                                    {data.usuario.ron_empresa}
                                </Text>
                            </Text>
                            <Text>
                                <Text style={[styles.texto, styles.conferencia]}>
                                    Empresa:
                                </Text>
                                <Text style={[styles.texto, styles.titulo]}>
                                    {data.empresa.nombre}
                                </Text>
                            </Text>

                        </View>
                    </View>
                </>
            }



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
    lista: {
        width: '100%',
        zIndex: 1,
    },
    Disertante: {
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 30,
        borderWidth: 4,
        borderColor: '#FFFFFF',
        flexDirection: 'colum',
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
    },
    DisertanteLike: {
        borderColor: '#B3E41D',
    },
    DisertanteDisLike: {
        borderColor: '#EE4125'
    },
    container: {
        height: 125,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBox: {
        height: '100%',
        width: "50%",
        marginLeft: 30,
        justifyContent: 'center',
    },
    fotoContainer: {
        height: 100,
        width: 100,
        backgroundColor: "#2A3330",
        borderRadius: 50,
        overflow: 'hidden'
    },
    foto: {
        height: '100%',
        width: "auto"
    },
    texto: {
        color: 'black',
    },
    nombre: {
        fontSize: 25,
        fontWeight: 800
    },
    descripcion: {
        fontSize: 15,
        height: "30%"
    },
    conferencia: {
        fontWeight: 800
    },
    icons: {
        height: 60,
        width: 60,
        tintColor: "#2A3330",
    },


    Botones: {
        height: 100,
        paddingLeft: 25,
        paddingRight: 25,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
    },
    HomeButton: {
        height: 100,
        width: 100,
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
        elevation: 20
    },
    HomeButton2: {
        height: 100,
        width: 100,
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
        elevation: 2
    },
    HomeButtonText: {
        color: '#2A3330',
        fontSize: 15
    },
    icons: {
        height: 25,
        width: 25,
        tintColor: "#2A3330",
    },
    coertura: {
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

export default ListaScreen;