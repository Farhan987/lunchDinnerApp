import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Container, Text, Content} from 'native-base';
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

          <View style={[styles.viewStyle, {flex: 2}]}>
            <Text style={{fontSize: LARGE, paddingTop: 2}}>Farhan Akram</Text>
          </View>
        </View>

        <View
          style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
        />
        <Content>
          <DrawerComponent
            text="Home"
            iconName="home"
            // navigation={this.props.navigation}
            // onPress={() => this.props.navigation.navigate('EditProfileScreen')}
          />
          <View
            style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
          />
          <DrawerComponent
            text="Search Meals"
            iconName="search"
            // navigation={this.props.navigation}
            // onPress={() =>
            //   this.props.navigation.navigate('ShippingAdressScreen')
            // }
          />
          <View
            style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
          />
          <DrawerComponent
            text="Search Sellers"
            iconName="user"
            // navigation={this.props.navigation}
            // onPress={() => this.props.navigation.navigate('WishListScreen')}
          />
          <View
            style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
          />
          <DrawerComponent
            text="Interested Meals"
            iconName="star"
            // navigation={this.props.navigation}
            // onPress={() => this.props.navigation.navigate('WishListScreen')}
          />
          <View
            style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
          />

          <DrawerComponent
            text="Notification Tray"
            iconName="bell"
            // navigation={this.props.navigation}
            // onPress={() => this.props.navigation.navigate('WishListScreen')}
          />
          <View
            style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
          />
          <DrawerComponent
            text="History"
            iconName="history"
            // navigation={this.props.navigation}
            // onPress={() => this.props.navigation.navigate('WishListScreen')}
          />
          <View
            style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
          />
          <DrawerComponent
            text="Ordered Meals"
            iconName="cutlery"
            // navigation={this.props.navigation}
            // onPress={() => this.props.navigation.navigate('WishListScreen')}
          />
          <View
            style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
          />

          <DrawerComponent
            text="Cart"
            iconName="shopping-cart"
            // navigation={this.props.navigation}
            // onPress={() => this.props.navigation.navigate('WishListScreen')}
          />
          <View
            style={{height: 1, width: '100%', backgroundColor: Button_BG_COLOR}}
          />

          <DrawerComponent text=" Logout" iconName="sign-out" />
        </Content>
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
