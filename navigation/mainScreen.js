import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {SCREEN_BG_COLOR} from '../srcSeller/theme/color';
import CustomButton from '../srcSeller/components/customComponents/customButton';
export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomButton
          text={'Seller'}
          onPress={() => this.props.navigation.navigate('SellerAuthScreens')}
        />
        <View style={{height: 60}} />
        <CustomButton text={'Buyer'} />
        <View style={{height: 60}} />
        <CustomButton
          text={'Partner'}
          onPress={() => this.props.navigation.navigate('PartnerAuthScreens')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: SCREEN_BG_COLOR,
  },
});
