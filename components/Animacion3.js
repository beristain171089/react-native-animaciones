import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';;

const Animacion3 = () => {

    const [animacion] = useState(new Animated.Value(14));

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 40,//valor al que llega
            duration: 500, //tiempo en llegar
            useNativeDriver: false
        }
        ).start();
    }, []);

    return (
        <View>
            <Animated.Text
                style={[styles.texto, { fontSize: animacion }]}
            >   Animacion 1
                </Animated.Text>
        </View >
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Animacion3;