import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  padding: 20,
	  backgroundColor: "#f8f9fa",
	},
	main: {
		height: "100%",
		paddingLeft: 10,
		paddingRight: 10,
	},
	innerContainer: {
	  marginTop: 10
	},
	input: {
	  height: 50,
	  borderWidth: 1,
	  borderColor: "#007bff",
	  borderRadius: 10,
	  paddingHorizontal: 15,
	  marginBottom: 15,
	  backgroundColor: "#fff",
	  fontSize: 16,
	  color: "#333",
	  shadowColor: "#000",
	  shadowOpacity: 0.1,
	  shadowOffset: { width: 0, height: 2 },
	  shadowRadius: 3,
	  elevation: 2,
	},
	btn: {
	  backgroundColor: "#28a745",
	  paddingVertical: 14,
	  borderRadius: 10,
	  alignItems: "center",
	  justifyContent: "center",
	  marginBottom: 20,
	  shadowColor: "#000",
	  shadowOpacity: 0.2,
	  shadowOffset: { width: 0, height: 3 },
	  shadowRadius: 4,
	  elevation: 4,
	  height: 50
	},
	btnText: {
	  color: "#fff",
	  fontSize: 18,
	  fontWeight: "bold",
	  textTransform: "uppercase",
	},
	taskList: {

	},
	taskItem: {
	  flexDirection: "row",
	  justifyContent: "space-between",
	  alignItems: "center",
	  padding: 15,
	  borderRadius: 10,
	  backgroundColor: "#fff",
	  marginBottom: 10,
	  shadowColor: "#000",
	  shadowOpacity: 0.1,
	  shadowOffset: { width: 0, height: 3 },
	  shadowRadius: 4,
	  elevation: 3,
	  minHeight: 50,
	  
	},
	task: {
	  fontSize: 16,
	  fontWeight: "bold",
	  color: "#333",
	  maxWidth: "80%"
	},
	deleteBtn: {
	  padding: 8,
	  borderRadius: 5,
	  backgroundColor: "#dc3545",
	  height: 40
	},
	deleteText: {
	  fontSize: 18,
	  color: "#fff",
	  fontWeight: "bold",
	},
	emptyText: {
	  textAlign: "center",
	  fontSize: 16,
	  color: "#888",
	  marginTop: 20,
	},
  });