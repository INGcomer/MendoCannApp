// React
import { useEffect, useContext, useState } from 'react';
import { Image, View, StyleSheet, Alert, FlatList } from 'react-native';
import { Text } from '@ui-kitten/components';
// Axios
import axios from 'axios';
// Context
import { AuthContext } from '../../Context/AuthContext';


const MatchesScreen = () => {
    const { UserToken } = useContext(AuthContext)

    const [UserData, SetUserData] = useState();

    console.log(UserToken)

    useEffect(() => {
        axios({
            method: 'post',
            url: 'http://192.168.0.14:3000/MatchAle/GetPerfil',
            data: { codigo: UserToken },
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {

            SetUserData(response.data)

            console.log(response.data)

        }).catch(function (error) {

            Alert.alert('Pucha :(', 'No encontramos el codigo ingresado');

            console.log(error);
        });
    }, []);

    return (
        <View style={styles.pageContainer}>

            {UserData ?
                <FlatList
                    style={styles.lista}
                    data={UserData.reuniones}
                    renderItem={({ item }) => <BotonDisertante data={item} navigation={navigation} />}
                />
                :
                <View style={styles.LoadingContainer}>
                    <Text style={styles.LoadingText}> Cargando . . . </Text>
                </View>
            }


        </View>
    )
}

const BotonDisertante = (({ data, navigation }) => {
    return (
        <View style={styles.Disertante} >
        </View>
    )
})

const styles = StyleSheet.create({
    pageContainer: {
        alignItems: 'center',
        flexDirection: 'colum',
        flex: 1,
        backgroundColor: '#C0EA6A',
    },
    LoadingContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    LoadingText: {
        fontSize: 50,
        fontWeight: 700
    }
});



export default MatchesScreen;