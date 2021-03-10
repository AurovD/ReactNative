import React from 'react';
import {StyleSheet, View, Button, Text, Image, FlatList} from 'react-native';




const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#7EC5C1',
    alignItems: 'center',
    justifyContent: 'center',
      paddingTop: 30,
  },
    title: {
        textAlign: "right",
        fontSize: 40,
        color: "#FFF",
        marginBottom: 20,

    },
    item: {
      width: 330,
        height: 60,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        position: "relative"
    },
    img: {
      height: 60,
        width: 60
    },
    titles: {
      paddingTop: 5,
        paddingBottom: 5,
        justifyContent: "space-between"
    },
    level: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
      color: "#fff"
    },
    btn: {
      position: "absolute",
        right: 20,
        backgroundColor: "#f0c869",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 5,
    }
});

const Start = ({navigation, route}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MENU</Text>
            <FlatList
                data={[
                    {
                        title: 'Fried eggs with baсon',
                        img: require(`../assets/eggs.png`),
                        img2: '../assets/eggs.png',
                        time: "Breakfast",
                        level: "2+Year's Experience",
                        color: "#7C89FF",
                        ingredients: {
                            "Eggs": "2 pieces",
                            "Bacon": "100 pounds",
                            "Salt": "2 teaspoons"
                        },
                        timer: "30 mins",
                        count: "2 people"
                    },
                    {
                        title: 'Shrimp salad',
                        img: require('../assets/pawns.png'),
                        img2: '../assets/pawns.png',
                        time: "Dessert",
                        level: "Beginner",
                        color: "#24F33C",
                        ingredients: {
                            "Prawns": "200 pounds",
                            "Tomato": "150 pounds",
                            "Salt": "3 teaspoons"
                        },
                        timer: "20 mins",
                        count: "3 people"
                    },
                    {
                        title: 'Miso Soup',
                        img: require('../assets/mishu.png'),
                        img2: '../assets/mishu.png',
                        time: "Lunch",
                        level: "Beginner",
                        color: "#24F33C",
                        ingredients:
                            {"Fish": "200 pounds",
                                "Water": "200 liters",
                                "Salt": "4 teaspoons"}
                        ,
                        timer: "60 mins",
                        count: "4 people"
                    },
                    {
                        title: 'Fried eggs with baсon',
                        img: require(`../assets/eggs.png`),
                        img2: '../assets/eggs.png',
                        time: "Breakfast",
                        level: "2+Year's Experience",
                        color: "#7C89FF",
                        ingredients: {
                            "Eggs": "2 pieces",
                            "Bacon": "100 pounds",
                            "Salt": "2 teaspoons"
                        },
                        timer: "30 mins",
                        count: "2 people"
                    },
                    {
                        title: 'Shrimp salad',
                        img: require('../assets/pawns.png'),
                        img2: '../assets/pawns.png',
                        time: "Dessert",
                        level: "Beginner",
                        color: "#24F33C",
                        ingredients: {
                            "Prawns": "200 pounds",
                            "Tomato": "150 pounds",
                            "Salt": "3 teaspoons"
                        },
                        timer: "20 mins",
                        count: "3 people"
                    },
                    {
                        title: 'Miso Soup',
                        img: require('../assets/mishu.png'),
                        img2: '../assets/mishu.png',
                        time: "Lunch",
                        level: "Beginner",
                        color: "#24F33C",
                        ingredients:
                            {"Fish": "200 pounds",
                                "Water": "200 liters",
                                "Salt": "4 teaspoons"}
                        ,
                        timer: "60 mins",
                        count: "4 people"
                    },
                    {
                        title: 'Fried eggs with baсon',
                        img: require(`../assets/eggs.png`),
                        img2: '../assets/eggs.png',
                        time: "Breakfast",
                        level: "2+Year's Experience",
                        color: "#7C89FF",
                        ingredients: {
                            "Eggs": "2 pieces",
                            "Bacon": "100 pounds",
                            "Salt": "2 teaspoons"
                        },
                        timer: "30 mins",
                        count: "2 people"
                    },
                    {
                        title: 'Shrimp salad',
                        img: require('../assets/pawns.png'),
                        img2: '../assets/pawns.png',
                        time: "Dessert",
                        level: "Beginner",
                        color: "#24F33C",
                        ingredients: {
                            "Prawns": "200 pounds",
                            "Tomato": "150 pounds",
                            "Salt": "3 teaspoons"
                        },
                        timer: "20 mins",
                        count: "3 people"
                    },
                    {
                        title: 'Miso Soup',
                        img: require('../assets/mishu.png'),
                        img2: '../assets/mishu.png',
                        time: "Lunch",
                        level: "Beginner",
                        color: "#24F33C",
                        ingredients:
                            {"Fish": "200 pounds",
                                "Water": "200 liters",
                                "Salt": "4 teaspoons"}
                        ,
                        timer: "60 mins",
                        count: "4 people"
                    },
                    {
                        title: 'Fried eggs with baсon',
                        img: require(`../assets/eggs.png`),
                        img2: '../assets/eggs.png',
                        time: "Breakfast",
                        level: "2+Year's Experience",
                        color: "#7C89FF",
                        ingredients: {
                            "Eggs": "2 pieces",
                            "Bacon": "100 pounds",
                            "Salt": "2 teaspoons"
                        },
                        timer: "30 mins",
                        count: "2 people"
                    },
                    {
                        title: 'Shrimp salad',
                        img: require('../assets/pawns.png'),
                        img2: '../assets/pawns.png',
                        time: "Dessert",
                        level: "Beginner",
                        color: "#24F33C",
                        ingredients: {
                            "Prawns": "200 pounds",
                            "Tomato": "150 pounds",
                            "Salt": "3 teaspoons"
                        },
                        timer: "20 mins",
                        count: "3 people"
                    },
                    {
                        title: 'Miso Soup',
                        img: require('../assets/mishu.png'),
                        img2: '../assets/mishu.png',
                        time: "Lunch",
                        level: "Beginner",
                        color: "#24F33C",
                        ingredients:
                            {"Fish": "200 pounds",
                                "Water": "200 liters",
                                "Salt": "4 teaspoons"}
                        ,
                        timer: "60 mins",
                        count: "4 people"
                    },

                ]}
                renderItem={({item}) =>
                    <View style={styles.item}>
                        <Image style={styles.img} source={item.img}></Image>
                        <View style={styles.titles}>
                            <Text style={styles.text}>{item.title}</Text>
                            <Text style={styles.text}>{item.time}</Text>
                            <View style={styles.level}>
                                <View style={{width: 10, height: 10, backgroundColor: `${item.color}`, marginRight: 10}}></View>
                                <Text style={styles.text}>{item.level}</Text>
                            </View>
                        </View>
                        <View style={styles.btn}>
                            <Button title={"Recipe"} onPress={() => navigation.navigate("DISH", {
                                title: item.title,
                                img: item.img,
                                img2: item.img2,
                                time: item.time,
                                level: item.level,
                                color: item.color,
                                ingredients: item.ingredients,
                                timer: item.timer,
                                count: item.count
                            })}></Button>
                        </View>
                    </View>}>
            </FlatList>
        </View>
    )
};
export default Start;