import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import {WHITE_COLOR} from '../../theme/color';
import CustomHeader from '../../components/customComponents/customHeader';
import BLD_MealComponent from '../../components/BLD_MealComponent';

export default class OrderedMealScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader headerTitle={'Ordered Meals'} />

        <Content>
          <BLD_MealComponent
            buttonText="Breakfast"
            timeIconText="Date and Time"
            phoneNumber="0306xxxxxxx"
            secondButton
            bgColor={'orange'}
          />
          <BLD_MealComponent
            buttonText="Breakfast"
            timeIconText="Date and Time"
            phoneNumber="0306xxxxxxx"
            secondButton
            bgColor={'orange'}
          />
          <BLD_MealComponent
            buttonText="Breakfast"
            timeIconText="Date and Time"
            phoneNumber="0306xxxxxxx"
            secondButton
            bgColor={'orange'}
          />
          <BLD_MealComponent
            buttonText="Breakfast"
            timeIconText="Date and Time"
            phoneNumber="0306xxxxxxx"
            secondButton
            bgColor={'orange'}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  pageTitleViewStyle: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
});
