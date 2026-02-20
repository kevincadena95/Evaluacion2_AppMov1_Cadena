import { StyleSheet } from 'react-native';


export const StyleGlobal = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 70,
        margin:50,
        textAlign: 'center'
    },

    textResult: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 50,
        textAlign: 'center',
        backgroundColor: '#51d1f6',
        padding: 20
    },

    containerBody: {
        backgroundColor: '#7fccf0',
        alignItems:'center'
    },



    input:{
        backgroundColor: '#D3D3D3',
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5
    },

    button:{
        backgroundColor: 'blue',
        borderRadius: 5,
        marginVertical: 5,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 20
    },


    imagen:{
        display: 'flex',
        height: 200,
        width: 200,
        margin: 50,
        marginTop: 100,
        borderRadius: 10,
        alignItems: 'center'
    },


    buttonText:{
        color: 'white',
        textAlign: 'center',
        borderRadius: 5,
        marginVertical: 5,
        fontWeight: 'bold',
        fontSize: 20
    }
})