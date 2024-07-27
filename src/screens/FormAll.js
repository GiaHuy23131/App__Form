import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
const FormAll = () => {
    return(
        <SafeAreaView style={styles.container}></SafeAreaView>
    )
}
export default FormAll;