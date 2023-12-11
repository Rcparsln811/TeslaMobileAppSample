import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20,
        zIndex: 100,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-between',

    },
    menu: {
        width: 25,
        height: 25,

    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',

    },


})
export default styles;