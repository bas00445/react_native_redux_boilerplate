import React, { Component } from 'react';
import {
  View,
} from 'react-native';

// Redux Store
import { Provider } from "react-redux";
import { store as appStore } from './src/_helpers'

// Routing
import { Router, Stack, Scene, Drawer, Tabs } from "react-native-router-flux";

// Scenes
import Home from "./src/pages/home";
import CreateTodo from "./src/pages/create_todo";

// Components
import SideMenu from "./src/components/side-menu";
import TabBar from "./src/components/tab-bar";
import IconButton from "./src/components/icon-button";

// Theme
import { colors } from "./src/theme";
import { Actions } from "react-native-router-flux";


class App extends Component {
  state = {}
  render() {
    return (
      <Provider store={appStore}>
        <Router >
          <Drawer
            key="Root"
            drawerPosition="left"
            headerMode="float"
            drawerWidth={200}
            contentComponent={SideMenu}
            titleStyle={{ color: colors.whiteB, fontFamily: 'Kanit-SemiBold', fontWeight: 'normal' }}
            renderLeftButton={() =>
              <IconButton size="sm"
                onPress={() => Actions.drawerOpen()}
                imgPath={require('./src/assets/icons/hamburger-light.png')}
              />}
            navigationBarStyle={{ backgroundColor: colors.greenD }}
            backButtonTintColor={colors.whiteA}
            rightButtonTintColor={colors.whiteB}
          >
            <Scene
              title="Create Todo"
              key="create_todo"
              component={CreateTodo}
            />
            <Scene
              title="Home"
              // drawerLockMode="locked-closed"
              // renderRightButton={() => <View />}
              // back={true} 
              key="home"
              component={Home}
            // renderBackButton={() =>
            //   <IconButton onPress={() => { Actions.pop() }}
            //     imgPath={require('./src/assets/icons/back.png')} />}
            />



          </Drawer>
        </Router>
      </Provider >
    );
  }
}

export default App;