import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Image, Linking } from 'react-native';
import { Icon, Input, Text, Button, Datepicker } from '@ui-kitten/components';

import { useForm, Controller } from "react-hook-form"
// IMGs
import LOGO from '../../../assets/images/logo 1.png';

const DatosPersonales = ({navigation}) => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [PassError, SetPassError] = React.useState(false);

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
    const CalendarIcon = (props) => (
        <Icon
            {...props}
            name='calendar'
        />
    );

    const [date, setDate] = React.useState(new Date());

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            Nombre: "",
            Email: '',
            pass: '',
            pass2: '',
            FechaNacimiento: '',
        },
    })

    const onSubmit = (data) => {
        data.FechaNacimiento = date

        if (data.pass != data.pass2) {
            SetPassError(true)
        }

        console.log(data)

        console.log(errors)

        // navigation.navigate('SingIn/DatosEmpresa')
    }


    return (
        <View style={styles.pageContainer}>
            <Image
                style={styles.tinyLogo}
                source={LOGO}
            />

            <Text category='h1'> Crear una cuenta </Text>
            <Text category='s1'> Datos personales </Text>

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Nombre'
                        status={errors.Nombre ? "danger" : 'basic'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.Input}
                    />
                )}
                name="Nombre"
            />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Email'
                        status={errors.Email ? "danger" : 'basic'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.Input}
                    />
                )}
                name="Email"
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

                        status={PassError ? "danger" : 'basic'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.Input}
                    />
                )}
                name="pass"
            />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Confirmar Contraseña'
                        accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        // onChangeText={nextValue => SetContraValue(nextValue)}

                        status={PassError ? "danger" : 'basic'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.Input}
                    />
                )}
                name="pass2"
            />

            <Datepicker
                placeholder='Pick Date'
                date={date}
                onSelect={nextDate => setDate(nextDate)}
                accessoryRight={CalendarIcon}
                style={styles.Input}
                min={new Date('1924-02-14')}
            />

            {/* <Button onPress={handleSubmit(onSubmit)}>
                SIGUIENTE
            </Button> */}
            <Button onPress={() => {navigation.navigate('SingIn/DatosEmpresa')}}>
                SIGUIENTE
            </Button>

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
    Input: {
        width: '100%'
    }
});

export default DatosPersonales;