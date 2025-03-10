import React, { userState, useState } from "react"; //Import React and useState hook
import { StyleSheet, View, Button, FlatList, Image } from "react-native"; //Import React native components

//Importing components of the project into the app component
import TodoItem from "./comoponents/TodoItem";
import TodoInput from "./components/TodoInput";
import DisplayImage from "./components.DisplayImage";
import Header from "./components/Header";

export default function App() {

  //Defining the initial states for the data to be rendered
  const [task, setTasks] = useState([]);
  const [addTasks, setAddTasks] = useState(false);
  
  //adds tasks to the list
  const addTaskHandler = taskTitle => {

    setTasks(currentTasks => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle}
    ]);

    setAddTasks(false);
  };

  //deletes tasks from the list
  const deleteTaskHandler = taskId => {

    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId);
    });
  };

  //cancels adding tasks to the list
  const canceltaskAdditionHandler = () => {
    setAddTasks(false);
  };


  //Return the components while passing props to each component
  return (
    <View>
      <Header title="To-Do App"></Header>
      <View style={StyleSheet.screen}>
        <Button title="Add New Task" onPress={() => setAddTasks(true)}></Button>
        <TodoInput
          visible={addTasks}
          onAddTask={addTaskHandler}
          onCancel={canceltaskAdditionHandler}
        />
      </View>
      <DisplayImage taskStatus={tasks} />
      <View style={StyleSheet.screenList}>
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={tasks}
          renderItem={itemData => (
            <TodoItem 
              title={itemData.item.value}
              onDelete={deleteTaskHandler}
              id={itemData.item.id}
            />
          )}>
        </FlatList>
      </View>
    </View>
  );//Return the components while passing props to each component
}

//Add styling to components using StyleSheet
const styles = StyleSheet.create({

  screen: {
    paddingTop: 70,
    paddingHorizontal: 70
  },

  screenlist: {
    marginLeft: 20,
    marginRight: 20
  }
});

/*We have completed the development of our To-do mobile application, 
and it should be working as illustrated below. 
Let’s go ahead and summarize all that we have done to create this mobile application*/ 