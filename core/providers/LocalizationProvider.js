import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LocalizationState from 'faststate-rn/states/LocalizationState';

export const Language = new LocalizationState();

export default class LocalizationProvider extends Component {
    componentDidMount(){
        Language.register(this);
        Language.set("en");
    }
    render() {
        return (
            <>{this.props.children}</>
        )
    }
}
