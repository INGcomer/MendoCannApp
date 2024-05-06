// React
import { useContext } from 'react';
import { useForm, Controller } from "react-hook-form"
import { StyleSheet, View, Alert } from 'react-native';
// functions
import BackEndUrl from '../funciones/BackEndUrl';
// Context
import { AuthContext } from '../Context/AuthContext';
// Kitten UI
import { Input, Text, Button } from '@ui-kitten/components';
// Axios
import axios from 'axios';

const LogInScreen = ({navigation}) => {
    const {Login} = useContext(AuthContext)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            codigo: "",
        },
    })

    const onSubmit = (data) => {
        axios({
            method: 'post',
            url: BackEndUrl('MatchAle/GetPerfil'),
            data: data,
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {

            Login(response.data.codigo)

            // redirijo al usuario
            navigation.navigate('B2B')

        }).catch(function (error) {

            Alert.alert('Pucha :(', 'No encontramos el codigo ingresado');

            console.log(error);
        });
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
                        status={errors.Nombre ? "danger" : 'basic'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.Input}
                    />
                )}
                name="codigo"
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