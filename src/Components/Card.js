import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import BackEndUrl from '../funciones/BackEndUrl';

export default function Card(props) {
    const { usuario, empresa } = props.user;

    const foto = BackEndUrl(`imgs/MatchAle/${usuario.foto}.png`)
    const logo = BackEndUrl(`imgs/MatchAle/${empresa.logo}.png`)

    return (
        <View style={styles.card}>
            <View style={styles.User}>
                <View style={styles.imageContainer}>
                    <Image source={ {uri: foto} } style={styles.image} />

                </View>
                <View style={styles.nombreContainer}>
                    <Text style={styles.name}>{usuario.nombre}</Text>
                    <Text style={styles.rubro}>{usuario.ron_empresa}</Text>
                    <Text style={styles.rubro}>en {empresa.nombre}</Text>
                </View>
            </View>



            <View style={styles.empresa}>
                <View style={styles.logoContainer}>
                    {empresa.logo ? <Image source={{ uri: logo }} style={styles.image} /> : null }
                    
                </View>
                <View>
                    <Text style={styles.name}>{empresa.nombre}</Text>
                    <Text style={styles.rubro}>{empresa.rubro}</Text>
                    <Text style={styles.bio}>{empresa.descripcion}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: '80%',
        margin: '5%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        overflow: 'hidden',
    },
    User: {
        height: 'fit-content',
        width: '100%',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%',
    },
    nombreContainer: {
        width: '70%',
        paddingLeft: 30
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 20,
        overflow: 'hidden',
    },
    logoContainer: {
        width: '100%',
        height: '30%',
    },
    image: {
        width: 'auto',
        height: '100%',
        objectFit: 'contain',
    },
    name: {
        fontSize: 30,
        color: '#2A3330',
        fontWeight: 'bold',
        // textAlign: "center"
    },
    rubro: {
        fontSize: 18,
        color: '#2A3330',
        lineHeight: 25,
        // textAlign: 'left'
    },
    bio: {
        fontSize: 13,
        color: '#2A3330',
        lineHeight: 25,
    },
    empresa: {
        height: '100%',
        backgroundColor: '#ffffff',
        padding: '5%'
    },
});