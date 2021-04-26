import React, { Component } from 'react'
import { Button, Platform, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { Navigation } from '../providers/NavigationProvider';
import {  CurrentTheme } from '../providers/ThemeProvider';
import AView from './AView';
import AText from './AText';

export default class ApplicationBar extends Component {
    render() {
        const appbarHeight = Platform.OS == "android" ? 86 : 86;
        const appNameHeight = Platform.OS == "android" ? 56 : 56;
        const title = this.props.title;
        const theme = CurrentTheme();
        const backgroundColor = this.props.backgroundColor || theme.AppBar.Background;
        const foregroundColor = this.props.foregroundColor || theme.AppBar.Foreground;
        const shadow = this.props.shadow || theme.AppBar.Shadow;
        const statusbar = this.props.statusbar;
        return (
            <AView shadow={shadow} style={{ height: appbarHeight, justifyContent: 'flex-end', backgroundColor: backgroundColor, borderRadius: 0 }}>
            {statusbar && <StatusBar style={theme.barStyle}></StatusBar>}
                <View style={{ flexDirection: 'row', alignItems: 'center', height: appNameHeight }}>
                    {this.props.left || (<></>)}
                    <AText size="h4" style={{flex: 1, marginLeft: 10, marginRight: 10, color: foregroundColor}}>{title}</AText>
                    {this.props.right || (<></>)}
                </View>
            </AView>
        )
    }
}
