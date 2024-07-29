import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Keyboard, TouchableWithoutFeedback, Modal, Pressable, ScrollView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
//styles
import styles from "../styles/styles";
//compnents
import InputTitle from "../components/InputTitle";
import OptionsFlatList from "../components/OptionsFlatList";
import ButtonPlus from "../components/ButtonPlus";
const AddForm = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState('multipleChoice');
    const [modalVisibles, setModalVisible] = useState(false);
    const [templateTitle, setTemplateTitle] = useState('');
    const [radioBtn] = useState([
        { label: 'multipleChoice' },
        { label: 'paragraph' },
        { label: 'shortAnswer' },
    ]);
    const questionForm = [
        { id: 1, templateTitle: "Biểu mẫu 1", quantity: 2, question: { questionTitle: "Câu hỏi 1", option: ["A", "B", "C"] } },
    ];
    const questions = [
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
    ];
    const hanndleType = (value) => {
        // Xác định loại được chọn
        const selectedType = value;
        // Lọc danh sách questions dựa trên loại đã chọn
        if (selectedType) {
            const filteredNews = questions.filter(question => question.type === selectedType);
            // console.log('filteredNews', filteredNews);
            setFilteredNews(filteredNews);
        }
    }
    useEffect(() => {
        hanndleType(checked);
    }, [checked]);
    const [filteredNews, setFilteredNews] = useState(questions);
    const handlerRadio = (value) => {
        setChecked(value);
        setModalVisible(false); // Đóng Modal khi chọn RadioButton
        hanndleType(value);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View style={styles.viewForm}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisibles}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(false);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <RadioButton.Group onValueChange={(value) => handlerRadio(value)} value={checked}>
                                    {radioBtn.map((item, index) => (
                                        <View key={index} style={styles.radioButton}>
                                            <RadioButton.Android
                                                value={item.label}
                                                status={checked === item.label ? 'checked' : 'unchecked'}
                                            />
                                            <Text style={styles.radioLabel}>{item.label} </Text>
                                        </View>
                                    ))}
                                </RadioButton.Group>
                            </View>
                        </View>
                    </Modal>
                    <View style={styles.radioButton}>
                        <InputTitle
                            placeholder={"Template without title:"}
                            width={'100%'}
                            height={'90%'}
                            value={templateTitle}
                            onChangeText={(text) => setTemplateTitle(text)}
                        />
                        <Feather
                            name={'more-vertical'}
                            size={35}
                            style={{ marginLeft: 'auto' }}
                            onPress={() => setModalVisible(true)}
                        />
                    </View>
                    <ScrollView>
                        <OptionsFlatList item={filteredNews} />
                    </ScrollView>
                </View>
                <View style={styles.btnView}>
                    <View style={{ marginRight: 'auto' }}>
                        {/* <ButtonPlus nameIcon={'send'} /> */}
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <ButtonPlus nameIcon={'plus-circle'} onPress={() => navigation.navigate('AddForm')} />
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default AddForm;