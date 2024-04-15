import React from 'react';
import { View, StyleSheet } from 'react-native';
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
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#222B45',
    },
});

export default TinderScreen;