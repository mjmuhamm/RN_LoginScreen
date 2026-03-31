import { StyleSheet } from "react-native"; 


export const styles = StyleSheet.create({
    firstViewStyle: {
        alignItems: "center"
    },

    logo: {
        width: 175, 
        height: 175, 
        marginTop: 50
    },
    loginText: {
        marginTop: 20,
        fontWeight: 'bold', 
        fontSize: 28
    },

    inputView: {
        flexDirection: 'row',
        borderWidth: 0.5, 
        borderRadius: 8, 
        width: 350, 
        marginTop: 15, 
        height: 60
    },
    emailImage: {
        marginTop: 16.2, 
        marginLeft: 5, 
        width: 40, 
        height: 30
    },
    emailText: {
        padding: 0
    },
    passwordImage: {
        marginTop: 17.2, 
        marginLeft: 5, 
        width: 40, 
        height: 25
    },
    passwordText: {
        padding: 0, 
        flex: 1
    },
    secondPasswordImage: {
        marginTop: 17.2, 
        marginLeft: 5, 
        width: 40, 
        height: 27, 
        marginRight: 20
    },
    checkBoxView: {
        flexDirection: 'row', 
        justifyContent:'center', 
        alignItems: 'center', 
        marginTop: 45
    },
    checkBox: {
        borderWidth: 1, 
        borderColor: "indigo", 
        backgroundColor: 'white', 
        width: 15, height:15, 
    },
    checkBoxText: {
        marginLeft: 20, 
        color: "black", 
        fontWeight: 'bold'
    },
    signInButton: {
        backgroundColor: "blue", 
        width: 370, 
        alignItems: 'center', 
        borderRadius: 20, 
        marginTop: 20
    },
    signInText: {
        color: "white", 
        padding: 20
    },
    forgotPasswordText: {
        marginLeft: 20, 
        color: "blue", 
        fontWeight: 'bold',
        marginTop: 50
    },
    continueView: {
        flexDirection:'row', 
        marginTop: 40
    },
    continueLines: {
        color: "gray"
    },
    continueText: {
        color: "gray", 
        marginTop: 3
    },
    buttonView: {
        color: "gray", 
        marginTop: 23,
        flexDirection: "row",
    },
    endButtonPressable: {
        borderWidth: 1, 
        borderColor: "gray", 
        backgroundColor: 'white', 
        width: 75, height:55, 
        borderRadius: 8, 
        alignItems: 'center', 
        justifyContent:'center'
    },
    buttonImage: {
        alignItems:"center", 
        width: 40, 
        height: 30
    },
    middleButtonPressable: {
        marginLeft: 30, 
        marginRight: 30,
        borderWidth: 1, 
        borderColor: "gray", 
        backgroundColor: 'white', 
        width: 75, height:55, 
        borderRadius: 8, 
        alignItems: 'center', 
        justifyContent:'center'
    },
    signUpView: {
        flexDirection: 'row', 
        marginTop: 40
    },
    accountText: {
        color: "gray", 
        marginTop: 0.5
    },
    accountButton: {
        color: "blue", marginLeft: 15
    }





 
});