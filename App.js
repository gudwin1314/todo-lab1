import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Switch, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style'; 
import { db } from './database';
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const database = onSnapshot(collection(db, 'ToDo-List'), (snapshot) => {
      const newTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
        
      }));
      setTasks(newTasks);
    });

    return () => database();
  }, []);

  const addTask = async () => {
    if (title.trim()) {
      await addDoc(collection(db, 'ToDo-List'), {
        title,
        status: false
      });
      setTitle('');
    }
  };

  const toggleStatus = async (id, status) => {
    const taskDoc = doc(db, 'ToDo-List', id);
    await updateDoc(taskDoc, {
      status: !status
    });
  };

  const deleteTask = async (id) => {
    const taskDoc = doc(db, 'ToDo-List', id);
    await deleteDoc(taskDoc);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDo-List</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>
              {item.title}
            </Text>
            <View style={styles.switchContainer}>
              <Switch
                value={item.status}
                onValueChange={() => toggleStatus(item.id, item.status)}
              />
              <Text style={item.status ? styles.statusClosed : styles.statusOpen}>
                {item.status ? 'Done' : 'Due'}
              </Text>
            </View>
            <TouchableWithoutFeedback onPress={() => deleteTask(item.id)}>
              <Icon name="trash" size={30} color="red" style={styles.deleteIcon} />
            </TouchableWithoutFeedback>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.taskInputContainer}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter Your To-Do List"
        />
        <Button onPress={addTask} title="Add Task" disabled={!title.trim()} />
      </View>
    </View>
  );
};

export default App;
