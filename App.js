import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import OrderHistoryScreen from './srcBuyer/screens/buyerScreens/orderHistoryScreen';
import InterestTrayScreen from './srcBuyer/screens/buyerScreens/interestTrayScreen';
import OrderPlacementScreen from './srcBuyer/screens/buyerScreens/orderPlacementScreen';
import CartStepOneScreen from './srcBuyer/screens/buyerScreens/cartScreens/stepOne';
import StepOneScreen from './srcBuyer/screens/buyerScreens/cartScreens/stepOne';
import StepTwoScreen from './srcBuyer/screens/buyerScreens/cartScreens/stepTwo';
import StepThreeScreen from './srcBuyer/screens/buyerScreens/cartScreens/stepThree';
import CartSummaryScreen from './srcBuyer/screens/buyerScreens/cartScreens/stepFour';
import ShowInterestScreen from './srcBuyer/screens/buyerScreens/showInterestScreen';
import ConfirmOrderScreen from './srcBuyer/screens/buyerScreens/confirmOrderScreen';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ConfirmOrderScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
