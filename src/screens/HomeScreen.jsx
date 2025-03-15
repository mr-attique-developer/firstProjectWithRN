import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import CreateScreen from './CreateScreen';
import AllItems from './AllItems';

const HomeScreen = () => {
  const randomData = [
    { id: 1, name: "Corn", stock: 44, unit: "kg" },
    { id: 2, name: "Wheat", stock: 35, unit: "kg" },
    { id: 3, name: "Rice", stock: 16, unit: "kg" },
    { id: 4, name: "Barley", stock: 25, unit: "kg" },
    { id: 5, name: "Oats", stock: 40, unit: "kg" },
    { id: 11, name: "Corn", stock: 44, unit: "kg" },
    { id: 12, name: "Wheat", stock: 35, unit: "kg" },
    { id: 13, name: "Rice", stock: 16, unit: "kg" },
    { id: 14, name: "Barley", stock: 25, unit: "kg" },
    { id: 15, name: "Oats", stock: 40, unit: "kg" },
    { id: 6, name: "Soybeans", stock: 55, unit: "kg" },
    { id: 7, name: "Peanuts", stock: 20, unit: "kg" },
    { id: 8, name: "Lentils", stock: 42, unit: "kg" },
    { id: 9, name: "Chickpeas", stock: 15, unit: "kg" },
    { id: 10, name: "Millet", stock: 18, unit: "kg" },
    { id: 16, name: "Soybeans", stock: 55, unit: "kg" },
    { id: 17, name: "Peanuts", stock: 20, unit: "kg" },
    { id: 18, name: "Lentils", stock: 42, unit: "kg" },
    { id: 19, name: "Chickpeas", stock: 15, unit: "kg" },
    { id: 20, name: "Millet", stock: 18, unit: "kg" },
  ];
  const [view , setView] = useState(0)
  const [data, setData] = useState(randomData);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.btn, view === 0 ? {backgroundColor:"#2fabf7"} : null]} onPress={() => setView(0)}>
          <Text style={[styles.btnText, view === 0 ? {color:"white"}: null]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.btn, view === 1 ? {backgroundColor:"#2fabf7"} : null]} onPress={() => setView(1)}>
          <Text style={[styles.btnText, view === 1 ? {color:"white"}: null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.btn, view === 2 ? {backgroundColor:"#2fabf7"} : null]} onPress={() => setView(2)}>
          <Text style={[styles.btnText, view === 2 ? {color:"white"}: null]}> Create</Text>
        </Pressable>
        
      </View>
{view === 0 && <AllItems  data={data}/>}
{view === 1 && <AllItems data={data.filter((item)=> item.stock < 20)} />}
{view === 2 && <CreateScreen  data={data} setData={setData}/>}


    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '4%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 20,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'blue',
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
