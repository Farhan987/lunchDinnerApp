import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import {WHITE_COLOR} from '../../theme/color';
import CustomHeader from '../../components/customComponents/customHeader';
import InterestComponent from '../../components/interestComponent';

export default class NotificationTrayScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader headerTitle={'Notification Tray'} />

        <Content>
          <InterestComponent />
          <InterestComponent />
          <InterestComponent />
          <InterestComponent />
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
