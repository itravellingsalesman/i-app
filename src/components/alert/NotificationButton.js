import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default (props) => {
    return(
        <View style={styles.box}>
            {/* <View style={{marginRight: 10,}}>
                <Icon size={30} color='#fff' name={props.iconName} type={props.iconType != null ? props.iconType : ' '}/>
            </View>
            <TouchableHighlight underlayColor={'rgb(32,0,32)'} onPress={() => props.navigation.navigate(props.rota)}>
                <Text style={styles.text}>{props.titulo}</Text>
            </TouchableHighlight> */}
        </View>
    )
};

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    width: 300,
    height: 300,
    backgroundColor: '#ff000000'
  }
})
