import React, { useEffect } from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Image, Linking } from 'react-native';
import { Icon, Input, Text, Button, Datepicker, Select, SelectItem, IndexPath } from '@ui-kitten/components';

import { useForm, Controller } from "react-hook-form"
// IMGs
import LOGO from '../../../assets/images/logo 1.png';

const DatosEmpresa = ({ navigation }) => {
    const [Cantidad, SetCantidad] = React.useState(new IndexPath(0));
    const [Tipo, SetTipo] = React.useState(new IndexPath(0));
    const [Tamaño, SetTamaño] = React.useState(new IndexPath(0));
    const [Ubicacion, SetUbicacion] = React.useState(new IndexPath(0));

    const [Empresa, SetEmpresa] = React.useState([]);

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
        // data.FechaNacimiento = date

        data.Tipo = Tipo

        // if (data.pass != data.pass2) {
        //     SetPassError(true)
        // }

        console.log(data)

        console.log(errors)
    }

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     console.log(selectedIndex)
    // }, [selectedIndex]);


    return (
        <View style={styles.pageContainer}>
            <Image
                style={styles.tinyLogo}
                source={LOGO}
            />

            <Text category='h1'> Crear una cuenta </Text>
            <Text category='s1'> Datos de la empresa/as </Text>

            {/* <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Select
                        selectedIndex={selectedIndex}
                        onSelect={index => setSelectedIndex(index)}
                        style={styles.Input}
                        placeholder='Empresas que representa'
                    >
                        <SelectItem title='1 ( UNA )' />
                        <SelectItem title='2 ( DOS )' />
                        <SelectItem title='3 ( TRES )' />
                        <SelectItem title='4 ( CUATRO )' />
                        <SelectItem title='5 ( SINCO )' />
                    </Select>
                )}
                name="Cantidad de empresas"
            /> */}

            {/* <View style={styles.Input}> */}
            {/* <Text category='h2'> Empresa 1 </Text> */}

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Nombre'
                        status={errors.Email ? "danger" : 'basic'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.Input}
                    />
                )}
                name="Nombre"
            />

            {/* <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Select
                            selectedIndex={Tipo}
                            onSelect={index => SetTipo(index)}
                            style={styles.Input}
                            placeholder='Tipo de empresa'
                        >
                            <SelectItem title='Grow shop' />
                            <SelectItem title='Banco de Semillas' />
                            <SelectItem title='Distribuidora' />
                            <SelectItem title='Mayorista' />
                            <SelectItem title='ONG' />
                        </Select>

                    )}
                    name="Tipo"
                /> */}

            <Select
                style={styles.Input}
                placeholder='Tipo de empresa'
                selectedIndex={Tipo}
                onSelect={index => SetTipo(index)}
            >
                <SelectItem title='Grow shop' />
                <SelectItem title='Banco de Semillas' />
                <SelectItem title='Distribuidora' />
                <SelectItem title='Mayorista' />
                <SelectItem title='ONG' />
            </Select>

            <Select
                style={styles.Input}
                placeholder='Tamaño'
                selectedIndex={Tamaño}
                onSelect={index => SetTamaño(index)}
            >
                <SelectItem title='Chica' />
                <SelectItem title='Mediana' />
                <SelectItem title='Grande' />
            </Select>

            <Select
                style={styles.Input}
                placeholder='Ubicacion'
                selectedIndex={Ubicacion}
                onSelect={index => SetUbicacion(index)}
            >
                <SelectItem title='Provincial' />
                <SelectItem title='Nacional' />
                <SelectItem title='Inter nacional' />
            </Select>

            {/* </View> */}



            {/* <Button onPress={handleSubmit(onSubmit)}>
                SIGUIENTE
            </Button> */}

            <Button onPress={() => { navigation.navigate('SingIn/Preferencias') }}>
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

export default DatosEmpresa;