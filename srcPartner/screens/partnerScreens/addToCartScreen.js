import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Container, Tab, Tabs, TabHeading, Text} from 'native-base';
import {WHITE_COLOR, SCREEN_BG_COLOR} from '../../theme/color';
import CustomHeader from '../../components/customComponents/customHeader';
import BLD_MealComponent from '../../components/BLD_MealComponent';
import MenuComponent from '../../components/customComponents/menuComponent';

export default class AddToCartScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader
          showBackButton
          onPressBack={() => this.props.navigation.goBack()}
        />
        <Tabs tabBarUnderlineStyle={{backgroundColor: SCREEN_BG_COLOR}}>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: WHITE_COLOR}}>
                <Text style={{color: SCREEN_BG_COLOR}}>All Meals</Text>
              </TabHeading>
            }>
            <ScrollView>
              <BLD_MealComponent
                buttonText="Breakfast"
                timeIconText="Date and Time"
                phoneNumber="0306xxxxxxx"
                secondButton
                secondButtonText="Broadcast"
                bgColor={'#F29900'}
                emptyDate
                showAddToCart
              />
              <BLD_MealComponent
                buttonText="Breakfast"
                showAddToCart
                timeIconText="Date and Time"
                phoneNumber="0306xxxxxxx"
                secondButton
                secondButtonText="Broadcast"
                bgColor={'#BC0000'}
                emptyDate
              />
              <BLD_MealComponent
                buttonText="Breakfast"
                timeIconText="Date and Time"
                phoneNumber="0306xxxxxxx"
                secondButton
                secondButtonText="Broadcast"
                bgColor={'#F29900'}
                emptyDate
              />
            </ScrollView>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: WHITE_COLOR}}>
                <Text style={{color: SCREEN_BG_COLOR}}>Menu</Text>
              </TabHeading>
            }>
            <ScrollView>
              <MenuComponent
                addToCartButton
                borderRadius={50}
                height={25}
                showHeight
                bdColor={'green'}
                txtColor={WHITE_COLOR}
                extraButton
              />
              <MenuComponent
                addToCartButton
                borderRadius={50}
                height={25}
                showHeight
                bdColor={'green'}
                txtColor={WHITE_COLOR}
                extraButton
                bggColor={'red'}
              />
              <MenuComponent
                addToCartButton
                borderRadius={50}
                height={25}
                showHeight
                bdColor={'green'}
                txtColor={WHITE_COLOR}
                extraButton
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
