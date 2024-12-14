// React
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Image, FlatList } from 'react-native';
// Kitten UI
import { Text } from '@ui-kitten/components';
// data
import info from '../../../assets/data/Disertantes/Disertantes'

const DisertantesScreen = ({ navigation }) => {
    const Medicinal = info.filter((disertante) => disertante.esenario == ' Medicinal')
    const IndustriaCultivo = info.filter((disertante) => disertante.esenario == ' Industria y Cultivo')

    const [BotonMedicinal, SetBotonMedicinal] = useState(false);
    const [BotonIndustria, SetBotonIndustria] = useState(true);

    const [Data, SetData] = useState(info);

    useEffect(() => {
        if (BotonMedicinal == true && BotonIndustria == true) {
            SetData(info)
        }
        if (BotonMedicinal == false && BotonIndustria == true) {
            SetData(Medicinal)
        }
        if (BotonMedicinal == true && BotonIndustria == false) {
            SetData(IndustriaCultivo)
        }
        if (BotonMedicinal == false && BotonIndustria == false) {
            SetData(info)
        }
    }, [BotonMedicinal, BotonIndustria]);



    return (
        <View style={styles.pageContainer}>

            <View style={styles.controles}>
                <Pressable
                    onPress={() => SetBotonMedicinal(!BotonMedicinal)}
                    style={({ pressed }) => {
                        if (BotonMedicinal) {
                            return ([styles.controlesBoton, styles.controlesBotonClicked])
                        } else {
                            return (styles.controlesBoton)
                        }
                    }}
                >
                    <Text style={[styles.texto, styles.nombre]}>
                        Medicinal
                    </Text>

                </Pressable>
                <Pressable
                    onPress={() => SetBotonIndustria(!BotonIndustria)}
                    style={({ pressed }) => {
                        if (BotonIndustria) {
                            return ([styles.controlesBoton, styles.controlesBotonClicked])
                        } else {
                            return (styles.controlesBoton)
                        }
                    }}
                >
                    <Text style={[styles.texto, styles.nombre]}>
                        Industria
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


        </View >
    )
}

const BotonDisertante = (({ data, navigation }) => {
    return (
        <Pressable
            onPress={() =>
                navigation.navigate('InfoDisertantes', {
                    nombre: data.nombre,
                    Data: data
                })
            }
            style={({ pressed }) => [
                styles.Disertante,
                pressed && [styles.Disertante, styles.DisertanteClicked]
            ]}
        >

            <View style={styles.fotoContainer}>
                <Image
                    source={data.foto}
                    style={styles.foto}
                />
            </View>

            <View style={styles.textoBox}>
                <Text style={[styles.texto, styles.nombre]}>
                    {data.nombre}
                </Text>
                <Text>
                    <Text style={[styles.texto, styles.conferencia]}>
                        Sector:
                    </Text>
                    <Text style={[styles.texto, styles.titulo]}>
                        {data.esenario}
                    </Text>
                </Text>
            </View>
        </Pressable>
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
        flexDirection: 'row',
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
        height: 150,
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 30,
        flexDirection: 'row',
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
    DisertanteClicked: {
        elevation: 2
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
    conferencia: {
        fontWeight: 800
    },
    icons: {
        height: 60,
        width: 60,
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


export default DisertantesScreen;