import React from "react";
import { Image, StyleSheet } from 'react-native';

const DisplayImage = props => {
    
    // display the image only when there is no task
    if(props.taksStatus.length < 1){
        return (
            <Image style={styles.image} source={require("../assets/favicon.png")}/>
        );
    }else{
        return null;
    }
};

// Add style using StyleSheet to define the size and alignment of the image
const styles = StyleSheet.create({

    image: {
        width: 250,
        height: 250,
        margin: 80,
        marginTop: 250
    }
});

export default DisplayImage;