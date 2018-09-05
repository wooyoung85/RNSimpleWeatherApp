import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import {Ionicons} from "@expo/vector-icons";
import PropsTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors:['#00C6FB', '#005BEA'],
        title:"그지같은 비오네",
        subtitle: "자세한 정보는 창 밖을 보세요~",
        icon: 'ios-rainy'
    },
    Sunny: {
        colors:['#FEF253', '#FF7300'],
        title:"겁나 맑음",
        subtitle: "자세한 정보는 창 밖을 보세요~",
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors:['#00ECBC', '#007ADF'],
        title:"천둥번개 우르릉쾅쾅",
        subtitle: "자세한 정보는 창 밖을 보세요~",
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors:['#D7D2CC', '#304352'],
        title:"구름 꼈어",
        subtitle: "자세한 정보는 창 밖을 보세요~",
        icon: 'ios-cloudy'
    },
    Snow: {
        colors:['#7DE2FC', '#B9B6E5'],
        title:"눈온다",
        subtitle: "자세한 정보는 창 밖을 보세요~",
        icon: 'ios-snow'
    }
}

function Weather({temp, weatherName, stationName}){
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}>

            <View style={styles.upper}>
                <Ionicons color="white" size= {144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}˚</Text>
                <Text style={styles.station}>{stationName} 관측소</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropsTypes = {
    temp: PropsTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp:
    {
        fontSize: 48,
        color: "white",
        marginBottom: 10
    },
    station:
    {
        fontSize: 30,
        color: "white",
        marginBottom: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        color: "white",
        marginBottom: 70
    }
})