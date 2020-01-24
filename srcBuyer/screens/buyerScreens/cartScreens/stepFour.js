import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Container, Content} from 'native-base';
import ProductDetailComponent from '../../../components/productDetailComponent';
import {SCREEN_BG_COLOR} from '../../../theme/color';
import {MEDIUM} from '../../../font/font';
export default class CartSummaryScreen extends Component {
  render() {
    return (
      <Container>
        <View style={styles.pageTitleStyle}>
          <Text>Summary of the Order</Text>
        </View>
        <Content>
          <View style={{height: 20}} />
          <ScrollView
            horizontal={true}
            style={{height: 180, flexDirection: 'row', paddingLeft: 20}}>
            <ProductDetailComponent
              mealImage={require('../../../images/menu.jpg')}
            />
            <ProductDetailComponent
              mealImage={require('../../../images/menu.jpg')}
            />
            <ProductDetailComponent
              mealImage={require('../../../images/menu.jpg')}
            />
            <ProductDetailComponent
              mealImage={require('../../../images/menu.jpg')}
            />
          </ScrollView>

          {/* ////// */}

          <View style={{height: 40}} />
          <View style={styles.lineStyle} />
          <View style={styles.textsMainViewStyle}>
            <View style={styles.desViewStyle}>
              <Text style={{color: 'black', fontSize: MEDIUM}}>Sub Total</Text>
            </View>
            <View style={styles.priceViewStyle}>
              <Text
                style={{color: 'black', fontSize: MEDIUM, fontWeight: 'bold'}}>
                $399
              </Text>
            </View>
          </View>

          <View style={styles.textsMainViewStyle}>
            <View style={styles.desViewStyle}>
              <Text style={{color: 'black', fontSize: MEDIUM}}>
                Delivery Charges
              </Text>
            </View>
            <View style={styles.priceViewStyle}>
              <Text
                style={{color: 'black', fontSize: MEDIUM, fontWeight: 'bold'}}>
                $50
              </Text>
            </View>
          </View>

          <View style={styles.textsMainViewStyle}>
            <View style={styles.desViewStyle}>
              <Text style={{color: 'black', fontSize: MEDIUM}}>Tax</Text>
            </View>
            <View style={styles.priceViewStyle}>
              <Text
                style={{color: 'black', fontSize: MEDIUM, fontWeight: 'bold'}}>
                $39
              </Text>
            </View>
          </View>
          <View style={styles.lineStyle} />
          <View style={{height: 20}} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitleStyle: {
    height: 50,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  lineStyle: {
    height: 1,
    width: '95%',
    backgroundColor: '#979797',
    alignSelf: 'center',
  },
  textsMainViewStyle: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  desViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  priceViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonStyle: {
    marginRight: '13%',
    backgroundColor: SCREEN_BG_COLOR,
    width: 130,
    justifyContent: 'center',
  },
});
