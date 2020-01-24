import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Container, Tab, Tabs, TabHeading, Text} from 'native-base';
import {WHITE_COLOR, SCREEN_BG_COLOR} from '../../theme/color';
import CustomHeader from '../../components/customComponents/customHeader';
import BLD_MealComponent from '../../components/BLD_MealComponent';
import {SMALL} from '../../font/font';
import CustomMealComponent from '../../components/customComponents/customMeal';

export default class SellerOrderScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader />
        <Tabs tabBarUnderlineStyle={{backgroundColor: SCREEN_BG_COLOR}}>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: WHITE_COLOR}}>
                <Text style={{color: SCREEN_BG_COLOR, fontSize: SMALL}}>
                  Direct Booking From Buyer
                </Text>
              </TabHeading>
            }>
            <ScrollView>
              <CustomMealComponent />
              <CustomMealComponent />
              <CustomMealComponent />
            </ScrollView>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: WHITE_COLOR}}>
                <Text style={{color: SCREEN_BG_COLOR, fontSize: SMALL}}>
                  Booking from Partner
                </Text>
              </TabHeading>
            }>
            <ScrollView>
              <CustomMealComponent showCashOnPick />
              <CustomMealComponent showCashOnPick />
            </ScrollView>
          </Tab>
        </Tabs>
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
