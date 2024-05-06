// React
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, FlatList, Image } from 'react-native';
// Kitten UI
import { Text, Icon } from '@ui-kitten/components';
// data
import info from '../../assets/data/Cronograma'

const CronogramaScreen = ({ navigation }) => {
    const viernes = info.filter((actividad) => actividad.dia == 17)
    const sabado = info.filter((actividad) => actividad.dia == 18)

    const [Viernes17, SetViernes17] = useState(true);
    const [Sabado18, SetSabado18] = useState(false);

    const [Data, SetData] = useState(info);

    useEffect(() => {
        if (Viernes17 == true) {
            SetData(viernes)
        } else {
            SetData(sabado)
        }
    }, [Viernes17]);


    return (
        <View style={styles.pageContainer}>

            <View style={styles.controles}>
                <Pressable
                    onPress={() => { SetViernes17(!Viernes17); SetSabado18(!Sabado18) }}
                    style={({ pressed }) => {
                        if (Viernes17) {
                            return ([styles.controlesBoton, styles.controlesBotonClicked])
                        } else {
                            return (styles.controlesBoton)
                        }
                    }}
                >
                    <Text style={[styles.texto, styles.nombre]}>
                        Viernes 17
                    </Text>

                </Pressable>
                <Pressable
                    onPress={() => { SetViernes17(!Viernes17); SetSabado18(!Sabado18) }}
                    style={({ pressed }) => {
                        if (Sabado18) {
                            return ([styles.controlesBoton, styles.controlesBotonClicked])
                        } else {
                            return (styles.controlesBoton)
                        }
                    }}
                >
                    <Text style={[styles.texto, styles.nombre]}>
                        Sabado 18
                    </Text>

                </Pressable>
            </View>


            <FlatList
                style={styles.lista}
                data={Data}
                renderItem={({ item }) => <BotonDisertante data={item} navigation={navigation} />}
            />

            <Image
                style={styles.img1}
                source={require('../../assets/chala.png')}
            />
            <Image
                style={styles.img2}
                source={require('../../assets/chala.png')}
            />
            <Image
                style={styles.img3}
                source={require('../../assets/chala.png')}
            />


        </View>
    )
}

const BotonDisertante = (({ data, navigation }) => {
    return (
        <View style={styles.Disertante}>
            <Text style={styles.horario}>
                <Text style={[styles.horarioText]}> De:  </Text>
                <Text style={[styles.horarioTextBold]}> {data.inicio} </Text>
                <Text style={[styles.horarioText]}> A:  </Text>
                <Text style={[styles.horarioTextBold]}> {data.fin} </Text>
            </Text>


            <View style={styles.info}>
                <Text style={[styles.titulo, styles.texto]}>  {data.nombre} </Text>
                <Text style={[styles.descripcion, styles.texto]}> {data.descripcion} </Text>
            </View>

            <View style={styles.QuienDondeContainer}>
                {data.disertante ?
                    <View style={styles.QuienDonde}>
                        <Icon name='user' style={styles.icons} />
                        <Text style={styles.texto}> {data.disertante.nombre} </Text>
                    </View>
                    :
                    null}
                <View style={styles.QuienDonde}>
                    <Icon name='map-pin' style={styles.icons} />
                    <Text style={styles.texto}> {data.ubicacion} </Text>
                </View>
                <View style={styles.QuienDonde}>
                    <Icon name='info' style={styles.icons} />
                    <Text style={styles.texto}> {data.tipo} </Text>
                    <Text style={styles.texto}> {data.sector} </Text>
                </View>
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
        justifyContent: 'space-between',
        zIndex: 1,
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
        zIndex: 1,
    },
    Disertante: {
        height: 250,
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
    },
    DisertanteClicked: {
        elevation: 2
    },
    texto: {
        color: 'black',
        textAlign: 'center'
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
    img1: {
        height: 600,
        width: 600,
        position: 'absolute',
        top: 160,
        left: 60,
        transform: [{ rotate: '-10deg' }],
        zIndex: 0,
        opacity: 0.2
    },
    img2: {
        height: 300,
        width: 300,
        position: 'absolute',
        top: -40,
        right: 200,
        transform: [{ rotate: '45deg' }],
        zIndex: 0,
        opacity: 0.2
    },
    img3: {
        height: 300,
        width: 300,
        position: 'absolute',
        top: 650,
        right: 200,
        transform: [{ rotate: '45deg' }],
        zIndex: 0,
        opacity: 0.2
    }
});


export default CronogramaScreen;