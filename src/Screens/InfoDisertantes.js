// React
import { View, StyleSheet, Pressable, Image, FlatList } from 'react-native';
// Expo
import { openURL } from 'expo-linking';
// Kitten UI
import { Text, Icon } from '@ui-kitten/components';

const InfoDisertantesScreen = ({ route, navigation }) => {
    const { nombre, Data } = route.params;
    return (
        <View style={styles.pageContainer}>
            {/* <View style={styles.nombre}>
                <Text category='h1' style={styles.nombre}> {Data.nombre} </Text>
            </View> */}

            <View style={styles.fotoContainer}>
                <Image
                    source={Data.foto}
                    style={styles.foto}
                />
            </View>

            <Text category='h1' style={styles.nombre}> {Data.nombre} </Text>

            <Text style={styles.descripcion}> {Data.descripcion} </Text>

            <View style={styles.Redes}>

                {Data.instagram ?
                    <Pressable onPress={() => openURL(Data.instagram)}>
                        <Icon name='instagram' style={styles.icons} />
                    </Pressable>
                : null}
                {Data.x ?
                    <Pressable onPress={() => openURL(Data.x)}>
                        <Icon name='twitter' style={styles.icons} />
                    </Pressable>
                : null}
                {Data.facebook ?
                    <Pressable onPress={() => openURL(Data.facebook)}>
                        <Icon name='facebook' style={styles.icons} />
                    </Pressable>
                : null}
                {Data.web ?
                    <Pressable onPress={() => openURL(Data.web)}>
                        <Icon name='globe' style={styles.icons} />
                    </Pressable>
                : null}

            </View>

            <Text category='h2' style={styles.nombre}> Actividades </Text>

            <FlatList
                style={styles.lista}
                data={Data.actividades}
                renderItem={({ item }) => (
                    <View style={styles.Actividad}>
                        <Text category='h3' style={styles.ActividadTitulo}> {item.nombre} </Text>
                        <Text style={styles.ActividadDescripcion}> {item.descripcion} </Text>

                        <View style={styles.TipoHorario}>
                            <Text>
                                <Text style={{fontWeight: "bold", color: 'black'}}> Tipo: </Text>
                                <Text style={styles.ActividadDescripcion}> {item.tipo} </Text>
                            </Text>
                        </View>
                    </View>
                )}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    pageContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'colum',
        flex: 1,
        // backgroundColor: '#FFFFFF',
        backgroundColor: '#C0EA6A',
    },
    nombre: {
        marginTop: 25,
        color: 'black'
    },
    descripcion: {
        width: "90%",
        marginTop: 25,
        color: 'black',
        textAlign: 'center'
    },
    fotoContainer: {
        height: 200,
        width: 200,
        backgroundColor: "#2A3330",
        borderRadius: 100,
        overflow: 'hidden'
    },
    foto: {
        height: '100%',
        width: "auto"
    },
    Redes: {
        marginTop: 25,
        flexDirection: 'row',
        gap: 50
    },
    icons: {
        height: 50,
        width: 50,
        tintColor: "#2A3330",
    },
    lista: {
        width: '100%',
    },
    Actividad: {
        height: 225,
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 25,
        marginHorizontal: 20,
        borderRadius: 30,
        gap: 25,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: "#2A3330",
    },
    ActividadTitulo:{
        color: 'black'
    },
    ActividadDescripcion:{
        width: "90%",
        color: 'black',
        textAlign: 'center'
    }
});


export default InfoDisertantesScreen;