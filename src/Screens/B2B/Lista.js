// React
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Image, FlatList } from 'react-native';
// Kitten UI
import { Text, Divider, Icon } from '@ui-kitten/components';
// data
import info from '../../../assets/data/Disertantes/Disertantes'

const ListaScreen = ({ navigation }) => {


    return (
        <View style={styles.pageContainer}>


            <FlatList
                style={styles.lista}
                data={info}
                renderItem={({ item }) => <BotonDisertante data={item} navigation={navigation} />}
            />


        </View>
    )
}

const BotonDisertante = (({ data, navigation }) => {
    return (
        <View style={styles.Disertante} >

            <View style={styles.container}> 
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
                            Empresa:
                        </Text>
                        <Text style={[styles.texto, styles.titulo]}>
                            {data.esenario}
                        </Text>
                    </Text>
                    <Text style={[styles.texto, styles.conferencia]}>
                        Cargo:
                    </Text>
                    <Text style={[styles.texto, styles.titulo]}>
                        {data.Conferencias}
                    </Text>
                </View>
            </View>

            <View style={styles.Botones}>
                <Pressable
                    onPress={() => { }}
                    style={({ pressed }) => [
                        styles.HomeButton,
                        pressed && styles.HomeButton2
                    ]}
                >
                    <Icon name='thumbs-down' style={styles.icons} />
                    <Text style={styles.HomeButtonText}>No me gusta</Text>
                </Pressable>
                <Pressable
                    onPress={() => { }}
                    style={({ pressed }) => [
                        styles.HomeButton,
                        pressed && styles.HomeButton2
                    ]}
                >
                    <Icon name='thumbs-up' style={styles.icons} />
                    <Text style={styles.HomeButtonText}>Me gusta</Text>
                </Pressable>
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
    lista: {
        width: '100%',
    },
    Disertante: {
        // height: 150,
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 30,
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
        // color: '#2A3330',
        color: 'black',
    },
    nombre: {
        fontSize: 30,
        fontWeight: 800
    },
    conferencia: {
        // fontSize: 30,
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
        // backgroundColor: 'red',
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
});

export default ListaScreen;