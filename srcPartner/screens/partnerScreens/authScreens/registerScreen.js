import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {SCREEN_BG_COLOR, WHITE_COLOR} from '../../../theme/color';
import CustomTextBox from '../../../components/customComponents/customTextbox';
import CustomButton from '../../../components/customComponents/customButton';
import {LARGE, SMALL} from '../../../font/font';

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{height: 25}} />
          <View>
            <Image
              source={require('../../../images/logo.png')}
              style={{height: 162, width: 175, alignSelf: 'center'}}
            />
          </View>
          <View style={styles.pageTitleViewStyle}>
            <Text style={styles.pageTitleTextStyle}>SignUp</Text>
          </View>
          <CustomTextBox placeholder="Name" />
          <CustomTextBox
            placeholder="Email Address"
            keyboardType="email-address"
          />
          <CustomTextBox placeholder="Phone" keyboardType="phone-pad" />
          <CustomTextBox placeholder="Password" showEye1 />
          <CustomTextBox placeholder="Confirm Password" showEye2 />

          <View style={{height: 30}} />
          <CustomButton
            text="Continue"
            onPress={() =>
              this.props.navigation.navigate('PartnerProfileScreen')
            }
          />
        </ScrollView>
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
});
