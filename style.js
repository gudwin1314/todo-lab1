import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#29465B',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  taskInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  taskText: {
    flex: 1,
    color:"white",
    fontWeight:"bold"
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  statusOpen: {
    color: 'yellow',
    marginLeft: 10,
  },
  statusClosed: {
    color: 'red',
    marginLeft: 10,
  },
  deleteIcon: {
    marginLeft: 10,
  },
});
