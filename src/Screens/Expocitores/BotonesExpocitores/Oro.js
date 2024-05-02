// React
import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
// Kitten UI
import { Text } from '@ui-kitten/components';

const BotonOro = (({ data, navigation }) => {
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
                data.sponsor == 'Oro' && [styles.SponsorDiamante],
                data.stand == 'Oro' && [styles.StandDiamante],
                pressed && [styles.DisertanteClicked]
            ]}
        >

            {data.sponsor == 'Oro' ?
                <View style={styles.fotoContainerDiamante}>
                    <Image
                        source={data.foto}
                        style={styles.foto}
                    />
                </View>
                :
                <View style={styles.fotoInfoPrincipal}>


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
                                Rubro:
                            </Text>
                            <Text style={[styles.texto, styles.titulo]}>
                                {data.rubro}
                            </Text>
                        </Text>
                        <Text>
                            <Text style={[styles.texto, styles.conferencia]}>
                                Sector:
                            </Text>
                            <Text style={[styles.texto, styles.titulo]}>
                                {data.sector}
                            </Text>
                        </Text>
                    </View>
                </View>
            }


            {data.sponsor == 'Oro' ?
                <>
                    <Text style={[styles.texto, styles.nombreDiamante]}>
                        {data.nombre}
                    </Text>
                    <View style={[styles.descripcion]}>
                        <Text>
                            <Text style={[styles.texto, styles.conferencia]}>
                                Descripcion:
                            </Text>
                            <Text style={[styles.texto, styles.titulo]}>
                                {data.descripcion}
                            </Text>
                        </Text>
                        <Text>
                            <Text style={[styles.texto, styles.conferencia]}>
                                Rubro:
                            </Text>
                            <Text style={[styles.texto, styles.titulo]}>
                                {data.rubro}
                            </Text>
                        </Text>
                        <Text>
                            <Text style={[styles.texto, styles.conferencia]}>
                                Sector:
                            </Text>
                            <Text style={[styles.texto, styles.titulo]}>
                                {data.sector}
                            </Text>
                        </Text>
                    </View>
                </>
                :
                null}



        </Pressable >
    )
})

const styles = StyleSheet.create({
    fotoInfoPrincipal: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Disertante: {
        height: 150,
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 30,
        // flexDirection: 'row',
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
        elevation: 20
    },
    DisertanteClicked: {
        elevation: 2
    },
    SponsorDiamante: {
        marginTop: 60,
        // height: 300,
        height: 'auto',
        paddingTop: 20,
        borderWidth: 5,
        borderColor: '#FFDE4A',
    },
    StandDiamante: {
        borderWidth: 5,
        borderColor: '#FFDE4A',
    },
    descripcion: {
        padding: 20
    },
    textoBox: {
        height: 100,
        width: "50%",
        marginLeft: 30,
        justifyContent: 'center',
    },
    fotoContainerDiamante: {
        height: 150,
        width: 150,
        backgroundColor: "#2A3330",
        borderRadius: 100,
        overflow: 'hidden'
    },
    fotoContainer: {
        height: 100,
        width: 100,
        backgroundColor: "#2A3330",
        borderRadius: 100,
        overflow: 'hidden'
    },
    foto: {
        height: '100%',
        width: "auto"
    },
    texto: {
        // color: '#2A3330',
        color: 'black',
    },
    nombre: {
        fontSize: 30,
        fontWeight: 800
    },
    nombreDiamante: {
        fontSize: 40,
        fontWeight: 800,
    },
    conferencia: {
        // fontSize: 30,
        fontWeight: 800
    },
    icons: {
        height: 60,
        width: 60,
        tintColor: "#2A3330",
    }
});


export default BotonOro;