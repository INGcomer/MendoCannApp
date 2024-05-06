// React
import { useState, useContext } from 'react';
import { useForm, Controller } from "react-hook-form"
import { TouchableWithoutFeedback, StyleSheet, View, Image, Linking, Alert } from 'react-native';
// Kitten UI
import { Icon, Input, Text, Button } from '@ui-kitten/components';

const Sponsors = () => {


    return (
        <View style={styles.pageContainer}>

            <Image
                style={styles.img}
                source={require('../../assets/splash.png')}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#C0EA6A',
    },
    img: {
        width: '100%',
        resizeMode: 'contain'
    }
});

export default Sponsors;