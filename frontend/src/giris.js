
import React, { useEffect,useState,useLayoutEffect } from 'react'
import {View, Text, Button,StyleSheet,TextInput} from 'react-native';
import yenigiris from './yenigiris';
import haberekle from './haberekle';
import axios from 'axios';

const giris = (props) => {
  const {navigation} = props;

  const [email, setEmail] = useState("admin");
  const [sifre, setSifre] = useState("admin");

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
  
  useLayoutEffect(() => {
    axios
     .get('http://45.82.72.127:3000/get_kullanciciler')
     .then(data => {
     // console.log(data.data[2].haber_baslik_db)
     //  JSON.stringify(data.data[2].haber_baslik_db)
 
     try {
    //  setB0(JSON.stringify(data.data[0].kullaniciler_db))
    //   setİ0(JSON.stringify(data.data[0].sifreler_db))   
 
      setB0(data.data[0].kullaniciler_db)
      setİ0(data.data[0].sifreler_db)   
      
      setB1(data.data[1].kullaniciler_db)
      setİ1(data.data[1].sifreler_db)  
      
      setB2(data.data[2].kullaniciler_db)
      setİ2(data.data[2].sifreler_db)  

      setB3(data.data[3].kullaniciler_db)
      setİ3(data.data[3].sifreler_db)  

      setB4(data.data[4].kullaniciler_db)
      setİ4(data.data[4].sifreler_db)  
     }
     catch(err) {
       console.log(err)
     }
     })
 }, [])
  return (
    
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom: 120}}>
      <Text style = {styles.yazi}>burası giriş ekranıdır.</Text>

      <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {setEmail} 
            />

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Şifre"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {setSifre}
             />

        <Text
        style = {styles.gityazi1}
        onPress={() => {
          if(email === b0 && sifre === i0){
            navigation.navigate('haberekle')
          }else if(email === b1 && sifre === i1){
            navigation.navigate('haberekle')
          }else if(email === b2 && sifre === i2){
            navigation.navigate('haberekle')
          }else if(email === b3 && sifre === i3){
            navigation.navigate('haberekle')
          }else if(email === b4 && sifre === i4){
            navigation.navigate('haberekle')
          }else{
            console.log("elseye düştü")
            console.log(email + " " + sifre)
            console.log( b3 + " " + i3)
          }
/*
 if(email === b0 && sifre === i0){
              navigation.navigate('haberekle')
            }else if(email === b1 && sifre === i1){
              navigation.navigate('haberekle')
            }else if(email === b2 && sifre === i2){
              navigation.navigate('haberekle')
            }else if(email === b3 && sifre === i3){
              navigation.navigate('haberekle')
            }else if(email === b4 && sifre === i4){
              navigation.navigate('haberekle')
            }else{
              console.log("dostum senin şifren ile data base'deki şifrelerin aynı değill.")
            }
*/
        }}
      >Giriş Yapınız</Text>

  <Text>{b0}</Text>
  <Text>{i0}</Text>


<Text
        style = {styles.gityazi1}
        onPress={() => navigation.navigate('yenigiris')}
      >Yeni kullanıcı oluştur</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  gityazi1: {
marginTop: 80,
fontSize: 20,
backgroundColor: "#ff80ff"
  },
  yazi: {
    marginBottom: 50,
    fontSize: 30,
  },
  input: {
    width: 200,
     margin: 15,
     height: 40,
     backgroundColor: '#ccffcc',
     borderColor: '#7a42f4',
     marginBottom: 10
  }
})

export default giris;