import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import {SCREEN_BG_COLOR, WHITE_COLOR, Button_BG_COLOR} from '../../theme/color';
export default class CustomHeader extends Component {
  render() {
    return (
      <Header style={{backgroundColor: SCREEN_BG_COLOR}}>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body></Body>

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
