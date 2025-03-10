import React, { useState } from "react"; //Import React and useState hook
import{ View, Button, StyleSheet, Modal, Alert, Image} from "react-native"; //Import React native components
import Header from "./Header"; //Import Header component

const TodoInput = props => {

    //Define a state, enteredTask,  to add a task to our application
    const [enteredTask, setEnteredTask] = userState("");

    //sets enteredTask state to enteredText
    const TodoInputHandler = enteredText => {
        setEnteredTask(enteredText);
    };

    //clears the text field after adding a task
    const addTaskHandler = () => {
        props.onAddTask(enteredTask);
        setEnteredTask("");
    };

    //checks if the user has entered the task or left the field blank
    const checkInput = enteredTask => {
        if(enteredTask.length > 0) addTaskHandler();
        else{
            Alert.alert("Error", "Please enter a Task", [{text: "OK"}], {
                cancelable: false
            });
        }
    };

    //Return a modal (react native component) that contains the input field and buttons
    return (
        <Modal 

            visible={props.visible} animationType="slide">
            <Header title="To-Do App"></Header>

            <View style={styles.inputContainer}>

                <TextInput 
                    placeholder="Task"
                    style={styles.input}
                    onChangeText={TodoInputHandler}
                    value={enteredTask}
                />

                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={props.onCancel}>
                        </Button>
                    </View>

                    <View style = {styles.button}>
                        <Button 
                            title="ADD"
                            color="green"
                            onPress={() => checkInput(enteredTask)}
                        />
                    </View>

                </View>

            </View>

        </Modal>
    );//Return a modal (react native component) that contains the input field and buttons
};

//Add styles using StyleSheet to the components
const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%"
    },

    button: {
        width: "40%"
    }
});

//Export the component
export default TodoInput;