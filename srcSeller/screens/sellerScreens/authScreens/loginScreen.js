import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {SCREEN_BG_COLOR, WHITE_COLOR} from '../../../theme/color';
import CustomTextBox from '../../../components/customComponents/customTextbox';
import CustomButton from '../../../components/customComponents/customButton';
import {LARGE, SMALL} from '../../../font/font';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../../images/logo.png')}
            style={{height: 162, width: 175, alignSelf: 'center'}}
          />
        </View>
        <View style={styles.pageTitleViewStyle}>
          <Text style={styles.pageTitleTextStyle}>Signin</Text>
        </View>
        <CustomTextBox
          placeholder="Email Address"
          keyboardType="email-address"
        />
        <CustomTextBox placeholder="Password" showEye1 />

        <View style={styles.forgetViewStyle}>
          <TouchableOpacity>
            <Text style={styles.forgetTextStyle}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 20}} />
        <CustomButton text="Login" />

        <View style={styles.textMainViewStyle}>
          <View style={styles.leftTextViewStyle}>
            <Text style={{color: WHITE_COLOR, fontSize: SMALL}}>
              Don't have an account?
            </Text>
          </View>
          <TouchableOpacity style={styles.rightTextViewStyle}>
            <Text style={{color: WHITE_COLOR, fontSize: SMALL}}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: SCREEN_BG_COLOR,
  },
  pageTitleViewStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitleTextStyle: {fontSize: LARGE, fontWeight: 'bold', color: WHITE_COLOR},
  forgetViewStyle: {
    height: 30,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  forgetTextStyle: {color: WHITE_COLOR, fontSize: SMALL},
  textMainViewStyle: {
    height: 40,
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  leftTextViewStyle: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightTextViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
