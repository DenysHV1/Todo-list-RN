import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./TodoListStyles.js";

const AddItem = ({ task, setTask, onAdd }) => {
  return (
    <View>
      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Enter task..."
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn} onPress={onAdd}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
