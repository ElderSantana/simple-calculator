import React , { Component} from 'react';
import {  StyleSheet , View, Text } from 'react-native';

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 40,
        color : '#fff',
    }
})

export default class Display extends Component{
    render(){
        return(
            <View style={styles.display}>
                <Text textAlign={'right'} style={styles.displayValue} adjustsFontSizeToFit={true} numberOfLines={5}>{this.props.value}</Text>
            </View>
        );
    }
}0