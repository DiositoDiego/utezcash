import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from './src/utils/colors'
import Form from './src/components/form'
import { useState, useEffect } from "react"
import BtnCalculate from './src/components/btnCalculate'
import Results from './src/components/Results';

export default function App() {
  const [cantidad, setCantidad] = useState(null);
  const [interes, setInteres] = useState(null);
  const [plazos, setPlazos] = useState(null);
  const [prestamo, setPrestamo] = useState(null);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if(cantidad && interes && plazos){
      calcular();
    } else {
      reset();
    }
  }, [cantidad, interes, plazos])

  const reset = () => {
    setErrors("");
  }

  const calcular = () => {
    if(!cantidad) {
      setErrors("Ingrese la cantidad");
    } else if(!interes) {
      setErrors("Ingrese el interes");
    } else if(!plazos) {
      setErrors("Ingrese los plazos");
    } else {
      const inte = (interes / 100);
      const pagos = (cantidad / ((1 - Math.pow(inte + 1, -plazos)) / inte));
      setPrestamo({
        pagoMes: pagos.toFixed(2),
        pagoTotal: (pagos * plazos).toFixed(2),
      });
      console.log(prestamo);
      reset();
    }
    
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
          setPlazos={setPlazos}
        />
      </SafeAreaView>
        <Results errors={errors} cantidad={cantidad} interes={interes} plazos={plazos} prestamo={prestamo}/>
        <BtnCalculate fnCalc={calcular}/>
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
