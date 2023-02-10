import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from './src/utils/colors'
import Form from './src/components/form'
import { useState } from "react"
import BtnCalculate from './src/components/btnCalculate'

export default function App() {
  const [cantidad, setCantidad] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);

  const calcular = () => {
    console.log(`cant: ${cantidad}\ninteres: ${interes}\nmeses: ${meses}`);
  }

  return (
    <View style={{height:'100%'}}>
  {/* <StatusBar barStyle={'light-content'}/> */}
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.comodin}></View>
        <Text style={styles.titleApp}>UTEZ CASH</Text>
        <Form
          setCantidad={setCantidad}
          setInteres={setInteres}
          setMeses={setMeses}
        />
      </SafeAreaView>
        <Text style={styles.resultados}>Resultados</Text>
        <BtnCalculate/>
    </View>
  );
}

const styles = StyleSheet.create({
  comodin: {
    backgroundColor: colors.C_PRIMARIO,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
    height: 200,
    
  },
  safeArea: {
    height: 290,
    alignItems: "center",
  },
  titleApp: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: 15,

  },
});
