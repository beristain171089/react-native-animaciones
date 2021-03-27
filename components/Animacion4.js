import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';;

const Animacion4 = () => {

    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 360,//valor al que llega
            duration: 500, //tiempo en llegar
            useNativeDriver: false
        }
        ).start();
    }, []);

    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }

    return (
        <View>
            <Animated.View
                style={[styles.texto, estiloAnimacion]}
            >
            </Animated.View>
        </View >
    );
}

const styles = StyleSheet.create({
    texto: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animacion4;