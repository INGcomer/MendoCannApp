import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

// import img from '../../../assets/images/b2b/662978e073035617634b34b7.jpeg'


const PerfilScreen = () => {
    return (
        <View>
            {/* <Text category='h1'> PerfilScreen </Text> */}

            {/* <Image source={ require("../../../assets/images/b2b/662978e073035617634b34b7.jpeg") } style={styles.image} /> */}
            {/* <Image source={{ uri: img }} style={styles.image} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        // objectFit: 'contain',
    },
});


export default PerfilScreen;