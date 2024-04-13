import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

export default function Card(props) {
    const { Usuario, Empresa } = props.user;
    return (
        <View style={styles.card}>
            <View style={styles.User}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: Usuario.image }} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.name}>{Usuario.name}</Text>
                    <Text style={styles.bio}>{Empresa.puesto}</Text>
                    <Text style={styles.bio}>en {Empresa.nombre}</Text>
                </View>
            </View>



            <View style={styles.empresa}>
                <View style={styles.logoContainer}>
                    <Image source={{ uri: Empresa.logo }} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.name}>{Empresa.nombre}</Text>
                    <Text style={styles.bio}>{Empresa.tipo}</Text>
                    {/* <Text style={styles.bio}>en {Empresa.nombre}</Text> */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // width: '90%',
        height: '60%',
        margin: '5%',
        borderRadius: 10,
        backgroundColor: '#fefefe',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,

        overflow: 'hidden'
    },
    User: {
        height: 'fit-content',
        width: '100%',
        backgroundColor: '#101426',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%'
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 20,
        overflow: 'hidden',
    },
    logoContainer: {
        width: '100%',
        height: '50%',
    },
    image: {
        width: 'fit-content',
        height: '100%',
        objectFit: 'contain',
    },
    name: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 18,
        color: 'white',
        lineHeight: 25,
    },
    empresa: {
        height: '100%',
        backgroundColor: '#8F9BB3',
        padding: '5%'
    },
});

// export default Card;