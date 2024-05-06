// React
import React, { useContext } from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';
// Kitten UI
import { Text, Icon } from '@ui-kitten/components';
// Context
import { AuthContext } from '../Context/AuthContext';
// components
import HomeNow from '../Components/HomeNow';
// img
import Logo from '../../assets/Logos/Logo completo.png'

const EventosScreen = ({ navigation }) => {
    const { UserToken } = useContext(AuthContext)

    return (
        <View style={styles.pageContainer}>
            <View style={styles.fotoContainer}>
                <Image
                    source={Logo}
                    style={styles.foto}
                />
            </View>

            <HomeNow />

            <Pressable
                onPress={() => navigation.navigate('Cronograma')}
                style={({ pressed }) => [
                    styles.HomeButton,
                    pressed && styles.HomeButton2
                ]}
            >
                <Icon name='clock' style={styles.icons} />
                <Text style={styles.HomeButtonText}>Cronograma</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('EventoStack')}
                style={({ pressed }) => [
                    styles.HomeButton,
                    pressed && styles.HomeButton2
                ]}
            >
                <Icon name='map-pin' style={styles.icons} />
                <Text style={styles.HomeButtonText}>Mapa</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('Expocitores')}
                style={({ pressed }) => [
                    styles.HomeButton,
                    pressed && styles.HomeButton2
                ]}
            >
                <Icon name='users' style={styles.icons} />
                <Text style={styles.HomeButtonText}>Expocitores</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('Disertantes')}
                style={({ pressed }) => [
                    styles.HomeButton,
                    pressed && styles.HomeButton2
                ]}
            >
                <Icon name='user' style={styles.icons} />
                <Text style={styles.HomeButtonText}>Disertantes</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('Sponsors')}
                style={({ pressed }) => [
                    styles.HomeButton,
                    pressed && styles.HomeButton2
                ]}
            >
                <Icon name='star' style={styles.icons} />
                <Text style={styles.HomeButtonText}>Sponsors</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    if (UserToken) {
                        navigation.navigate('B2B')
                    } else {
                        navigation.navigate('login')
                    }
                }}
                style={({ pressed }) => [
                    styles.HomeButton,
                    pressed && styles.HomeButton2
                ]}
            >
                <Icon name='globe' style={styles.icons} />
                <Text style={styles.HomeButtonText}>B2B</Text>
            </Pressable>

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

const styles = StyleSheet.create({
    pageContainer: {
        height: "100%",
        justifyContent: 'center',
        alignContent: 'flex-end',
        flexDirection: 'row',
        flexWrap: "wrap",
        flex: 1,
        backgroundColor: '#C0EA6A',
        paddingBottom: "15%",
        gap: 25,
    },
    HomeButton: {
        height: 150,
        width: 150,
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
        elevation: 20,
        zIndex: 1
    },
    HomeButton2: {
        height: 150,
        width: 150,
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
        elevation: 2,
        zIndex: 1
    },
    HomeButtonText: {
        color: '#2A3330',
        fontSize: 20
    },
    B2BButton: {
        height: 150,
        width: 320,
    },
    icons: {
        height: 50,
        width: 50,
        tintColor: "#2A3330",
    },
    fotoContainer: {
        height: 50,
        width: 325,
        justifyContent: 'center',
        alignItems: 'center',
    },
    foto: {
        height: 350,
        width: 350,
        zIndex: 1
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
        // top: 200,
        right: 200,
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


export default EventosScreen;