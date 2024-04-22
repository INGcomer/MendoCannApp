import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text, Icon } from '@ui-kitten/components';
import Card from '../../Components/Card';
import users from '../../../assets/data/users';

import AnimatedStack from '../../Components/AnimatedStack';

// import { GestureHandlerRootView } from 'react-native-gesture-handler';

const TinderScreen = () => {
    const onSwipeLeft = user => {
        console.warn('swipe left', user.Usuario.name);
    };

    const onSwipeRight = user => {
        console.warn('swipe right: ', user.Usuario.name);
    };

    return (
        <View style={styles.pageContainer}>
            <AnimatedStack
                data={users}
                renderItem={({ item }) => <Card user={item} />}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
            />

            {/* <View style={styles.Botones}>
                <Pressable
                    onPress={() => onSwipeLeft()}
                    style={({ pressed }) => [
                        styles.HomeButton,
                        pressed && styles.HomeButton2
                    ]}
                >
                    <Icon name='thumbs-down' style={styles.icons} />
                    <Text style={styles.HomeButtonText}>No me gusta</Text>
                </Pressable>
                <Pressable
                    // onPress={() => navigation.navigate('B2B')}
                    style={({ pressed }) => [
                        styles.HomeButton,
                        pressed && styles.HomeButton2
                    ]}
                >
                    <Icon name='thumbs-up' style={styles.icons} />
                    <Text style={styles.HomeButtonText}>Me gusta</Text>
                </Pressable>


            </View> */}
        </View>
    );
};


const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#C0EA6A',
        height: '100%',
    },
    Botones: {
        height: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 0,
        // marginBottom: 200,
    },
    HomeButton: {
        height: 150,
        width: 150,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: "#2A3330",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.23,
        shadowRadius: 11.27,
        elevation: 20
    },
    HomeButton2: {
        height: 150,
        width: 150,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: "#2A3330",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.23,
        shadowRadius: 11.27,
        elevation: 2
    },
    HomeButtonText: {
        color: '#2A3330',
        fontSize: 20
    },
    icons: {
        height: 50,
        width: 50,
        tintColor: "#2A3330",
    },
});

export default TinderScreen;