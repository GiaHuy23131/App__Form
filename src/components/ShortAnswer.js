import React, { useState, useEffect, useMemo } from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { RadioButton } from 'react-native-paper';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
//styles
import styles from '../styles/styles';
// components
const ShortAnswer = ({ item, index }) => {
    const [checked, setChecked] = useState(null);
    const [requiredQuestion, setRequiredQuestion] = useState(null);
    const [selectedValue, setSelectedValue] = useState([]);
    const handlerAddRadioButton = () => {
        setSelectedValue([...selectedValue, { label: "Option", value: "" }])
    }
    const handleChecked = (value) => {
        setRequiredQuestion(requiredQuestion === value ? null : value);
    }
    // console.log('checked', checked);
    // console.log('requiredQuestion', requiredQuestion);
    return (
        <View style={styles.viewListForm}>
            <View style={styles.radioButton}>
            <Text style={styles.newsContent}>Question {index + 1}:  </Text>
                <TextInput style={styles.newsContent} placeholder='Question without title...' />
                <View style={{ marginLeft: 'auto' }}>
                    <Feather name="image" size={35} color="#000000" />
                </View>
            </View>
            <AutoGrowingTextInput style={styles.newsContent} placeholder={'Write long answers.'} />
            <View style={[styles.radioButton, { marginTop: 10 }]}>
                <Feather name="trash-2" size={30} color="#000000" style={{ marginRight: 5 }} />
                <Feather name="copy" size={30} color="#000000" />
                <View style={[styles.radioButton, { marginLeft: 'auto' }]}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Obligatory</Text>
                    <RadioButton.Android
                        value="option"
                        status={requiredQuestion === 'option' ? 'checked' : 'unchecked'}
                        onPress={() => handleChecked('option')}
                        color="#007BFF"
                    />
                </View>
            </View>

        </View>
    )

};
export default ShortAnswer;