import React from 'react';
import {StyleSheet, View, Button, Text, Image, Dimensions} from 'react-native';

const w = Dimensions.get("window");
const wHeight = w.height;
const wWidth = w.width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: "relative",
        paddingBottom: 80,
        paddingRight: 50,
    },
    img: {
        position: "absolute",
        left: wWidth / 3,
        bottom: 200,
        width: 400,
        height: 400,
    },
    title: {
        textAlign: "right",
        fontSize: 60,
        color: "#FF8C01"
    },
    button: {
        backgroundColor: "#63A22E",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 5,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#FF8C01"
    }
});

const Main = ({navigation, route}) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{uri: "https://sneakers4funds.com/wp-content/uploads/2019/10/healthy-food-1024x1024.jpg"}}></Image>
            <View>
                <Text style={styles.title}>HEALTHY</Text>
                <Text style={styles.title}>FOOD</Text>
            </View>
            <View style={styles.button}>
                <Button title={"Start On"} onPress={() => navigation.navigate("MAIN")}></Button>
            </View>
        </View>
    )
};
export default Main;