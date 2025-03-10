import React from "react";//Import React
import { Stylesheet, View, Text } from "react-native";//Import React Native components

//Return Header text along with style
const Header = props => {
    return (
        <view style = {Stylesheet.header}></view>
    );
};

//Add style to create the Header using StyleSheet
const styles = StyleSheet.crete({

    header: {
        width: "100%",
        height: 100,
        paddingTop: 40,
        backgroundColor: "purple",
        alignitems: "center",
        justifyContent: "center",
    },

    headerTitle: {
        color: "white",
        fontSize: 20
    }
});

export default Header;//Export the component