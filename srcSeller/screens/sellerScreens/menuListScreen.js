import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Container, Content} from 'native-base';
import {WHITE_COLOR, Button_BG_COLOR} from '../../theme/color';
import CustomHeader from '../../components/customComponents/customHeader';
import MenuComponent from '../../components/customComponents/menuComponent';
import {LARGE} from '../../font/font';

export default class MenuListScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader showHeaderButton />
        <View style={styles.pageTitleViewStyle}>
          <Text style={{color: Button_BG_COLOR, fontSize: LARGE}}>
            Menu List
          </Text>
        </View>
        <Content>
          <MenuComponent />
          <MenuComponent />
          <MenuComponent />
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
