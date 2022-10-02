import React from 'react';
import { View } from 'react-native';

const Button = ({
    children, style, bgColor, textColor, fontSize,
}) => (
    <View style={style}>
        <Text style={textStyle}></Text>
    </View>
);

const textStyle = StyleSheet.create({
    bgColor: bgColor,
    color: textColor,
    fontSize: fontSize,
})

export default Button;
