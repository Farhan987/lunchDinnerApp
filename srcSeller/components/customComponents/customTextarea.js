import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Textarea, Input, Item, Icon} from 'native-base';
import {BORDER_COLOR} from '../../theme/color';

export default class CustomTextarea extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{height: 15}}></View>
        <View>
          <Item regular style={styles.textareaStyle}>
            <Textarea rowSpan={5} placeholder={this.props.title} />
          </Item>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  textareaStyle: {
    width: '85%',
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'center',
    marginTop: 5,
  },
});
