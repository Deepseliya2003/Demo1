import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

export default function Myscreen() {
    const reviews = [
        { product: 1, rating: 1 },
        { product: 2, rating: 1 },
        { product: 3, rating: 5 },
        { product: 4, rating: 2 },
        { product: 5, rating: 5 }
    ];

    const calculateReviewsAverage = () => {
        const total = reviews.reduce((acc, review) => acc + review.rating, 0);
        const average = total / reviews.length;
        return average > 0 ? average.toFixed(1) : '0';
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Average Rating:</Text>
            <Rating
                type='star'
                ratingCount={5}
                imageSize={24}
                readonly
                startingValue={parseFloat(calculateReviewsAverage())}
            />
            <Text style={styles.averageRating}>
                {calculateReviewsAverage()} / 5
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    averageRating: {
        fontSize: 16,
        marginTop: 10,
    },
});
