import React from 'react';
import {StyleSheet, View, Button, Text, Image, Dimensions} from 'react-native';

const w = Dimensions.get("window");
const wHeight = w.height;
const wWidth = w.width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7EC5C1',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: "relative",
        paddingBottom: 80,
        paddingRight: 50,
    },
    img: {
        position: "absolute",
        left: 0,
        bottom: 200,
        width: 400,
        height: 400,
        transform: [{ rotate: "0deg" }]
    },
    title: {
        textAlign: "right",
        fontSize: 60,
        color: "#eb573b"
    },
    button: {
        backgroundColor: "#f0c869",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 5,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#fff",
    }
});

const Start = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('../assets/start.png')}></Image>
            <View>
                <Text style={styles.title}>HEALTHY</Text>
                <Text style={[styles.title, {color: "#fff"}]}>FOOD</Text>
            </View>
            <View style={styles.button}>
                <Button title={"Start On"} onPress={() => navigation.navigate("MENU")}></Button>
            </View>
        </View>
    )
};
export default Start;