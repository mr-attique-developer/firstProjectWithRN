import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({data}) => {
    console.log(data)
  return (
    <View>
      
      <View style={styles.header}>
        
         <Text style={styles.headerText}>Items</Text>
         <Text style={styles.headerText}>Quantity</Text>
      </View>
      <FlatList
      data={data}
      keyExtractor={(item)=> item.id.toString()}
      renderItem={(item) =>{
            return(
                <View style={[styles.item, item.item.stock < 20 ? {backgroundColor:"#eb6a6a"} : {backgroundColor:"#33f029"}]}>
                    <Text style={{ fontWeight:"bold"}}>{item.item.name}</Text>
                    <Text style={{ fontWeight:'bold'}}>{item.item.stock}</Text>
                </View>
            )

      }}
      />
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingVertical: 10,
    },
    headerText:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1, 
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 20,
        paddingVertical: 10,
    },

})