import React, { Component } from "react";
import { Text, View } from "react-native";
import { Language } from "./providers/LocalizationProvider";
import NavigationProvider from "./providers/NavigationProvider";
import ThemeProvider, { ApplicationTheme, CurrentTheme } from "./providers/ThemeProvider";
import LightTheme from "./themes/LightTheme";
import * as Font from 'expo-font';
import { MaterialIndicator } from "react-native-indicators";

export default class Application extends Component {
    state = {
        loading: true
    }
    constructor(props) {
        super(props);

        Font.loadAsync({
            "OpenSans": require("../assets/fonts/OpenSans-Regular.ttf"),
            "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
            "OpenSans-BoldItalic": require("../assets/fonts/OpenSans-BoldItalic.ttf"),
            "OpenSans-ExtraBold": require("../assets/fonts/OpenSans-ExtraBold.ttf"),
            "OpenSans-ExtraBoldItalic": require("../assets/fonts/OpenSans-ExtraBoldItalic.ttf"),
            "OpenSans-Italic": require("../assets/fonts/OpenSans-Italic.ttf"),
            "OpenSans-Light": require("../assets/fonts/OpenSans-Light.ttf"),
            "OpenSans-LightItalic": require("../assets/fonts/OpenSans-LightItalic.ttf"),
            "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
            "OpenSans-SemiBoldItalic": require("../assets/fonts/OpenSans-SemiBoldItalic.ttf"),
        }).then((() => {
            this.setState({ loading: false });
        }).bind(this));

        ApplicationTheme.define("light", LightTheme);
        ApplicationTheme.set("light");
    }
    render() {
        const theme = CurrentTheme();
        if (this.state.loading) return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIndicator color={theme.Primary}></MaterialIndicator>
        </View>;

        return (
            <ThemeProvider>
                <NavigationProvider>
                    {this.props.children}
                </NavigationProvider>
            </ThemeProvider>
        );
    }
}
