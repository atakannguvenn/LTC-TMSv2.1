/************************************************************************************************/
/* Author: LTC-TMS App Team (Peter Shively, Tyler Bartnick, Duong Doan, Ryen Shearn)            */
/* Last Modified: February 21,2019                                                              */
/* Course: CSC 355 Software Engineering                                                         */
/* Professor Name: Dr. Joo Tan                                                                  */
/* Filename:                                                                                    */
/* Last Edited By:                                                                              */
/* /*********************************************************************************************/
import React ,{Component}from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
<<<<<<< HEAD
=======
  Image,
  Dimensions,
>>>>>>> origin/master
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { StackNavigator } from 'react-navigation';
import firebase from 'react-native-firebase';
import { Button, ThemeProvider } from 'react-native-elements';
import styles from '../styles/styles';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import { Thumbnail } from 'native-base';

class LogoutScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: '',
      position: 'sadf',
      userID: 'afsdaasfd',
    };

  }



/*************************************************************************/
  /* */
  /* Function name: _fetchUserInfo */
  /* Description: Fetch the user info from database and pass it to userInfo */
  /* Parameters: none */
  /* Return Value: none */
  /* */
  /*************************************************************************/
  async _fetchUserInfo() {
    const userInfo = await AsyncStorage.getItem("userInfo");
    this.setState({
      userInfo: JSON.parse(userInfo)
    });

  }
/*************************************************************************/
  /* */
  /* Function name: componentWillMount */
  /* Description: call _fetchUserInfo function before render() */
  /* Parameters: none */
  /* Return Value: none */
  /* */
  /*************************************************************************/
  async componentWillMount() {
    await this._fetchUserInfo();
  }

  componentWillMount() {
    AsyncStorage.getItem("userInfo").then((value) => {
      const data = JSON.parse(value);
      this.state.userID = data.ID;
      this.state.position = data.Position;
      this.state.address = data.Address;
      this.state.name = data.Name;
      this.state.room = data.patientRoomNo;
      this.state.nationality = data.Nationality;
      this.state.nationalID = data.NationalID;
      this.state.gender = data.Gender;
      this.state.description = data.BriefDescription;
      this.state.DOB = data.DOB;
      this.state.email = data.Email;
      this.state.admissionReason = data.AdmissionReason;
      this.state.medicalRecord = data.MedicalRecord;
      this.state.profile_Pic = data.profilePic;
      
      this.forceUpdate();
    })
  }

  
  static navigationOptions=({navigation,screenProps}) => {
    
    const { params ={} }= navigation.state;
    const headerRight = ( 
      <TouchableOpacity onPress={()=>navigation.state.params.navigatePress()}>
        <Text style={styles.itemPortfolio}>Logout</Text>
      </TouchableOpacity>
    );
    return { title: navigation.getParam('otherParam', 'User Portfolio') ,
      headerRight,
      
      };
  };

  LogoutButton=()=>{
    Alert.alert('Log out','Are you sure?',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
      {text: 'OK', onPress: () => this._logout ()},
    ],
    )
  }

  headerStyle = function(screenWidth) {
    return {
      height:130,
      backgroundColor: '#C2CFDB',
      width: screenWidth,
    }
  }


  componentDidMount(){
    this.props.navigation.setParams({navigatePress:this.LogoutButton});
  }
  _logout (){
    AsyncStorage.removeItem('userInfo');
    this.props.navigation.navigate('Auth');
  }
  
 
  render() {
    const user = this.state.userInfo;
    return (
      <View style={styles.container}>
         <ScrollView style={styles2.container}>
<<<<<<< HEAD
         <Collapse style={{borderBottomWidth:1,borderTopWidth:0}}>
            <CollapseHeader style={{flexDirection:'column',alignItems:'center',paddingBottom:50}}>
              <View style={{width:'100%',alignItems:'center',height:'15%'}}>
                <Thumbnail style={{width:110,height:110,borderRadius:110/2}} source={{uri:  this.state.profile_Pic}} />
              </View>             
            </CollapseHeader>
=======
        <View>
        <View style={this.headerStyle(Math.round(Dimensions.get('window').width))}></View>
        <Thumbnail style={{width:130,height:130,borderRadius:130/2,alignSelf:'center',position: 'absolute',marginTop:50,borderColor: "white",borderWidth: 4}} source={{uri:this.state.profile_Pic}} />
        <View style={styles2.body}>
          <View style={styles2.bodyContent2}></View>
            <Text style={styles2.name}>{this.state.name}</Text>
            <Text style={styles2.info}>User ID: {this.state.userID}</Text>
            <Text style={styles2.description}>Position: {this.state.position}</Text>
            <Text style={styles2.description}>Address: {this.state.address}</Text>
            <Text style={styles2.description}>Room #: {this.state.room}</Text>
            <Text style={styles2.description}>Nationality: {this.state.nationality}</Text>
            <Text style={styles2.description}>Gender: {this.state.gender}</Text>
            <Text style={styles2.description}>Brief Description: {this.state.description}</Text>
            <Text style={styles2.description}>Date of Birth: {this.state.DOB}</Text>
            <Text style={styles2.description}>E-mail: {this.state.email}</Text>
            <Text style={styles2.description}>Admission Reason: {this.state.admissionReason}</Text>
            <Text style={styles2.description}>Medical Records: {this.state.medicalRecord}</Text>
>>>>>>> origin/master
           
          </Collapse>
          <Text style={styles.itemPortfolio}>Name: {this.state.name}</Text>
          <Text style={styles.itemPortfolio}>User ID: {this.state.userID}</Text>
          <Text style={styles.itemPortfolio}>Position: {this.state.position}</Text>
          <Text style={styles.itemPortfolio}>Address: {this.state.address}</Text>
          <Text style={styles.itemPortfolio}>Room #: {this.state.room}</Text>
          <Text style={styles.itemPortfolio}>Nationality: {this.state.nationality}</Text>
          <Text style={styles.itemPortfolio}>National ID: {this.state.nationalID}</Text>
          <Text style={styles.itemPortfolio}>Gender: {this.state.gender}</Text>
          <Text style={styles.itemPortfolio}>Brief Description: {this.state.description}</Text>
          <Text style={styles.itemPortfolio}>Date of Birth: {this.state.DOB}</Text>
          <Text style={styles.itemPortfolio}>E-mail Address: {this.state.email}</Text>
          <Text style={styles.itemPortfolio}>Admission Reason: {this.state.admissionReason}</Text>
          <Text style={styles.itemPortfolio}>Medical Records: {this.state.medicalRecord}</Text>
          </ScrollView>
        </View>      
        
    );
  }
  // handler to clear the locally stored user info (logout) and navigate to the
  // sign in screen
}


const styles2 = StyleSheet.create({
<<<<<<< HEAD
  container: {
    backgroundColor: '#a1c7ff',
=======
  container:{
    flex:1,
  },
  iconstyle:{
    paddingRight:20

  },
  header:{ 
  },
  body:{
    marginTop:20, 
  },
  bodyContent2: {
>>>>>>> origin/master
    flex: 1,
    padding: 10,
    marginTop: 15,
  },

});



export default LogoutScreen