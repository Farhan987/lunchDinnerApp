import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Container, Tab, Tabs, TabHeading, Text, Content} from 'native-base';
import {WHITE_COLOR, SCREEN_BG_COLOR, GREEN} from '../../theme/color';
import CustomHeader from '../../components/customComponents/customHeader';
import BLD_MealComponent from '../../components/BLD_MealComponent';
import {SMALL} from '../../font/font';
import CustomMealComponent from '../../components/customComponents/customMeal';

export default class HoldAndExpressedScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader
          headerTitle={'Hold and Expressed'}
          onPressMenu={() => this.props.navigation.toggleDrawer()}
        />
        <Content>
          <CustomMealComponent
            buttonText={'Breakfast'}
            butttonText={'Add in Cart'}
            bddColor={GREEN}
            bggColor={GREEN}
            showCashOnPick
            showPartner
            butttonTextColor={WHITE_COLOR}
            secondButton
            bgColor={'#f5f5f5'}
          />

          <CustomMealComponent
            buttonText={'Breakfast'}
            butttonText={'Add in Cart'}
            showCashOnPick
            showPartner
            btnBgColor={'green'}
            btnBorderColor={'green'}
            btnTextColor={WHITE_COLOR}
            secondButton
            bgColor={'#f5f5f5'}
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
