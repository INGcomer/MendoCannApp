import React, { useState, useEffect } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Pressable } from 'react-native';
import { Text, Icon } from '@ui-kitten/components';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useDerivedValue,
    useAnimatedGestureHandler,
    interpolate,
    withSpring,
    runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';

import Like from '../../assets/images/LIKE.png';
import Nope from '../../assets/images/nope.png';

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

const AnimatedStack = props => {
    const { data, renderItem, onSwipeRight, onSwipeLeft } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(currentIndex + 1);

    const currentProfile = data[currentIndex];
    const nextProfile = data[nextIndex];

    const { width: screenWidth } = useWindowDimensions();

    const hiddenTranslateX = 2 * screenWidth;

    const translateX = useSharedValue(0);
    const rotate = useDerivedValue(
        () =>
            interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
            'deg',
    );

    const cardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
            {
                rotate: rotate.value,
            },
        ],
    }));

    const nextCardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: interpolate(
                    translateX.value,
                    [-hiddenTranslateX, 0, hiddenTranslateX],
                    [1, 0.8, 1],
                ),
            },
        ],
        opacity: interpolate(
            translateX.value,
            [-hiddenTranslateX, 0, hiddenTranslateX],
            [1, 0.5, 1],
        ),
    }));

    const likeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value, [0, hiddenTranslateX / 5], [0, 1]),
    }));

    const nopeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 5], [0, 1]),
    }));

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startX = translateX.value;
        },
        onActive: (event, context) => {
            translateX.value = context.startX + event.translationX;
        },
        onEnd: event => {
            if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
                translateX.value = withSpring(0);
                return;
            }

            translateX.value = withSpring(
                hiddenTranslateX * Math.sign(event.velocityX),
                {},
                () => runOnJS(setCurrentIndex)(currentIndex + 1),
            );

            const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
            onSwipe && runOnJS(onSwipe)(currentProfile);
        },
    });

    useEffect(() => {
        translateX.value = 0;
        setNextIndex(currentIndex + 1);
    }, [currentIndex, translateX]);

    return (
        <GestureHandlerRootView style={{zIndex: 20}}>
            <View style={styles.root}>
                {nextProfile && (
                    <View style={styles.nextCardContainer}>
                        <Animated.View style={[styles.animatedCard, nextCardStyle]}>
                            {renderItem({ item: nextProfile })}
                        </Animated.View>
                    </View>
                )}

                {currentProfile && (
                    <PanGestureHandler onGestureEvent={gestureHandler}>
                        <Animated.View style={[styles.animatedCard, cardStyle]}>
                            <Animated.Image
                                source={Like}
                                style={[styles.like, { left: 10 }, likeStyle]}
                                resizeMode="contain"
                            />
                            <Animated.Image
                                source={Nope}
                                style={[styles.like, { right: 10 }, nopeStyle]}
                                resizeMode="contain"
                            />
                            {renderItem({ item: currentProfile })}
                        </Animated.View>
                    </PanGestureHandler>
                )}
            </View>
            <View style={styles.Botones}>
                    <Pressable
                        onPress={() => {
                            translateX.value = withSpring(
                                hiddenTranslateX * Math.sign(-1),
                                {},
                                () => runOnJS(setCurrentIndex)(currentIndex + 1),
                            );
                            runOnJS(onSwipeLeft)(currentProfile)
                        }}
                        style={({ pressed }) => [
                            styles.HomeButton,
                            pressed && styles.HomeButton2
                        ]}
                    >
                        <Icon name='thumbs-down' style={[styles.icons, styles.DislikeButton]} />
                        <Text style={styles.HomeButtonText}>No me gusta</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            translateX.value = withSpring(
                                hiddenTranslateX * Math.sign(1),
                                {},
                                () => runOnJS(setCurrentIndex)(currentIndex + 1),
                            );
                            runOnJS(onSwipeRight)(currentProfile)
                        }}
                        style={({ pressed }) => [
                            styles.HomeButton,
                            pressed && styles.HomeButton2
                        ]}
                    >
                        <Icon name='thumbs-up' style={[styles.icons, styles.likeButton]} />
                        <Text style={styles.HomeButtonText}>Me gusta</Text>
                    </Pressable>
                </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    root: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '85%',
        margin: 0,
    },
    animatedCard: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextCardContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        top: 0
    },
    like: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: 100,
        zIndex: 2,
    },
    Botones: {
        height: 100,
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
    },
    HomeButton: {
        height: 100,
        width: 100,
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
        elevation: 20,
    },
    HomeButton2: {
        elevation: 2
    },
    likeButton: {
        tintColor: '#B3E41D'
    },  
    DislikeButton: {
        tintColor: '#EE4125'
    },  
    HomeButtonText: {
        color: '#2A3330',
        fontSize: 15
    },
    icons: {
        height: 25,
        width: 25,
        tintColor: "#2A3330",
    },
});

export default AnimatedStack;