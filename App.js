import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const styles = {
	content: {
		padding: 15
	},
	title: {
		color: '#101010',
		fontSize: 20,
		top: 5
	},
	contentFields: {
		top: 20
	},
	fieldLabel: {
		marginBottom: 5,
		fontSize: 14
	},
	fieldsWrapper: {
		marginTop: 15
	},
	textInputs: {
		borderWidth: 1,
		borderColor: '#BBBBBB',
		borderRadius: 5,
		backgroundColor: '#EEEEEE',
		padding: 10
	},
	result: {
		marginTop: 20
	},
	resultTitle: {
		fontSize: 16,
	},
	resultValue: {
		fontSize: 20,
		color: '#3C3C3C'
	}
}

const App = () => {
	const [number1, setNumber1] = useState('0');
	const [number2, setNumber2] = useState('0');

	const handleChangeValue = (setNumber) => (value) => setNumber(String(Number(value)));

	return (
		<View style={styles.content}>
			<Text style={styles.title}>Calculator</Text>

			<View style={styles.contentFields}>
				<View style={styles.fieldsWrapper}>
					<Text style={styles.fieldLabel}>First number</Text>
					<TextInput keyboardType="numeric" style={styles.textInputs} value={number1} onChangeText={handleChangeValue(setNumber1)} />
				</View>
				<View style={styles.fieldsWrapper}>
					<Text style={styles.fieldLabel}>Second number</Text>
					<TextInput keyboardType="numeric" style={styles.textInputs} value={number2} onChangeText={handleChangeValue(setNumber2)} />
				</View>
				<View style={styles.result}>
					<Text style={styles.resultTitle}>Result</Text>
					<Text style={styles.resultValue}>{Number(number1) + Number(number2)}</Text>
				</View>
			</View>

		</View>
	);
};

export default App;
