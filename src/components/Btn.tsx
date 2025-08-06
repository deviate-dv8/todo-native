import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, ViewStyle } from "react-native";

export default function Btn (props:{
	style?:ViewStyle,
	onPress?:Function,
	title?:string,
	textStyle?:Object,
}) {
	const [pressed, setPressed] = useState(false);
	return (
	<TouchableHighlight
			onPress={() => {
				if (props.onPress) {
					props.onPress();
				}
			}}
			onShowUnderlay={() => setPressed(true)}
			onHideUnderlay={() => setPressed(false)}
			style={{...styles.container,...props.style}}>
			<Text style={[styles.text,props.textStyle,pressed && styles.pressed]}>
				{props.title || "Click Me"}
			</Text>
	</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	container: {
		padding:10,
		borderRadius: 10,
		backgroundColor:"white",
		borderWidth: 1,
	},
	text: {
		fontSize: 16,
		color: "black",
		textAlign: "center",
	},
	pressed: {
		color:"white"
	},
})
