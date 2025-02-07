import { useState } from "react";
import COURSES from "../../../array.js";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AddItem from "./AddItem.jsx";
import { styles } from "./TodoListStyles.js";

const TodoList = () => {
  const [taskData, setTaskData] = useState(COURSES);
  const [task, setTask] = useState("");

  const onAdd = () => {
    if (!task.trim()) {
      alert("Field is empty");
      return;
    }
    setTaskData((prevTask) => [
      ...prevTask,
      { id: Date.now().toString(), title: task.trim() },
    ]);
    setTask("");
  };

  const deleteTask = (taskId) => {
    setTaskData((prev) => prev.filter(({ id }) => id !== taskId));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.main}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <AddItem task={task} setTask={setTask} onAdd={onAdd} />
          <View style={styles.taskList}>
            {taskData.length > 0 ? (
              taskData.map(({ title, id }) => (
                <View key={id} style={styles.taskItem}>
                  <Text style={styles.task}>{title}</Text>
                  <TouchableOpacity
                    onPress={() => deleteTask(id)}
                    style={styles.deleteBtn}
                  >
                    <Text style={styles.deleteText}>✖️</Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text style={styles.emptyText}>List is empty!</Text>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};



export default TodoList;
