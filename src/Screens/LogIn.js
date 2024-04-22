// React
import { useState, useContext } from 'react';
import { useForm, Controller } from "react-hook-form"
import { TouchableWithoutFeedback, StyleSheet, View, Image, Linking, Alert } from 'react-native';
// Context
import { AuthContext } from '../Context/AuthContext';
// Kitten UI
import { Icon, Input, Text, Button } from '@ui-kitten/components';
// Axios
import axios from 'axios';
// IMGs
import LOGO from '../../assets/images/logo 1.png';

const LogInScreen = ({navigation}) => {
    const {Login} = useContext(AuthContext)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: '',
        },
    })

    const onSubmit = (data) => {

        navigation.navigate('B2B')

        // console.log(data)
        // axios({
        //     method: 'post',
        //     url: 'http://192.168.1.36:3000/users/login',
        //     data: data,
        //     headers: {
        //         "Accept": "application/json"
        //     },
        // }).then(function (response) {

        //     // Alert.alert('Genail', 'estas logueado');

        //     console.log(response.data)

        //     Login(response.data.Token)

        //     // redirijo al usuario
        //     // navigation.navigate('B2B')

        // }).catch(function (error) {

        //     Alert.alert('pucha :(', 'hubo un error');

        //     console.log(error);
        // });
    }


    return (
        <View style={styles.pageContainer}>

            <Text category='h1'> Ingresar </Text>

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Codigo'
                        // value={value}
                        // onChangeText={nextValue => SetEmailValue(nextValue)}


                        status={errors.Nombre ? "danger" : 'basic'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.Input}
                    />
                )}
                name="email"
            />

            <Button onPress={handleSubmit(onSubmit)}>
                iniciar sesion
            </Button>

        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#C0EA6A',
        padding: "10%",
        gap: 25,
    },
    tinyLogo: {
        height: 200,
        width: 200,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default LogInScreen;