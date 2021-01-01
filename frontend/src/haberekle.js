


import React, {useState} from 'react';
import {View, Text, Button,StyleSheet,TextInput} from 'react-native';

import axios from 'axios';
import butunhaberler from './butunhaberler';

let degerleri_ekle = (baskikdegeri,icerikdegeri) => {
  axios({
    method: 'post',
    url: 'http://45.82.72.127:3000/post_haber_olustur',
    data: {
      haber_basligi: baskikdegeri,
      haber_icerik: icerikdegeri
    }
  });
};

const haberekle = (props) => {
  const {navigation} = props;

  const [baslik, setBaslik] = useState("baslik");
  const [icerik, setİcerik] = useState("içerik");

  return (
    
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom: 120}}>
    <Text  style = {styles.anayazi}> burası haber eklenecek yerdir.</Text>

    <TextInput style = {styles.input1}
               underlineColorAndroid = "transparent"
               placeholder = "Haberin Başlığı"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {setBaslik}
            />

<TextInput style = {styles.input2}
               underlineColorAndroid = "transparent"
               placeholder = "Haberin İçeriği"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {setİcerik}
            />

<Text
        style = {styles.ekle}
        onPress={() => degerleri_ekle(baslik,icerik)}
      >Haberi Veri tabanına Ekle.</Text>

<Text
        style = {styles.resimsec}
        onPress={() => email}
      >Haberin resimini galeriden seç</Text>

  <Text>{baslik}</Text>
  <Text>{icerik}</Text>


    <Text
        style = {styles.butunhaberlericin}
        onPress={() => navigation.navigate('butunhaberler')}
      >bütün haberleri görmek için tıkla</Text>
    </View>
  );
};


const styles = StyleSheet.create({
input1:{
    width: 200,
    margin: 15,
    height: 40,
    backgroundColor: '#ccffcc',
    borderColor: '#7a42f4',
    marginBottom: 10
},
input2:{
    width: 200,
    margin: 15,
    height: 100,
    backgroundColor: '#ccffcc',
    borderColor: '#7a42f4',
    marginBottom: 10
},
anayazi:{
    fontSize: 27,
    marginBottom: 50,
    marginTop: 100
},
butunhaberlericin:{
    marginTop: 180,
    backgroundColor: "#33cc33"
},
resimsec:{
    marginTop: 10,
    backgroundColor: "#ffc34d"
},
ekle:{
    marginTop: 10,
    backgroundColor: "#ffc34d"
}
})

export default haberekle;