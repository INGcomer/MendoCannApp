// React
import React from 'react';
import { View, StyleSheet} from 'react-native';
// Moment
import moment from 'moment'
// Kitten UI
import { Text, Icon } from '@ui-kitten/components';
// Data
import Data from '../../assets/data/Cronograma'

export default function HomeNow() {
    const DateNow = moment();

    const Dia = Data.filter(actividad => {

        const diaActividad = moment(actividad.dia)

        if (DateNow.format('l') == diaActividad) {
            return actividad
        }
    })

    const Ahora = Dia.filter(actividad => {
        const HoraActividad = DateNow.format('LT')
        const StartDate = moment('2013-02-08 ' + actividad.inicio).format('LT')
        const EndDate = moment('2013-02-08 ' + actividad.fin).format('LT')


        if (StartDate < HoraActividad && HoraActividad < EndDate) {
            console.log("esta ocurriendo")

            return actividad
        }
    })

    if (DateNow.isBefore('2024-05-17')) {
        return (
            <View style={[styles.HomeButtonNow]}>
                <Text style={[styles.text, styles.titulo]}> Nos vemos el dia 17 de Mayo </Text>
            </View>
        )
    }

    if (Ahora.length > 0) {
        return (
            <View style={[styles.HomeButtonNow]} >
                <View style={[styles.Textos]}>
                    <Text style={[styles.text, styles.titulo]}> {Ahora[0].nombre} </Text>
                </View>

                <View style={[styles.detalles]}>

                </View>

                <View style={styles.QuienDondeContainer}>
                    {Ahora[0].disertante ?
                        <View style={styles.QuienDonde}>
                            <Icon name='user' style={styles.icons} />
                            <Text style={styles.text}> {Ahora[0].disertante.nombre} </Text>
                        </View>
                        :
                        null}
                    <View style={styles.QuienDonde}>
                        <Icon name='clock' style={styles.icons} />
                        <Text style={styles.text}> Ahora </Text>
                    </View>
                    <View style={styles.QuienDonde}>
                        <Icon name='map-pin' style={styles.icons} />
                        <Text style={styles.text}> {Ahora[0].ubicacion} </Text>
                    </View>
                </View>

            </View>
        )
    }

    if (DateNow.isAfter('2024-05-18')) {
        return (
            <View style={[styles.HomeButtonNow]}>
                <Text style={[styles.text, styles.titulo]}> Gracias por ser parte de la </Text>
                <Text style={[styles.text, styles.titulo]}> Expo MendoCann 2024 </Text>
                <Text style={[styles.text, styles.titulo]}> Nos vemos el año que viene!! </Text>
            </View>
        )
    }



}


const styles = StyleSheet.create({
    HomeButtonNow: {
        height: 150,
        width: 325,
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
    Textos: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        color: '#2A3330',
    },
    HomeButtonNowText: {
        fontSize: 25
    },
    titulo: {
        fontSize: 25,
        textAlign: 'center'
    },
    descripcion: {
        textAlign: 'center'
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
});