import React, { useState, useEffect, useMemo } from "react";
import { SafeAreaView, Text, View, FlatList, Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

//styles
import styles from "../styles/styles";
//components
import InputTitle from "../components/InputTitle";
import ButtonPlus from "../components/ButtonPlus";
import OptionsFlatList from "../components/OptionsFlatList";

const FormAll = () => {
    const navigation = useNavigation();
    const [templateTitle, setTemplateTitle] = useState('');
    const [question, setQuestion] = useState([
        { name: '123' }
    ]);
    const questionForm = [
        { id: 1, templateTitle: "Biểu mẫu 1", quantity: 2, question: { questionTitle: "Câu hỏi 1", option: ["A", "B", "C"] } },
        { id: 2, templateTitle: "Biểu mẫu 2", quantity: 3, question: { questionTitle: "Câu hỏi 2", option: ["D", "S", "X"] } },
        { id: 3, templateTitle: "Biểu mẫu 3", quantity: 4, question: { questionTitle: "Câu hỏi 3", option: ["N", "V", "Z"] } },
    ];
    const questions = [{
        id: 1,
        templateTitle: "Biểu mẫu 1",
        typeQuestions: [
            {
                type: 'multipleChoice',
                questionTitle: 'What is your favorite color?',
                options: ['Red', 'Blue', 'Green'],
            },
            {
                type: 'paragraph',
                questionTitle: 'Describe your ideal vacation.',
            },
            {
                type: 'shortAnswer',
                questionTitle: 'What is your name?',
            },
            {
                type: 'multipleChoice',
                questionTitle: 'What is your favorite color?',
                options: ['Red', 'Blue', 'Green'],
            },
            {
                type: 'paragraph',
                questionTitle: 'Describe your ideal vacation.',
            },
            {
                type: 'multipleChoice',
                questionTitle: 'What is your favorite color?',
                options: ['Red', 'Blue', 'Green'],
            },
        ]
    }];
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View style={styles.viewForm}>
                    <InputTitle
                        placeholder={"Template without title:"}
                        width={'100%'}
                        height={50}
                        value={questions[0].templateTitle}
                        onChangeText={(text) => setTemplateTitle(text)}
                    />
                    <ScrollView>
                        <OptionsFlatList item={questions[0].typeQuestions} />
                    </ScrollView>

                </View>
                <View style={styles.btnView}>
                    <View style={{ marginRight: 'auto' }}>
                        <ButtonPlus nameIcon={'send'} />
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <ButtonPlus nameIcon={'plus-circle'} onPress={() => navigation.navigate('AddForm')} />
                    </View>
                </View>


            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default FormAll;