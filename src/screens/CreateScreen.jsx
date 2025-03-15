import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const CreateScreen = ({data, setData}) => {
    const [itemName, setItemName] = useState('');
    const [stock, setStock] = useState('');
    const [update, setUpdate] = useState(false);
    const [editId, setEditId] = useState(null); // Track the item being edited
  
    const handleDelete = id => {
      setData(data.filter(item => item.id !== id));
    };
  
    const handleEdit = id => {
      setUpdate(true);
      const item = data.find(item => item.id === id);
      setItemName(item.name);
      setStock(item.stock.toString()); // Convert to string for TextInput
      setEditId(id); // Store the ID of the item being edited
    };
  
    const handleCreateOrUpdate = () => {
      if (update) {
        // Update the existing item
        const updatedData = data.map(item =>
          item.id === editId ? { ...item, name: itemName, stock: Number(stock) } : item
        );
        setData(updatedData);
        setUpdate(false);
        setEditId(null);
      } else {
        // Create a new item
        const newData = {
          id: Date.now(),
          name: itemName,
          stock: Number(stock),
        };
        setData([...data, newData]);
      }
      setItemName('');
      setStock('');
    };
  
    return (
      <View>
        <View>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>Items</Text>
          <TextInput
            placeholder="Enter Item Name..."
            value={itemName}
            onChangeText={item => setItemName(item)}
            style={styles.input}
          />
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>Stock</Text>
          <TextInput
            placeholder="Enter Stock Quantity..."
            keyboardType="numeric"
            value={stock}
            onChangeText={item => setStock(item)}
            style={styles.input}
          />
        </View>
        <Pressable onPress={handleCreateOrUpdate}>
          <Text style={styles.button}>{update ? 'Update Item' : 'Create Item'}</Text>
        </Pressable>
  
        <View style={styles.header}>
          <Text style={styles.headerText}>All Items in the Stock</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.item,
                item.stock < 20
                  ? { backgroundColor: '#eb6a6a' }
                  : { backgroundColor: '#33f029' },
              ]}
            >
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.stock}</Text>
                <Pressable onPress={() => handleEdit(item.id)}>
                  <Text style={{ fontWeight: 'bold', color: '#0390a8' }}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => handleDelete(item.id)}>
                  <Text style={{ fontWeight: 'bold' }}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    );
  };
  
  export default CreateScreen;
  
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      borderRadius: 10,
      color: '#2fabf7',
      fontWeight: 'bold',
    },
    button: {
      width: '100%',
      padding: 10,
      backgroundColor: '#2fabf7',
      color: 'white',
      textAlign: 'center',
      borderRadius: 10,
      fontSize: 20,
      fontWeight: 'bold',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      marginBottom: 10,
      paddingVertical: 10,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth: 1,
      paddingHorizontal: 20,
      marginVertical: 5,
      borderRadius: 20,
      paddingVertical: 10,
    },
  });
  