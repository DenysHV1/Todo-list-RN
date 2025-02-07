import { useNavigation } from "@react-navigation/native";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={s.container}>
        <TouchableOpacity
          style={s.navButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={s.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.navButton}
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={s.navButtonText}>Registration</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    borderBottomColor: "#0000005e",
    borderBottomWidth: 1,
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  navButton: {
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  navButtonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
