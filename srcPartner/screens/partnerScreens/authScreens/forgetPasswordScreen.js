import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {SCREEN_BG_COLOR, WHITE_COLOR} from '../../../theme/color';
import CustomTextBox from '../../../components/customComponents/customTextbox';
import CustomButton from '../../../components/customComponents/customButton';
import {LARGE, SMALL} from '../../../font/font';

export default class ForgetPasswordScreen extends Component {
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
          <Text style={styles.pageTitleTextStyle}>Forget Password</Text>
        </View>
        <View style={styles.smallTextStyle}>
          <Text
            style={{
              fontSize: SMALL,
              color: WHITE_COLOR,
            }}>
            Enter your email for recover your account
          </Text>
        </View>
        <View style={{height: 10}} />
        <CustomTextBox
          placeholder="Email Address"
          keyboardType="email-address"
        />

        <View style={{height: 30}} />
        <CustomButton
          text="Reset Password"
          onPress={() =>
            this.props.navigation.navigate('PartnerRecoverPasswordScreen')
          }
        />
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
  smallTextStyle: {
    width: '90%',
    height: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
