import React, {Component} from 'react';
import {
  Header,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Title,
} from 'native-base';
import {SCREEN_BG_COLOR, WHITE_COLOR, Button_BG_COLOR} from '../../theme/color';
export default class CustomHeader extends Component {
  render() {
    return (
      <Header style={{backgroundColor: SCREEN_BG_COLOR}}>
        <Left>
          {this.props.showBackButton ? (
            <Button iconLeft transparent onPress={this.props.onPressBack}>
              <Icon name="arrow-back" style={{color: WHITE_COLOR}} />
              <Text style={{color: WHITE_COLOR}}>Back</Text>
            </Button>
          ) : (
            <Button transparent onPress={this.props.onPressMenu}>
              <Icon name="menu" />
            </Button>
          )}
        </Left>
        <Body>
          <Title>{this.props.headerTitle}</Title>
        </Body>

        {this.props.showHeaderButton ? (
          <Right>
            <Button
              style={{
                height: 40,
                borderColor: Button_BG_COLOR,
                borderWidth: 3,
                backgroundColor: SCREEN_BG_COLOR,
              }}>
              <Text style={{color: WHITE_COLOR}}>Add Menu</Text>
            </Button>
          </Right>
        ) : (
          false
        )}
      </Header>
    );
  }
}
