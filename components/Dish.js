import React from 'react';
import {StyleSheet, View, Button, Text, Image, FlatList, ScrollView} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7EC5C1',
        position: "relative",
        paddingBottom: 80,
        paddingRight: 50,
        paddingLeft: 50,
    },
    img: {
        width: 250,
        height: 250
    },
    time: {
        color: "#FFF",
        textAlign: "left",
        fontSize: 30
    },
    title: {
        color: "#FF7922",
        textAlign: "left",
        fontSize: 50
    },
    square: {
        width: 70,
        height: 70,
        backgroundColor: "#AFF4F9",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});

const Dish = ({navigation, route}) => {
    console.log(route, route.params.img2)
    return (
        <ScrollView style={[styles.container]}>
            <Image style={styles.img} source={require('../assets/pawns.png')}></Image>
            <View style={{alignItems: "flex-start"}}>
                <Text style={styles.time}>{route.params.time}</Text>
                <Text style={styles.title}>{route.params.title}</Text>
            </View>
            <View style={{flexDirection: "row", width: 100 + "%", justifyContent: "space-between", marginBottom: 30}}>
                <View style={[styles.square]}>
                    <Text>{route.params.timer}</Text>
                </View>
                <View style={[styles.square, {backgroundColor: "#fff"}]}>
                    <Text>{route.params.count}</Text>
                </View>
                <View style={[styles.square, {backgroundColor: route.params.color}]}>
                    <Text>{route.params.level}</Text>
                </View>
            </View>
            <View style={{alignItems: "flex-start", width: 100 + "%", marginBottom: 30}}>
                <Text style={{fontSize: 30, color: "#FF7922"}}>Ingredients</Text>
            </View>
            <Text>
                {
                    Object.entries(route.params.ingredients).map(([key, val], i) => (
                        <View key={i} style={{flexDirection: "row", width: 100 + "%", justifyContent: "space-between", marginBottom: 10}}>
                            <Text style={{fontSize: 20, color: "#444"}}>{key}</Text>
                            <Text style={{fontSize: 20, color: "#444"}}>{val}</Text>
                        </View>
                    ))
                }
                {/*route.params.ingredients*/}
            </Text>
        </ScrollView>
    )
};
export default Dish;