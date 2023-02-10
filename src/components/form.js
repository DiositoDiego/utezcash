import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props){
    console.log(props);
    
    const {setCantidad, setInteres, setPlazos} = props;

    return(
        <View style={estilito.viewForm}>
            <View style={estilito.viewInputs}>
                <TextInput 
                    placeholder="cantidad a pedir"
                    keyboardType="numeric"
                    onChange={(value) => setCantidad(value.nativeEvent.text)}
                    style={[estilito.inputs]}
                />
                <TextInput
                    placeholder="Interes %"
                    keyboardType="numeric"
                    onChange={(value) => setInteres(value.nativeEvent.text)}
                    style={[estilito.inputs, {width: "40%", marginLeft: 5}]}
                />
            </View>
            <RNPickerSelect
            style={selectStyle}
            useNativeAndroidPickerStyle={false}
            placeholder={{
                label: "Selecciona los meses",
                value: null
            }}
            onValueChange={(value) => setPlazos(value)}
            items={[
                { label: '3 Meses', value: '3' },
                { label: '6 Meses', value: '6' },
                { label: '12 Meses', value: '12' },
                { label: '24 Meses', value: '24' },
            ]}/>
        </View>
    )
}

const estilito = StyleSheet.create({
    viewForm:{
        bottom: 0,
        width: "85%",
        paddingHorizontal: 40,
        backgroundColor: colors.C_PRIMARIO_OSCURO,
        borderRadius: 30,
        height: 200,
        justifyContent: "center",
    },
    viewInputs:{
        flexDirection: "row",
    },
    inputs:{
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        width: "60%",
        marginLeft: -5,
        marginRight: 4,
        color: "black",
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
    },
});

const selectStyle = StyleSheet.create({
    inputAndroid: {
        backgroundColor: "white",
        marginTop: 10,
        fontSize: 16,
        padding: 10,
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius: 6,
        paddingRight: 25,
        color: "black",
    },
    inputIOS: {
        backgroundColor: "white",
        marginTop: 10,
        fontSize: 16,
        padding: 10,
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius: 6,
        paddingRight: 25,
        color: "black",
    }
});