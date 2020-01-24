import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Button, Container, Content} from 'native-base';
import {SCREEN_BG_COLOR, WHITE_COLOR} from '../../../theme/color';
import CustomProfileView from '../../../components/customComponents/customProfileView';
import CustomCheckbox from '../../../components/customComponents/customCheckbox';
import CustomTextarea from '../../../components/customComponents/customTextarea';
import CustomButton from '../../../components/customComponents/customButton';

export default class BuyerProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <CustomProfileView buttonText={'Upload Picture'} showButton />

          <View style={{height: 10}} />
          <CustomCheckbox
            text="Food Type"
            firstText="Veg"
            secondText="Non-Veg"
          />
          <CustomCheckbox
            text="Food For"
            showThird
            firstText="Breakfast"
            secondText="Lunch"
            thirdText="Dinner"
          />
          <CustomCheckbox
            text="Food Category"
            firstText="Halal"
            secondText="Not-Halal"
          />
          <CustomTextarea title={'Enter Address'} />

          <View style={{height: 40}} />
          <CustomButton text={'SignUp'} width="85%" />
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
});
