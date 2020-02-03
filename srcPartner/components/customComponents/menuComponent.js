import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Button, Text} from 'native-base';
import {SMALL, EXTRA_SMALL} from '../../font/font';
import {WHITE_COLOR} from '../../theme/color';

export default class MenuComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 15}} />
        <View style={styles.boxStyle}>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../images/menu.jpg')}
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 5,
                }}
              />
            </View>
            <View
              style={{
                flex: 3,

                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <Text style={{fontSize: SMALL}}>Toast</Text>
              <View style={{height: 10}} />
              <Text note style={{fontSize: EXTRA_SMALL}}>
                12$
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {this.props.addToCartButton ? (
                <Button
                  style={{
                    height: this.props.height ? this.props.height : 35,
                    borderRadius: this.props.borderRadius
                      ? this.props.borderRadius
                      : 1,
                    alignSelf: 'center',
                    backgroundColor: 'green',
                  }}>
                  <Text style={{fontSize: EXTRA_SMALL, color: WHITE_COLOR}}>
                    {this.props.secondButtonText
                      ? this.props.secondButtonText
                      : 'Add to Cart'}
                  </Text>
                </Button>
              ) : (
                <Button rounded style={styles.buttonStyle}>
                  <Text style={{color: 'red', fontSize: EXTRA_SMALL}}>
                    Delete
                  </Text>
                </Button>
              )}
              {this.props.showHeight ? <View style={{height: 7}} /> : false}
              {this.props.extraButton ? (
                <Button
                  style={{
                    height: 25,
                    alignSelf: 'center',
                    backgroundColor: this.props.bggColor
                      ? this.props.bggColor
                      : 'orange',
                  }}>
                  <Text style={{fontSize: EXTRA_SMALL, color: WHITE_COLOR}}>
                    {this.props.buttonText
                      ? this.props.buttonText
                      : 'Send BroadCast'}
                  </Text>
                </Button>
              ) : (
                false
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxStyle: {
    height: 70,
    width: '97%',
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 30,
    width: 100,
    alignSelf: 'center',
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: WHITE_COLOR,
    justifyContent: 'center',
    marginBottom: 20,
  },
});
