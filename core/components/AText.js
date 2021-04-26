import React, { Component } from 'react'
import { Text, View } from 'react-native'

const fontDefinitions = {
    largetitle: { size: 34, family: "OpenSans" },
    title1: { size: 28, family: "OpenSans" },
    title2: { size: 22, family: "OpenSans" },
    title3: { size: 20, family: "OpenSans" },
    text: { size: 16, family: "OpenSans" },
    headline: { size: 17, family: "OpenSans-SemiBold" },
    callout: { size: 16, family: "OpenSans" },
    subhead: { size: 15, family: "OpenSans" },
    footnote: { size: 13, family: "OpenSans" },
    caption2: { size: 12, family: "OpenSans" },
    caption1: { size: 11, family: "OpenSans" },
    h1: { size: 25, family: "OpenSans" },
    h2: { size: 30, family: "OpenSans" },
    h3: { size: 25, family: "OpenSans" },
    h4: { size: 21, family: "OpenSans" },
    h5: { size: 15, family: "OpenSans" },
    h6: { size: 13, family: "OpenSans" }
};

export default class AText extends Component {
    render() {
        const font = fontDefinitions[this.props.size || "text"];

        return (
            <Text {...this.props} style={{ ...this.props.style, fontFamily: ((this.props.style && this.props.style.fontFamily) || font.family), fontSize: font.size }}>
                {this.props.children}
            </Text>
        )
    }
}
