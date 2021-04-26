import React, { Component } from "react";
import { Text, View } from "react-native";
import Application from "./core/Application";
import ApplicationBar from "./core/components/ApplicationBar";
import { Navigation } from "./core/providers/NavigationProvider";

class HomeComponent extends Component {
  render() {
    return <View>
      <ApplicationBar statusbar title="Form1"></ApplicationBar>
      
    </View>
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    Navigation.registerPath("home", HomeComponent);
    Navigation.registerPath("page1", (props) => { return (<View><Text>ABCDEFG</Text></View>) });
  }
  componentDidMount() {
    Navigation.replace("home");
  }
  render() {
    return (
      <Application>
      </Application>
    );
  }
}
