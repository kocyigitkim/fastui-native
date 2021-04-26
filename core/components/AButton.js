import Color from 'color';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { CurrentTheme } from '../providers/ThemeProvider'
import AView from './AView'

export default class AButton extends Component {
    render() {
        const theme = CurrentTheme();
        const color = this.props.color || "Primary";
        const textcolor = this.props.textColor || "White";
        const background = theme[color];
        const foreground = theme[textcolor];
        const title = this.props.title;
        const backgroundHex = Color(background).lighten(0.15).hex();

        const style= this.props.style;
        return (
            <AView {...style} shadow={{color: backgroundHex, opacity: 0.2, y: 5}} onPress={this.props.onPress} ripple style={{ padding: 10, borderRadius: 6, backgroundColor: backgroundHex, justifyContent: 'center', alignItems: 'center', ...style }}>
                {this.props.children}
                {title && <Text style={{color: foreground}}>{title}</Text>}
            </AView>
        )
    }
}
