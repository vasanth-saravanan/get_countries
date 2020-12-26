import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    backgroundContainer: {
        height: hp('100%'),
        width: wp('100%'),
    },
    topContainer: {
        width: wp('100%'),
        backgroundColor: '#E91E63',
        paddingTop: wp('10%'),
        paddingBottom: wp('2%')
    },
    restTopContainer: {
        width: wp('100%'),
        backgroundColor: '#E91E63',
        paddingTop: wp('7%'),
        paddingBottom: wp('8%'),
    },
    topContentContainer: {
        width: wp('90%'),
        flexDirection: "row",
        flexWrap: 'wrap',
        marginTop: wp('1%'),
        marginLeft: wp('38%'),
        alignItems :'center'
    },
    userName: {
        color: '#fff',
        fontSize: wp('5.5%'),
        paddingTop: wp('1%'),
        paddingLeft: wp('2%'),
        fontWeight : "bold",
    },
    topWhiteContainer: {
        width: wp('100%'),
        // backgroundColor : 'red',
        position: "absolute",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    boxOutter: {
        width: '50%',
        padding: '3%'
    },
    boxInner: {
        backgroundColor: '#fff',
        borderRadius: wp('2%'),
        borderBottomWidth: wp('1%'),
        borderBottomColor: '#E91E63',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    boxInnerTop: {
        // backgroundColor: 'pink',
        padding: '7%'
    },
    boxInnerBottom: {
        // backgroundColor: 'green',
        padding: '7%'
    },
    doller : {
        fontSize : wp('4%'),
        color : '#E91E63'
    },
    doller_title : {
        fontSize : wp('4%'),
        color : '#000'
    },
    button: {
        backgroundColor: '#E91E63',
        padding: wp("4%"),
        borderRadius: 20,
        width : wp("80%"),
        marginLeft : wp("10%"),
        marginTop : hp("30%")
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight : 'bold',
    },
})