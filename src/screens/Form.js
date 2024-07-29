import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
const Form = () => {
    const navigation = useNavigation();
    const questionForm = [
        { id: 1, templateTitle: "Biểu mẫu 1", quantity: 2, question: { questionTitle: "Câu hỏi 1", option: ["A", "B", "C"] } },
        { id: 2, templateTitle: "Biểu mẫu 2", quantity: 3, question: { questionTitle: "Câu hỏi 2", option: ["D", "S", "X"] } },
        { id: 3,templateTitle: "Biểu mẫu 3", quantity: 4, question: { questionTitle: "Câu hỏi 3", option: ["N", "V", "Z"] } },
    ];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewForm}>
                <Text style={styles.newsTitle}>List Form: </Text>
                <FlatList
                    data={questionForm}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('')}>
                                <View style={styles.viewListForm}>
                                    <Text style={styles.newsTitle}>{item.templateTitle}</Text>
                                    <Text>Số lượng: {item.quantity}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}
export default Form;