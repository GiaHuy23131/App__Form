import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF3F3', // Nền xám sáng cho toàn bộ màn hình
        justifyContent: 'center',
    },
    separator: {
        width: '100%',  // Or you can use a fixed width, like 50 or 100
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 5,
    },
    logout: {
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginTop: 'auto',
    },
    row: {
        flexDirection: 'row',
    },
    infomation: {
        justifyContent: 'center',
        margin: 10,
    },
    newsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});
export default styles;