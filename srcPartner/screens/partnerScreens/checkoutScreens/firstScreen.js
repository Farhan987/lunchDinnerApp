import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  FooterTab,
  Footer,
  Left,
  Right,
} from 'native-base';
import {WHITE_COLOR} from '../../../theme/color';
import CartCounterComponent from '../../../components/cartCounterComponent';

export default class CheckoutFirstScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <CartCounterComponent showText />
          <CartCounterComponent showText />
          <CartCounterComponent showText />
          <CartCounterComponent showText />
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: WHITE_COLOR}}>
            <Left style={{marginLeft: '6%'}}>
              <Text style={{color: 'grey'}}>Total</Text>
              <Text style={{fontWeight: 'bold', color: 'green'}}>$1500</Text>
            </Left>
            <Right>
              <Button style={styles.buttonStyle}>
                <Text> Checkout </Text>
              </Button>
            </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginRight: '13%',
    backgroundColor: 'green',
    width: 130,
    justifyContent: 'center',
  },
});
