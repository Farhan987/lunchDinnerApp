import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content} from 'native-base';
import {WHITE_COLOR} from '../../theme/color';
import CustomProfileView from '../../components/customComponents/customProfileView';
import CustomButton from '../../components/customComponents/customButton';
import CustomTextBox from '../../components/customComponents/customTextbox';
import CustomText from '../../components/customComponents/customText';

export default class AddMenuScreen extends Component {
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
          <View style={{height: 40}} />
          <CustomButton
            onPress={() => this.toggle()}
            width="85%"
            text={this.state.toggleMode ? ' Create Menu' : 'Edit Menu'}
          />
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
