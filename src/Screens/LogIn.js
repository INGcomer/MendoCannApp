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

    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableWithoutFeedback>
    );

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
        console.log(data)
        axios({
            method: 'post',
            url: 'http://192.168.1.36:3000/users/login',
            data: data,
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {

            // Alert.alert('Genail', 'estas logueado');

            console.log(response.data)

            Login(response.data.Token)

            // redirijo al usuario
            // navigate('/' + forward_url.replace(/-/g, "/"))

        }).catch(function (error) {

            Alert.alert('pucha :(', 'hubo un error');

            console.log(error);
        });
    }


    return (
        <View style={styles.pageContainer}>
            <Image
                style={styles.tinyLogo}
                source={LOGO}
            />

            <Text category='h1'> Ingresar </Text>

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Email'
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
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Contraseña'
                        accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        // onChangeText={nextValue => SetContraValue(nextValue)}

                        status={errors.Nombre ? "danger" : 'basic'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.Input}
                    />
                )}
                name="password"
            />

            <Button onPress={handleSubmit(onSubmit)}>
                iniciar sesion
            </Button>

            <View style={styles.buttonContainer}>
                <Button appearance='ghost' onPress={() => navigation.navigate('SingIn/Datospersonales')}>
                    Crear una cuenta
                </Button>
                <Button appearance='ghost' onPress={() => Linking.openURL('https://www.withsisa.com/forgotPassword')}>
                    Olvide mi contraseña
                </Button>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#222B45',
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