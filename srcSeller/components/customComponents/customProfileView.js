import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Text, Button, Icon} from 'native-base';
import {SCREEN_BG_COLOR, WHITE_COLOR, Button_BG_COLOR} from '../../theme/color';

export default class CustomProfileView extends Component {
  state = {
    image: null,
  };
  SelectImage = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 100,
      cropping: true,
    }).then(image => {
      console.log(image);
      let imgSource = {
        uri: image.path,
        type: image.mime,
        name: image.path.replace(/^.*[\\\/]/, ''),
      };

      this.setState({image: imgSource});
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backViewStyle}>
          <View style={styles.buttonsStyle}>
            <Button iconLeft transparent>
              <Icon name="arrow-back" style={{color: WHITE_COLOR}} />
              <Text style={{color: WHITE_COLOR}}>Back</Text>
            </Button>
          </View>

          <View style={[styles.buttonsStyle, {alignItems: 'flex-end'}]}>
            {this.props.showEditButton ? (
              <TouchableOpacity>
                <Image
                  source={require('../../images/edit.png')}
                  style={{height: 45, width: 45, marginRight: '8%'}}
                />
              </TouchableOpacity>
            ) : (
              false
            )}
          </View>
        </View>
        <View
          style={[
            styles.imageViewStyle,
            {
              height: this.props.imageViewHeight
                ? this.props.imageViewHeight
                : 40,
            },
          ]}>
          <Image
            resizeMode="stretch"
            style={{
              height: this.props.height ? this.props.height : 100,
              width: this.props.width ? this.props.width : 100,
              borderRadius: this.props.borderRadius
                ? this.props.borderRadius
                : 200,
              zIndex: 999,
              alignSelf: 'center',
              marginTop: this.props.marginTop ? this.props.marginTop : 40,
            }}
            source={
              this.state.image
                ? this.state.image
                : require('../../images/profile.png')
            }
          />
        </View>
        <View
          style={{height: this.props.lowerHeight ? this.props.lowerHeight : 60}}
        />
        {this.props.showButton ? (
          <View style={styles.buttonViewStyle}>
            <Button
              onPress={() => this.SelectImage()}
              style={styles.buttonStyle}>
              <Text style={{color: WHITE_COLOR}}>{this.props.buttonText}</Text>
            </Button>
          </View>
        ) : (
          false
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  backViewStyle: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: SCREEN_BG_COLOR,
  },
  buttonsStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  imageViewStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SCREEN_BG_COLOR,
  },
  logoStyle: {},
  buttonViewStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 35,
    alignSelf: 'center',
    borderRadius: 3,
    backgroundColor: Button_BG_COLOR,
  },
});
