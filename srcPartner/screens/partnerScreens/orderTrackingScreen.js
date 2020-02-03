import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import {WHITE_COLOR, SCREEN_BG_COLOR} from '../../theme/color';
import CustomHeader from '../../components/customComponents/customHeader';
import BLD_MealComponent from '../../components/BLD_MealComponent';

export default class OrderTrackingScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader headerTitle={'Wait and Hold'} />
        <Content>
          <BLD_MealComponent
            buttonText="Breakfast"
            timeIconText="Date and Time"
            phoneNumber="0306xxxxxxx"
            secondButton
            secondButtonText="On the Way"
            emptyDate
          />
          <BLD_MealComponent
            buttonText="Breakfast"
            timeIconText="Date and Time"
            phoneNumber="0306xxxxxxx"
            secondButton
            secondButtonText="Ordered"
            emptyDate
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
