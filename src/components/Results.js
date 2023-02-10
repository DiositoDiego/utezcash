import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Results(props) {
    const {errors, cantidad, interes, plazos, prestamo} = props;
  return (
    <View style={styles.viewResults}>
        {prestamo && (
        <View style={styles.viewResults}>
            <Text style={styles.titleResumenes}>RESUMEN</Text>
        {/* <View style={styles.info}>
                <Text>Cantidad a pedir</Text>
                <Text>${cantidad}</Text>
            </View> */}
            <Informacion label={"Cantidad a pedir"} value={`$${cantidad}`}/>
            <Informacion label={"Interes"} value={`${interes}%`}/>
            <Informacion label={"Plazos"} value={`${plazos} meses`}/>
            <Informacion label={"Pago mensual"} value={`$${prestamo.pagoMes}`}/>
            <Informacion label={"Pago total"} value={`$${prestamo.pagoTotal}`}/>
        </View>
        )}
        
      <Text style={styles.errors}>{errors}</Text>
    </View>
  )
}

function Informacion(props){
    const {label, value} = props;
    return(
    <View style={styles.info}>
        <Text>{label}</Text>
        <Text>{value}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    errors: {
        color: "red",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        

    },
    viewResults: {
        marginTop: 10,
        marginHorizontal: 40,
    },
    viewResumen: {
        padding: 25,
    },
    titleResumenes: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold",
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    }
})