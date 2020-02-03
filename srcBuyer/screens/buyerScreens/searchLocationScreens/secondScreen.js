import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Container, Tab, Tabs, TabHeading, Text} from 'native-base';
import {WHITE_COLOR, SCREEN_BG_COLOR} from '../../../theme/color';
import CustomHeader from '../../../components/customComponents/customHeader';
import BLD_MealComponent from '../../../components/BLD_MealComponent';
import CustomSearchBar from '../../../components/customComponents/customSearchBar';

export default class SearchLocationThirdScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader showBackButton />
        <Tabs tabBarUnderlineStyle={{backgroundColor: SCREEN_BG_COLOR}}>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: WHITE_COLOR}}>
                <Text style={{color: SCREEN_BG_COLOR}}>All</Text>
              </TabHeading>
            }>
            <ScrollView>
              <CustomSearchBar />
              <BLD_MealComponent
                buttonText="Breakfast"
                timeIconText="Date and Time"
                phoneNumber="0306xxxxxxx"
                secondButton
                secondButtonText="Add to Cart"
                emptyDate
              />
              <BLD_MealComponent
                buttonText="Lunch"
                timeIconText="Date and Time"
                phoneNumber="0306xxxxxxx"
                secondButton
                secondButtonText="Add to Cart"
                emptyDate
                buttonBgColor={'orange'}
              />
              <BLD_MealComponent
                buttonText="Dinner"
                timeIconText="Date and Time"
                phoneNumber="0306xxxxxxx"
                secondButton
                secondButtonText="Add to Cart"
                emptyDate
                buttonBgColor={'brown'}
              />
            </ScrollView>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: WHITE_COLOR}}>
                <Text style={{color: SCREEN_BG_COLOR}}>Breakfast</Text>
              </TabHeading>
            }>
            <ScrollView>
              <BLD_MealComponent
                buttonText="Breakfast"
                timeIconText="Date and Time"
                phoneNumber="0306xxxxxxx"
                secondButton
                secondButtonText="Add to Cart"
                emptyDate
              />
            </ScrollView>
          </Tab>

          <Tab
            heading={
              <TabHeading style={{backgroundColor: WHITE_COLOR}}>
                <Text style={{color: SCREEN_BG_COLOR}}>Lunch</Text>
              </TabHeading>
            }>
            <ScrollView>
              <BLD_MealComponent
                buttonText="Lunch"
                timeIconText="Date and Time"
                phoneNumber="0306xxxxxxx"
                secondButton
                secondButtonText="Add to Cart"
                emptyDate
                buttonBgColor={'orange'}
              />
            </ScrollView>
          </Tab>

          <Tab
            heading={
              <TabHeading style={{backgroundColor: WHITE_COLOR}}>
                <Text style={{color: SCREEN_BG_COLOR}}>Dinner</Text>
              </TabHeading>
            }>
            <ScrollView>
              <BLD_MealComponent
                buttonText="Dinner"
                timeIconText="Date and Time"
                phoneNumber="0306xxxxxxx"
                secondButton
                secondButtonText="Add to Cart"
                emptyDate
                buttonBgColor={'brown'}
              />
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
