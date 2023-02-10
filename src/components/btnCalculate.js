import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors';

export default function btnCalculate(props) {
  console.log(props);
  return (
    <View style={styles.viewCalculate}>
      <TouchableOpacity style={styles.touchable}
      onPress={props.fnCalc}
      >
        <Text style={styles.btnTitle}>Calcular</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnTitle:{
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  touchable:{
    padding: 15,
    borderRadius: 18,
    width: '80%',
    backgroundColor: colors.C_PRIMARIO_OSCURO,
  },

  viewCalculate:{
    height: 100,
    backgroundColor: colors.C_PRIMARIO,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bottom: 0,
    position: 'absolute',
  }
});