import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content, CheckBox, Text} from 'native-base';
import {WHITE_COLOR, Button_BG_COLOR} from '../../theme/color';
import CustomProfileView from '../../components/customComponents/customProfileView';
import CustomButton from '../../components/customComponents/customButton';
import CustomTextBox from '../../components/customComponents/customTextbox';
import CustomText from '../../components/customComponents/customText';
export default class ShowInterestScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CustomProfileView
            height={150}
            lowerHeight={100}
            imageViewHeight={80}
            width={280}
            borderRadius={10}
            marginTop={100}
            buttonText={'Breakfast'}
            showMenuButton
            showRightSideButton
          />
          <View style={{height: 15}} />

          <CustomText description={'Chicken Tikka'} iconName={'cutlery'} />

          <CustomText
            description={
              'It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken. '
            }
            iconName={'file-text'}
            textPlaceHeight={100}
          />

          <CustomText description={'Halal'} iconName={'check'} />

          <CustomText description={'Vegetarian'} iconName={'yelp'} />

          <CustomText description={'Farhan Akram'} iconName={'user'} />

          <CustomText description={'Partner Phone Number'} iconName={'phone'} />

          <CustomText description={'Seller Phone Number'} iconName={'phone'} />

          {/* button */}
          <View style={{height: 30}} />

          <CustomButton width="85%" text={'Show Interest'} />

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
