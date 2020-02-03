import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Button, Container, Content, CheckBox} from 'native-base';
import {SCREEN_BG_COLOR, WHITE_COLOR, Button_BG_COLOR} from '../../theme/color';
import CustomProfileView from '../../components/customComponents/customProfileView';
import CustomCheckbox from '../../components/customComponents/customCheckbox';
import CustomTextarea from '../../components/customComponents/customTextarea';
import CustomButton from '../../components/customComponents/customButton';
import CustomTextBox from '../../components/customComponents/customTextbox';
import CustomText from '../../components/customComponents/customText';

export default class EditInfoScreen extends Component {
  state = {
    check: false,
    toggleMode: false,
  };

  toggleButton = () => {
    this.setState({toggleMode: !this.state.toggleMode});
  };

  toggleCheckBox = () => {
    this.setState({check: !this.state.check});
  };
  render() {
    return (
      <Container>
        <Content>
          <CustomProfileView
            buttonText={'Edit Profile'}
            showButton={this.state.toggleMode}
          />

          <View style={{height: 10}} />
          {this.state.toggleMode ? (
            <CustomTextBox
              width={'85%'}
              backgroundColor={WHITE_COLOR}
              placeholder={'Enter Meal Name'}
            />
          ) : (
            <CustomText description={'Farhan Akram'} iconName={'user'} />
          )}
          {this.state.toggleMode ? (
            <CustomTextBox
              placeholder="Email Address"
              keyboardType="email-address"
              width={'85%'}
              backgroundColor={WHITE_COLOR}
            />
          ) : (
            <CustomText
              description={'farhanakram14@gmail.com'}
              iconName={'envelope'}
            />
          )}

          {this.state.toggleMode ? (
            <CustomTextBox
              placeholder="Phone"
              keyboardType="phone-pad"
              width={'85%'}
              backgroundColor={WHITE_COLOR}
            />
          ) : (
            <CustomText description={'0306xxxxxxx'} iconName={'phone'} />
          )}

          <View style={{height: 10}} />

          {this.state.toggleMode ? (
            <CustomTextarea title={'Enter Address'} />
          ) : (
            <CustomText
              description={
                'JinNAH Town near ali garh cold store, Sahiwal Punjab Pakistan '
              }
              iconName={'home'}
              textPlaceHeight={60}
            />
          )}

          <View style={{height: 40}} />
          <CustomButton
            onPress={() => this.toggleButton()}
            width="85%"
            text={this.state.toggleMode ? 'Save' : 'Edit Info'}
          />
          <View style={{height: 10}} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  imageViewStyle: {
    height: 120,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SCREEN_BG_COLOR,
  },
  logoStyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    zIndex: 999,
    alignSelf: 'center',
    marginTop: 120,
  },
  buttonViewStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {height: 35, alignSelf: 'center', borderRadius: 3},
  mainCheckBoxViewStyle: {
    height: 40,
    width: '87%',
    flexDirection: 'row',
    alignSelf: 'center',
  },

  checkBoxViewStyle: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxStyle: {
    backgroundColor: '#F6F6F6',
    height: 20,
    width: 20,
    borderColor: Button_BG_COLOR,
    borderWidth: 1,
  },
  checkBoxInnerViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  checkBoxTextViewStyle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
