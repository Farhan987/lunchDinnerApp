import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {SCREEN_BG_COLOR} from '../srcSeller/theme/color';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('MainScreen'), 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{height: 200, width: 310}}
          source={require('../srcSeller/images/logo.jpeg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SCREEN_BG_COLOR,
  },
});
