import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content} from 'native-base';
import {WHITE_COLOR} from '../../theme/color';
import CustomProfileView from '../../components/customComponents/customProfileView';
import CustomButton from '../../components/customComponents/customButton';
import CustomTextBox from '../../components/customComponents/customTextbox';
import CustomText from '../../components/customComponents/customText';
import CustomTextarea from '../../components/customComponents/customTextarea';
import CustomCheckbox from '../../components/customComponents/customCheckbox';
import CustomDropdown from '../../components/customComponents/customDropdown';

export default class AddMealScreen extends Component {
  state = {toggleMode: false};

  toggle = () => {
    this.setState({toggleMode: !this.state.toggleMode});
  };

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
            buttonText={'Upload Menu Picture'}
            showButton={this.state.toggleMode}
          />
          <View style={{height: 15}} />
          {this.state.toggleMode ? (
            <CustomTextBox
              width={'85%'}
              backgroundColor={WHITE_COLOR}
              placeholder={'Enter Meal Name'}
            />
          ) : (
            <CustomText description={'Chicken Tikka'} iconName={'cutlery'} />
          )}

          {this.state.toggleMode ? (
            <CustomTextBox
              width={'85%'}
              backgroundColor={WHITE_COLOR}
              placeholder={'Enter Meal Price'}
            />
          ) : (
            <CustomText description={'Rs. 1800'} iconName={'money'} />
          )}

          {this.state.toggleMode ? (
            <CustomTextarea title={'Enter Meal Description'} />
          ) : (
            <CustomText
              description={
                'It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken. '
              }
              iconName={'asterisk'}
              textPlaceHeight={100}
            />
          )}
          {this.state.toggleMode ? (
            <CustomTextBox
              width={'85%'}
              backgroundColor={WHITE_COLOR}
              placeholder={'Contact Name'}
            />
          ) : (
            <CustomText description={'Farhan Akram'} iconName={'user'} />
          )}
          {this.state.toggleMode ? (
            <CustomTextBox
              width={'85%'}
              backgroundColor={WHITE_COLOR}
              placeholder={'Contact Number'}
              keyboardType={'phone-pad'}
            />
          ) : (
            <CustomText description={'0300xxxxxxx'} iconName={'phone'} />
          )}

          {this.state.toggleMode ? (
            <CustomTextBox
              width={'85%'}
              backgroundColor={WHITE_COLOR}
              placeholder={'Quantity'}
            />
          ) : (
            <CustomText description={'119'} iconName={'sort-amount-asc'} />
          )}
          {this.state.toggleMode ? (
            <CustomTextBox
              width={'85%'}
              backgroundColor={WHITE_COLOR}
              placeholder={'Enter Voucher Code'}
            />
          ) : (
            <CustomText description={'2333'} iconName={'key'} />
          )}

          {this.state.toggleMode ? (
            <CustomDropdown title="Meal Type" />
          ) : (
            <CustomText description={'Breakfast'} iconName={'crosshairs'} />
          )}

          {/* checkboxes */}
          <View style={{height: 10}} />
          <CustomCheckbox
            text={'Food Type'}
            firstText={'Veg'}
            secondText={'Non-Veg'}
          />
          <CustomCheckbox
            text={'Food Category'}
            firstText={'Halal'}
            secondText={'Not-Halal'}
          />
          <CustomCheckbox
            text={'Delivery Type'}
            firstText={'Delivery'}
            secondText={'Self Pick'}
          />

          {/* button */}
          <View style={{height: 40}} />
          <CustomButton
            onPress={() => this.toggle()}
            width="85%"
            text={this.state.toggleMode ? ' Create Meal' : 'Edit Meal'}
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
});
