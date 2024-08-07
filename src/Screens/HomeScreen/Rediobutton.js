import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Rediobutton = ({ selected, onPress, label }) => (
    <TouchableOpacity style={styles.radioContainer} onPress={onPress}>
        <View style={styles.outerCircle}>
            {selected && <View style={styles.innerCircle} />}
        </View>
        <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    outerCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    innerCircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#000',
    },
    radioLabel: {
        fontSize: 16,
    },
});

export default Rediobutton;
