# What is React Native?

React Native is a JavaScript framework that is used to develop mobile applications for iOS and Android. It lets you build cross-compatible mobile applications using only JavaScript, and you don’t have to worry about learning platform-specific application development languages such as Kotlin for Android or Swift for iOS.

React Native applications are real mobile applications and not just web applets. Facebook released the first version of React Native in March 2015.

# View, State, Props, and Style

# View

The View is an elemental component of React Native for building a user interface.

- It is a container that supports layout with flexbox, style, touch handling, and accessibility controls.
- It maps directly to the native view similar to whatever platform on React Native app is running on.

# Two types of data that control a component in React Native: props and state.

# State

For data that is going to change in the future, we use state. The state contains the data or information about the component. It determines the behavior of the component and how it will render.

# Props

Props is short for Properties. The components can be customized at the time of creation using different parameters, and those parameters are known as props. Props are passed from one container to another as a means of passing data between them.

# Style

React Native uses JavaScript for styling the application. All core components use a prop named “style.” The style names and values are similar to CSS that works for the web. To style our components, we can either use inline styling or use StyleSheet, which is a React Native component.

# React Native Prerequisites

Here are some ideas and concepts that you should be familiar with before starting to work on React Native:

- You should be familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes
- You should have a basic knowledge of JavaScript
- You should have some familiarity with HTML and CSS
  Finally, if you have worked with React before, you already know a lot about React Native, and there should be absolutely no problem in working with it

# Create a React Native Application: To-do App

We are going to make our mobile application, and we will call it To-do. This application will allow us to add and manage tasks in the application.

# Set-Up the Development Environment

“Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript codebase.” - Expo documentation: https://docs.expo.dev/versions/latest/

- Navigate to: https://expo.io/learn.
- Install nodeJS: <npm install node>
- Install expo cli: <npm install Expo-cli --global>
- Create your project: <expo npx create-expo-app --task-app-client>
- Next, choose blank from this screen for a blank application while including Expo workflow features.
- Enter the name of your application, and press Enter to continue setting up the application.
- To start the application, you can navigate to the newly created project folder and type “npm start.” To stop the application, press Ctrl + C.
- The development server will start running, and a new tab will open in your web browser with the Expo manager screen.

# There are two ways you can now preview the application:

You can either run the app on an Android emulator, which you can get by installing Android Studio on the computer.
Or, you can install the Expo application on your phone and scan the QR code to run the application on the phone. The To-do app will load and will update as you make changes in the code.
Install a text editor of your choice. We are using the Visual Studio Code in this react native tutorial. Still, you can also use other editors like Atom and Sublime Text if you are more comfortable with those.

Now we have all the tools we need to create a new React Native application. We have already created one, the To-do app. So let’s get started by creating the components of our mobile application.

# Create Components of the App

Similar to React, everything here is a component. Everything you see here is a separate component that has been combined to create a complete mobile application. The following are the components that we will be creating for this application:

# App

This component will act as a container for all the other components to come together and provide a complete application

# Header

As the name suggests, this component will be the header of the mobile application

# Display Image

This component is used here to display the image on the main screen

# To-do Item

Each task added is a separate component

# To-do Input

This component is used to add tasks to the application
It is very important to visualize a React Native application in terms of components before starting to work on it, and that’s precisely what we are doing here.

# Let’s now start with the development of To-do App:

- Open the project folder in the text editor, and inside the src folder, create a components folder into which we will add all our components.

# Summary of the Steps:

1. Set-up an environment for the development of the application
2. Install the Expo app on the mobile device to preview the application in real-time
3. Visualize the application in terms of components and then maintain the project structure accordingly in the text editor
4. Add all the components to the project
5. Make sure each component works as expected
6. Enjoy the result and feel free to tweak the design and functionality as you want
   We have now created a fully functional mobile application using React Native that works and looks great! We hope you were able to follow all of the instructions easily and can sit back and bask in your accomplishment!
