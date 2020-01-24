import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CartCounterComponent from '../../../components/cartCounterComponent';
export default class StepThreeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CartCounterComponent />
        <CartCounterComponent />
        <CartCounterComponent />
        <CartCounterComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
