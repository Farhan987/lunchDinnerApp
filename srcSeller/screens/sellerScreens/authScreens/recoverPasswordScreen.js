import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {SCREEN_BG_COLOR, WHITE_COLOR} from '../../../theme/color';
import CustomTextBox from '../../../components/customComponents/customTextbox';
import CustomButton from '../../../components/customComponents/customButton';
import {LARGE, SMALL} from '../../../font/font';

export default class RecoverPasswordScreen extends Component {
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
          <Text style={styles.pageTitleTextStyle}>Recover Password</Text>
        </View>
        <View style={styles.smallTextStyle}>
          <Text
            style={{
              fontSize: SMALL,
              color: WHITE_COLOR,
            }}>
            Set your new Password
          </Text>
        </View>
        <View style={{height: 10}} />
        <CustomTextBox placeholder="Password" showEye1 />
        <CustomTextBox placeholder="Confirm Password" showEye2 />

        <View style={{height: 30}} />
        <CustomButton
          text="Continue"
          onPress={() => this.props.navigation.navigate('SellerLoginScreen')}
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
