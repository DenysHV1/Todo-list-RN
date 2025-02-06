import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
} from "react-native";

import COURSES from "../array.js";

export default function App() {
  const [taskData, setTaskData] = useState(COURSES);
  const [task, setTask] = useState("");

  const onAdd = () => {
    if (!task) {
      alert("Field is empty");
      return;
    }
    setTaskData((prevTask) => [...prevTask, { id: Date.now().toString(), title: task }]);
    setTask("");
  };

  const deleteTask = (taskId) => {
    setTaskData((prev) => prev.filter(({ id }) => id !== taskId));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>To-Do List</Text>
          <TextInput
            value={task}
            onChangeText={setTask}
            placeholder="Enter task..."
            style={styles.input}
          />
          <TouchableOpacity style={styles.btn} onPress={onAdd}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>

          {/* Список задач */}
          <View style={styles.taskList}>
            {taskData.length > 0 ? (
              taskData.map(({ title, id }, index) => (
                <DraggableTask
                  key={id}
                  id={id}
                  title={title}
                  index={index}
                  onDelete={deleteTask}
                  taskData={taskData}
                  setTaskData={setTaskData}
                />
              ))
            ) : (
              <Text style={styles.emptyText}>List is empty!</Text>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

// Компонент для перетаскиваемой задачи
const DraggableTask = ({ id, title, onDelete, index, taskData, setTaskData }) => {
  const [pan] = useState(new Animated.ValueXY());

  // Создаем обработчик жестов PanResponder
  const panResponder = useState(() =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gestureState) => {
        // Вычисление, на какой позиции должен быть элемент
        const { moveY } = gestureState;
        const taskHeight = 60; // высота элемента, можно вычислять динамически
        const indexToMove = Math.floor(moveY / taskHeight);
        
        // Перестановка задач в массиве
        const newTaskData = [...taskData];
        const draggedTask = newTaskData.splice(index, 1)[0];
        newTaskData.splice(indexToMove, 0, draggedTask);

        setTaskData(newTaskData); // Обновляем порядок задач
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start(); // Возвращаем элемент на исходное место
      },
    })
  )[0];

  return (
    <Animated.View
      style={[styles.taskItem, { transform: pan.getTranslateTransform() }]}
      {...panResponder.panHandlers}
    >
      <Text style={styles.task}>{title}</Text>
      <TouchableOpacity onPress={() => onDelete(id)} style={styles.deleteBtn}>
        <Text style={styles.deleteText}>✖️</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    alignSelf: "center",
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "600",
    color: "#007bff",
  },
  innerContainer: {
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskList: {
    marginTop: 10,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  task: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  deleteBtn: {
    padding: 8,
  },
  deleteText: {
    fontSize: 18,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginTop: 20,
  },
});

