import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Container, Text} from 'native-base';
import {LARGE, SMALL} from '../../font/font';
import DrawerComponent from '../../components/drawerBar';
import {SCREEN_BG_COLOR, Button_BG_COLOR} from '../../theme/color';

export default class DrawerScreen extends Component {
  // static navigationOptions = () => {
  //   return {
  //     header: null,
  //   };
  // };

  render() {
    return (
      <Container style={{backgroundColor: SCREEN_BG_COLOR}}>
        <View style={styles.upperMainViewStyle}>
          <View style={styles.viewStyle}>
            <Image
              style={{height: 90, width: 90, borderRadius: 200}}
              source={require('../../images/profile.png')}
            />
          </View>
          <View style={[styles.viewStyle, {flex: 1}]}>
            <Text style={{fontSize: LARGE, paddingTop: 2}}>Farhan Akram</Text>
          </View>
        </View>
        <View
          style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
        />
        <DrawerComponent
          onPressDrawerBar={() =>
            this.props.navigation.navigate('SellerAllMealScreen')
          }
          text="Meals"
          iconName="cutlery"
        />
        <View
          style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
        />
        <DrawerComponent
          onPressDrawerBar={() =>
            this.props.navigation.navigate('SellerMenuListScreen')
          }
          text="Menu"
          iconName="caret-square-o-down"
        />
        <View
          style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
        />
        <DrawerComponent
          onPressDrawerBar={() =>
            this.props.navigation.navigate('SellerOrderScreen')
          }
          text=" All Orders"
          iconName="list-ol"
        />
        <View
          style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
        />
        <DrawerComponent
          onPressDrawerBar={() =>
            this.props.navigation.navigate('SellerEditInfoScreen')
          }
          text="Profile"
          iconName="user"
        />
        <View
          style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
        />

        <DrawerComponent
          text=" Logout"
          iconName="sign-out"
          onPressDrawerBar={() =>
            this.props.navigation.navigate('SellerLoginScreen')
          }
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  upperMainViewStyle: {
    height: 130,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
