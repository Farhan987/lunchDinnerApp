import React, {Component} from 'react';
import {View} from 'react-native';
import {Input, Item, Icon} from 'native-base';
import {BORDER_COLOR, Textbox_BG_COLOR, WHITE_COLOR} from '../../theme/color';
import {SMALL} from '../../font/font';
export default class CustomTextBox extends Component {
  state = {
    passwordIcon: 'eye-off',
    confirmPasswordIcon: 'eye-off',
    showPassword: true,
    showConfirmPassword: true,
  };

  _changePasswordIcon = () => {
    this.setState(prevState => ({
      passwordIcon: prevState.passwordIcon === 'eye' ? 'eye-off' : 'eye',
      showPassword: !prevState.showPassword,
    }));
  };
  _changeConfirmPasswordIcon = () => {
    this.setState(prevState => ({
      confirmPasswordIcon:
        prevState.confirmPasswordIcon === 'eye' ? 'eye-off' : 'eye',
      showConfirmPassword: !prevState.showConfirmPassword,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <View style={{height: 15}} />
        <Item
          regular
          style={{
            height: 45,
            width: this.props.width ? this.props.width : '80%',
            alignSelf: 'center',
            borderRadius: 5,
            borderColor: BORDER_COLOR,
            backgroundColor: this.props.backgroundColor
              ? this.props.backgroundColor
              : Textbox_BG_COLOR,
          }}>
          <Input
            style={{fontSize: SMALL}}
            placeholder={this.props.placeholder}
            keyboardType={this.props.keyboardType}
          />
          {this.props.showEye1 ? (
            <Icon
              style={{color: WHITE_COLOR}}
              name={this.state.passwordIcon}
              onPress={() => this._changePasswordIcon()}
            />
          ) : (
            false
          )}
          {this.props.showEye2 ? (
            <Icon
              style={{color: WHITE_COLOR}}
              name={this.state.confirmPasswordIcon}
              onPress={() => this._changeConfirmPasswordIcon()}
            />
          ) : (
            false
          )}
        </Item>
      </React.Fragment>
    );
  }
}
