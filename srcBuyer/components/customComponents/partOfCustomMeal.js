import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {SMALL, EXTRA_SMALL} from '../../font/font';

export default class MealComponentPart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={this.props.iconSource}
              style={{
                height: this.props.imageHeight ? this.props.imageHeight : 20,
                width: this.props.imageWidth ? this.props.imageWidth : 20,
              }}
            />
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text style={{fontSize: EXTRA_SMALL}}>{this.props.iconText}</Text>
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
});
