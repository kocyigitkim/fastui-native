import React, { Component } from "react";
import FastState from 'faststate-rn';

export class ThemeProviderState extends FastState{
    theme = "default";
    themes = {};
    define(name, definition){
        this.themes[name] = definition;
    }
    set(name){
        if(this.themes[name]){
            this.theme = name;
        }
    }
}
export const ApplicationTheme = new ThemeProviderState();

export const CurrentTheme = ()=>{
    return ApplicationTheme.themes[ApplicationTheme.theme];
};


export default class ThemeProvider extends Component{
    componentDidMount(){
        ApplicationTheme.register(this);
    }
    render(){
        return (<>
            {this.props.children}
        </>);
    }
}