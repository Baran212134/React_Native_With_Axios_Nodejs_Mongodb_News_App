import React, { useEffect,useState,useLayoutEffect } from 'react'
import { Text, View,StyleSheet,FlatList,Button } from 'react-native'
import axios from 'axios';
import haberekle from './haberekle';

export default function butunhaberler(props) {
  const {navigation} = props;
  const [abc, setAbc] = useState([]);
  

  const [b0, setB0] = useState("------");
  const [i0, setİ0] = useState("------");
 
  const [b1, setB1] = useState("------");
  const [i1, setİ1] = useState("------");

  const [b2, setB2] = useState("------");
  const [i2, setİ2] = useState("------");

  const [b3, setB3] = useState("------");
  const [i3, setİ3] = useState("------");

  const [b4, setB4] = useState("------");
  const [i4, setİ4] = useState("------");

  const [b5, setB5] = useState("------");
  const [i5, setİ5] = useState("------");

  const [b6, setB6] = useState("------");
  const [i6, setİ6] = useState("------");

  const [b7, setB7] = useState("------");
  const [i7, setİ7] = useState("------");

  const [b8, setB8] = useState("------");
  const [i8, setİ8] = useState("------");

  const [b9, setB9] = useState("------");
  const [i9, setİ9] = useState("------");

  const [b10, setB10] = useState("------");
  const [i10, setİ10] = useState("------");
  useLayoutEffect(() => {
   axios
    .get('http://45.82.72.127:3000/get_butun_haberler')
    .then(data => {
    // console.log(data.data[2].haber_baslik_db)
    //  JSON.stringify(data.data[2].haber_baslik_db)

    try {
      setB0(JSON.stringify(data.data[0].haber_baslik_db))
      setİ0(JSON.stringify(data.data[0].haber_icerik_db))   
      
      setB1(JSON.stringify(data.data[1].haber_baslik_db))
      setİ1(JSON.stringify(data.data[1].haber_icerik_db))  

      setB2(JSON.stringify(data.data[2].haber_baslik_db))
      setİ2(JSON.stringify(data.data[2].haber_icerik_db))  

      setB3(JSON.stringify(data.data[3].haber_baslik_db))
      setİ3(JSON.stringify(data.data[3].haber_icerik_db))  

      setB4(JSON.stringify(data.data[4].haber_baslik_db))
      setİ4(JSON.stringify(data.data[4].haber_icerik_db))  

      setB5(JSON.stringify(data.data[5].haber_baslik_db))
      setİ5(JSON.stringify(data.data[5].haber_icerik_db))  

      setB6(JSON.stringify(data.data[6].haber_baslik_db))
      setİ6(JSON.stringify(data.data[6].haber_icerik_db))  

      setB7(JSON.stringify(data.data[7].haber_baslik_db))
      setİ7(JSON.stringify(data.data[7].haber_icerik_db))  

      setB8(JSON.stringify(data.data[8].haber_baslik_db))
      setİ8(JSON.stringify(data.data[8].haber_icerik_db))  

      setB9(JSON.stringify(data.data[9].haber_baslik_db))
      setİ9(JSON.stringify(data.data[9].haber_icerik_db))  

      setB10(JSON.stringify(data.data[10].haber_baslik_db))
      setİ10(JSON.stringify(data.data[10].haber_icerik_db))  
    }
    catch(err) {
      console.log(err)
    }
    
  

    })
}, [])

  return (
    <View style={styles.container}>

<View style={styles.genel}>
        <Text style={styles.baslik}> {b0} </Text>
    <Text  style={styles.icerik}> {i0} </Text>
    </View>

    <View style={styles.genel}>
        <Text style={styles.baslik}> {b1} </Text>
    <Text  style={styles.icerik}> {i1} </Text>
    </View>
  
    <View style={styles.genel}>
        <Text style={styles.baslik}> {b2} </Text>
    <Text  style={styles.icerik}> {i2} </Text>
    </View>

    <View style={styles.genel}>
        <Text style={styles.baslik}> {b3} </Text>
    <Text  style={styles.icerik}> {i3} </Text>
    </View>

    <View style={styles.genel}>
        <Text style={styles.baslik}> {b4} </Text>
    <Text  style={styles.icerik}> {i4} </Text>
    </View>

    <View style={styles.genel}>
        <Text style={styles.baslik}> {b5} </Text>
    <Text  style={styles.icerik}> {i5} </Text>
    </View>

    <View style={styles.genel}>
        <Text style={styles.baslik}> {b6} </Text>
    <Text  style={styles.icerik}> {i6} </Text>
    </View>

    <View style={styles.genel}>
        <Text style={styles.baslik}> {b7} </Text>
    <Text  style={styles.icerik}> {i7} </Text>
    </View>

    <View style={styles.genel}>
        <Text style={styles.baslik}> {b8} </Text>
    <Text  style={styles.icerik}> {i8} </Text>
    </View>

    <View style={styles.genel}>
        <Text style={styles.baslik}> {b9} </Text>
    <Text  style={styles.icerik}> {i9} </Text>
    </View>
      
    <View style={styles.genel}>
        <Text style={styles.baslik}> {b10} </Text>
    <Text  style={styles.icerik}> {i10} </Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    justifyContent: "center",
    alignContent: "center"
  },
  genel: {
marginTop:10
  },
  baslik : {
backgroundColor: "#99ccff"
  },
  icerik : {
    backgroundColor: "#66ff66"
  }
})
