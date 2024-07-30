import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

//styles
import styles from "../styles/styles";
//components
import InputTitle from "../components/InputTitle";
import ButtonPlus from "../components/ButtonPlus";
import OptionsFlatList from "../components/OptionsFlatList";


const FormAll = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params ?? {};
    const [templateTitle, setTemplateTitle] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            {item ? (
            <View style={styles.viewForm}>
                <InputTitle
                    placeholder={"Template without title:"}
                    width={'100%'}
                    height={50}
                    value={item?.templateTitle}
                    onChangeText={(text) => setTemplateTitle(text)}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <OptionsFlatList item={item?.typeQuestions} />
                </ScrollView>

            </View>
            ) : <Text style={styles.notication}>No recent forms...</Text>}
            <View style={styles.btnView}>
                <View style={{ marginRight: 'auto' }}>
                    <ButtonPlus nameIcon={'send'} />
                </View>
                <View style={{ marginLeft: 'auto' }}>
                    <ButtonPlus nameIcon={'plus-circle'} onPress={() => navigation.navigate('AddForm',{item})} />
                </View>
            </View>
        </SafeAreaView>



    )
}
export default FormAll;