import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Container, Tab, Tabs, TabHeading, Text, Content} from 'native-base';
import {WHITE_COLOR, SCREEN_BG_COLOR} from '../../theme/color';
import CustomHeader from '../../components/customComponents/customHeader';
import BLD_MealComponent from '../../components/BLD_MealComponent';
import {SMALL} from '../../font/font';
import CustomMealComponent from '../../components/customComponents/customMeal';

export default class OrderHistoryScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader
          headerTitle={'Order History'}
          onPressMenu={() => this.props.navigation.toggleDrawer()}
        />
        <Content>
          <CustomMealComponent
            buttonText={'Breakfast'}
            butttonText={'Paid'}
            showCashOnPick
            showPartner
            lastButtonText={'Cancel'}
          />
          <CustomMealComponent
            buttonText={'Breakfast'}
            butttonText={'Paid'}
            showCashOnPick
            showPartner
            lastButtonText={'Cancel'}
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
