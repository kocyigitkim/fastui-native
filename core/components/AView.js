import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Ripple from 'react-native-material-ripple';
import { BoxShadow } from 'react-native-shadow'

export default class AView extends Component {
    state = {
        width: 0,
        height: 0,
        x: 0,
        y: 0
    }
    onLayout(event) {
        this.setState(event.nativeEvent.layout);
    }
    render() {
        const style = this.props.style;
        const shadowOpts = {
            border: 10,
            radius: (style && style.borderRadius + 2) || 10,
            x: 0,
            y: 0,
            width: Math.max(1, this.state.width),
            height: Math.max(1, this.state.height),
            opacity: 0.1,
            style: {
                position: 'absolute',
                left: this.state.x,
                top: this.state.y
            },
            ...(this.props.shadow || {})
        };
        const viewOpts = { ...this.props };
        const ripple = this.props.ripple;
        if (ripple) {
            return (
                <View>
                    {this.state.width > 0 && this.state.height > 0 && (<BoxShadow setting={shadowOpts}></BoxShadow>)}
                    <View {...viewOpts} onLayout={this.onLayout.bind(this)}>
                        {this.props.children}
                    </View>
                    {ripple && <Ripple onPress={this.props.onPress} rippleSize={(this.state.height + 10) * 5} rippleDuration={600} {...((ripple == true ? {} : ripple) || {})} style={{ position: 'absolute', left: this.state.x, top: this.state.y, width: this.state.width, height: this.state.height, borderRadius: shadowOpts.radius, zIndex: 1, overflow: 'hidden' }}></Ripple>}
                </View>
            )
        }
        else {
            return <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View>
                    {this.state.width > 0 && this.state.height > 0 && (<BoxShadow setting={shadowOpts}></BoxShadow>)}
                    <View {...viewOpts} onLayout={this.onLayout.bind(this)}>
                        {this.props.children}
                    </View>
                </View>
            </TouchableWithoutFeedback>;
        }
    }
}
