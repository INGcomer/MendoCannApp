import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

import { useForm, Controller } from "react-hook-form"
// IMGs
import LOGO from '../../../assets/images/logo 1.png';

const Preferencias = () => {
    // Tamaño de la empresa
    const [Chica, SetChica] = React.useState(false);
    const [Mediana, SetMediana] = React.useState(false);
    const [Grande, SetGrande] = React.useState(false);
    // ubicacion de la empresa
    const [Provincial, SetProvincial] = React.useState(false);
    const [Nacional, SetNacional] = React.useState(false);
    const [InterNacional, SetInterNacional] = React.useState(false);
    // tipo de empresa
    const [Inversor, SetInversor] = React.useState(false);
    const [Gobierno, SetGobierno] = React.useState(false);
    const [Growshop, SetGrowshop] = React.useState(false);
    const [Distribuidora, SetDistribuidora] = React.useState(false);
    const [Mayorista, SetMayorista] = React.useState(false);
    const [Consultora, SetConsultora] = React.useState(false);
    const [BancoSemillas, SetBancoSemillas] = React.useState(false);
    const [UsuarioReprocan, SetUsuarioReprocan] = React.useState(false);
    const [Infraestructura, SetInfraestructura] = React.useState(false);

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
        // Tamaño
        data.Tamaño = { Chica: Chica, Mediana: Mediana, Grande: Grande }
        // ubicacion
        data.Ubicacion = {Provincial: Provincial, Nacional: Nacional, InterNacional: InterNacional}

        if (data.pass != data.pass2) {
            SetPassError(true)
        }

        console.log(data)

        console.log(errors)
    }


    return (
        <View style={styles.pageContainer}>
            {/* <Image
                style={styles.tinyLogo}
                source={LOGO}
            /> */}

            <Text category='h1'> Crear una cuenta </Text>
            <Text category='s1'> Preferencias </Text>

            <Text category='h6'> Tamaño de la empresa </Text>
            <View style={styles.Input}>
                <Button appearance={Chica ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetChica(!Chica) }}>
                    Chica
                </Button>
                <Button appearance={Mediana ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetMediana(!Mediana) }}>
                    Mediana
                </Button>
                <Button appearance={Grande ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetGrande(!Grande) }}>
                    Grande
                </Button>
            </View>

            <Text category='h6'> Ubicacion de la empresa </Text>
            <View style={styles.Input}>
                <Button appearance={Provincial ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetProvincial(!Provincial) }}>
                    Provincial
                </Button>
                <Button appearance={Nacional ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetNacional(!Nacional) }}>
                    Nacional
                </Button>
                <Button appearance={InterNacional ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetInterNacional(!InterNacional) }}>
                    Inter nacional
                </Button>
            </View>

            <Text category='h6'> Tipo de empresa </Text>
            <View style={styles.Input}>
                <Button appearance={Inversor ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetInversor(!Inversor) }}>
                    Inversor
                </Button>
                <Button appearance={Gobierno ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetGobierno(!Gobierno) }}>
                    Gobierno
                </Button>
                <Button appearance={Growshop ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetGrowshop(!Growshop) }}>
                    Growshop
                </Button>
                <Button appearance={Distribuidora ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetDistribuidora(!Distribuidora) }}>
                    Distribuidora
                </Button>
                <Button appearance={Mayorista ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetMayorista(!Mayorista) }}>
                    Mayorista
                </Button>
                
                <Button appearance={Consultora ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetConsultora(!Consultora) }}>
                    Consultora
                </Button>
                <Button appearance={BancoSemillas ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetBancoSemillas(!BancoSemillas) }}>
                    Banco de semillas
                </Button>
                <Button appearance={UsuarioReprocan ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetUsuarioReprocan(!UsuarioReprocan) }}>
                    Usuario de reprocan
                </Button>
                <Button appearance={Infraestructura ? 'outline' : 'ghost'} style={styles.button} onPress={() => { SetInfraestructura(!Infraestructura) }}>
                    Infraestructura de cultivo
                </Button>
                
            </View>



            <Button onPress={handleSubmit(onSubmit)}>
                CREAR
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
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 13
    },
    button: {}
});

export default Preferencias;