import { Keyboard, Text, TouchableWithoutFeedback } from "react-native";


const Registration = () => {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
		<Text>Registration Screen</Text>
	</TouchableWithoutFeedback>
  );
};

export default Registration;
