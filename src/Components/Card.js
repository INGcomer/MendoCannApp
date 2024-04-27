import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

export default function Card(props) {
    const { usuario, empresa } = props.user;

    const foto = `http://192.168.0.14:3000/imgs/MatchAle/${usuario.foto}.png`
    const logo = `http://192.168.0.14:3000/imgs/MatchAle/${empresa.logo}.png`

    return (
        <View style={styles.card}>
            <View style={styles.User}>
                <View style={styles.imageContainer}>
                    <Image source={ {uri: foto} } style={styles.image} />

                </View>
                <View style={styles.nombreContainer}>
                    <Text style={styles.name}>{usuario.nombre}</Text>
                    <Text style={styles.bio}>{usuario.ron_empresa}</Text>
                    <Text style={styles.bio}>en {empresa.nombre}</Text>
                </View>
            </View>



            <View style={styles.empresa}>
                <View style={styles.logoContainer}>
                    {empresa.logo ? <Image source={{ uri: logo }} style={styles.image} /> : null }
                    
                </View>
                <View>
                    <Text style={styles.name}>{empresa.nombre}</Text>
                    <Text style={styles.bio}>{empresa.rubro}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // width: '90%',
        height: '90%',
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

        overflow: 'hidden'
    },
    User: {
        height: 'fit-content',
        width: '100%',
        // backgroundColor: '#101426',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%',
    },
    nombreContainer: {
        width: '70%',
        alignItems: 'center',
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
        width: 'auto',
        height: '100%',
        objectFit: 'contain',
    },
    name: {
        fontSize: 30,
        color: '#2A3330',
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 18,
        color: '#2A3330',
        lineHeight: 25,
    },
    empresa: {
        height: '100%',
        // backgroundColor: '#8F9BB3',
        backgroundColor: '#ffffff',
        padding: '5%'
    },
});

// export default Card;