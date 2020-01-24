import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Button, Text} from 'native-base';
import MealComponentPart from './customComponents/partOfCustomMeal';
import {SMALL, EXTRA_SMALL} from '../font/font';
import {Button_BG_COLOR, WHITE_COLOR} from '../theme/color';

let mealImage = require('../images/meal.png');
let halalImage = require('../images/halal.png');
let vegetarianImage = require('../images/vegetable.png');
let clockImage = require('../images/time.png');
let shopImage = require('../images/shop.png');
let landlineImage = require('../images/phone.png');

export default class BLD_MealComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
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
                flex: 1,

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/menu.jpg')}
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
              <Text note style={{fontSize: EXTRA_SMALL}}>
                This is a seafood dish ,rice included withmultiple souces and
                this dish have agreat
              </Text>
            </View>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Button
                rounded
                style={{
                  height: 25,
                  alignSelf: 'center',
                  backgroundColor: this.props.buttonBgColor
                    ? this.props.buttonBgColor
                    : Button_BG_COLOR,
                }}>
                <Text style={{color: WHITE_COLOR, fontSize: EXTRA_SMALL}}>
                  {this.props.buttonText}
                </Text>
              </Button>
            </View>
          </View>

          {/* second */}
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.itemsViewStyle}>
              <MealComponentPart iconText="x 3" iconSource={mealImage} />
            </View>
            <View style={styles.itemsViewStyle}>
              <MealComponentPart iconText="Halal" iconSource={halalImage} />
            </View>

            <View style={styles.itemsViewStyle}>
              <MealComponentPart
                iconText="Vegetarian"
                iconSource={vegetarianImage}
              />
            </View>
            <View style={styles.itemsViewStyle}>
              <MealComponentPart
                iconText="10:00 AM to 10:30 AM"
                iconSource={clockImage}
              />
            </View>
          </View>
          {/* third */}
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.itemsViewStyle}>
              <MealComponentPart
                iconText="Shop Name"
                iconSource={shopImage}
                imageHeight={18}
                imageWidth={21}
              />
            </View>
            <View style={styles.itemsViewStyle}>
              {this.props.showCashOnPick ? (
                <MealComponentPart
                  iconText="Cash on Pick"
                  iconSource={truckImage}
                  imageHeight={18}
                  imageWidth={25}
                />
              ) : (
                false
              )}
            </View>
            <View style={{flex: 1}} />
          </View>

          {/* fourth */}
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <MealComponentPart
                iconText="Jinnah Town, Sahiwal PUnjab Pakistan"
                iconSource={landlineImage}
              />
            </View>
            <View style={styles.bottomButtonStyle}>
              <Button
                bordered
                danger
                rounded
                style={{height: 25, alignSelf: 'center'}}>
                <Text style={{fontSize: EXTRA_SMALL, color: 'red'}}>
                  Delete
                </Text>
              </Button>
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
    marginTop: 10,
  },
  boxStyle: {
    height: 150,
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
  bottomButtonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
