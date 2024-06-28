import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Switch, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style'; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const addTask = () => {
    if (title.trim()) {
      setTasks([...tasks, { title, status: false }]);
      setTitle('');
    }
  };

  const toggleStatus = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: !task.status } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDo-List</Text>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>
              {item.title}
            </Text>
            <View style={styles.switchContainer}>
              <Switch
                value={item.status}
                onValueChange={() => toggleStatus(index)}
              />
              <Text style={item.status ? styles.statusClosed : styles.statusOpen}>
                {item.status ? 'Done' : 'Due'}
              </Text>
            </View>
            <TouchableWithoutFeedback onPress={() => deleteTask(index)}>
              <Icon name="trash" size={30} color="red" style={styles.deleteIcon} />
            </TouchableWithoutFeedback>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
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
