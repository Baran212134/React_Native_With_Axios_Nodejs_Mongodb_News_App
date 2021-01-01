


import React, {useState} from 'react';
import {View, Text, Button,StyleSheet,TextInput} from 'react-native';
import giris from './giris';
import axios from 'axios';

let degerleri_ekle = (kullaniciemail,kullanicisifre) => {
  axios({
    method: 'post',
    url: 'http://45.82.72.127:3000/post_kullanici_olustur',
    data: {
      kullanicilerw: kullaniciemail,
      sifrelerw: kullanicisifre
    }
  });
};

const yenigiris = (props) => {
  const {navigation} = props;

  const [email, setEmail] = useState("admin");
  const [sifre, setSifre] = useState("admin");


  return (
    
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom: 120}}>
      <Text style = {styles.yazi}>burası yeni kullanıcı oluşturma ekranıdır</Text>

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
        onPress={() => degerleri_ekle(email,sifre)}
      >Kullanıcı oluştur</Text>

  <Text>{email}</Text>
  <Text>{sifre}</Text>


<Text
        style = {styles.gityazi1}
        onPress={() => navigation.navigate('giris')}
      >Zaten hesabım var.</Text>

    </View>
  );
};


const styles = StyleSheet.create({
  gityazi1: {
marginTop: 50,
fontSize: 20,
backgroundColor: "#ff80ff"
  },
  yazi: {
    marginBottom: 50,
    fontSize: 20,
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

export default yenigiris;