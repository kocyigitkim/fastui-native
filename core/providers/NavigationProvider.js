import React, { Component } from "react";
import { Text, View } from "react-native";
import FastState from "faststate-rn";

function createComponent(ComponentDefinition, props) {
  return <ComponentDefinition {...props}></ComponentDefinition>;
}

class NavigationState extends FastState {
  history = [];
  paths = {};
  push(path, props) {
    this.history = [
      {
        path,
        component: createComponent(this.paths[path], props),
        props,
      },
      ...this.history,
    ];
  }
  pop() {
    if (this.history.length > 0) this.history.splice(0, 1);
  }
  replace(path, props) {
    this.history = [
      { path, component: createComponent(this.paths[path], props), props },
    ];
  }
  reset() {
    this.history = [];
  }
  registerPath(path, component) {
    this.paths[path] = component;
  }
}

export const Navigation = new NavigationState();

export default class NavigationProvider extends Component {
  componentDidMount() {
    Navigation.register(this);
  }
  render() {
    const activePage = Navigation.history[0];

    return (
      <>
        {(activePage && activePage.component) || <></>}
        {this.props.children}
      </>
    );
  }
}
